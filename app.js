// Produktkatalog
const products = [
    {
        id: 'D3S',
        brand: 'DYU',
        category: ['folding'],
        rangeKm: 50,
        motorW: 250,
        battery: '36V 10Ah',
        name: 'DYU D3S 14 Zoll Mini Falt-E-Bike',
        description: 'Leichtes und kompaktes Mini-Falt-E-Bike mit 14-Zoll-Reifen, 250-W-Motor und bis zu 50 km Reichweite – ideal für den urbanen Alltag.',
        longDescription: [
            'Das DYU D3S ist ein kompaktes Mini-Falt-E-Bike, das sich in nur drei Schritten zusammenklappen lässt und so problemlos in Bahn, Bus oder Kofferraum passt. Die 14-Zoll-Reifen machen es wendig und platzsparend im Stadtverkehr.',
            'Der leise 250-W-Hecknabenmotor (maximale Leistung 500 W) unterstützt Sie bis zu 25 km/h. Der integrierte 36-V-10-Ah-Lithium-Ionen-Akku ermöglicht im Pedal-Assist-Modus eine Reichweite von bis zu 50 km und ist in ca. 5–6 Stunden vollständig geladen.',
            'Die vorderen und hinteren Scheibenbremsen, das Frontlicht, das Rücklicht sowie das LCD-Display mit Akkustandanzeige sorgen für Komfort und Sicherheit. Mit nur 19 kg Gewicht, 120 kg Zuladung und IP54-Schutz ist das D3S ein zuverlässiger Begleiter für jeden Tag.'
        ],
        price: 439,
        stripeCheckoutUrl: 'https://buy.stripe.com/dRm3cnayL6jf6DGfOW3oA0R',
        folder: 'products/D3S',
        coverImage: 'products/D3S/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'
        ],
        hasVideo: false
    }
];

function formatPrice(price) {
    return `€${price.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getProductCheckoutUrl(product, variant) {
    if (variant && variant.stripeCheckoutUrl) {
        return variant.stripeCheckoutUrl.trim();
    }
    return (product.stripeCheckoutUrl || '').trim();
}

function createCheckoutButton(product, extraClass = '', variant = null) {
    const checkoutUrl = getProductCheckoutUrl(product, variant);
    const outOfStock = variant ? variant.outOfStock : product.outOfStock;
    if (outOfStock) {
        const classes = ['out-of-stock-badge', extraClass].filter(Boolean).join(' ');
        return `<span class="${classes}">Ausverkauft</span>`;
    }
    if (product.askForAvailability || (variant && variant.askForAvailability)) {
        return createAvailabilityButton(product, extraClass, variant);
    }
    if (!checkoutUrl) {
        return '';
    }

    const classes = ['checkout-btn', extraClass].filter(Boolean).join(' ');
    return `<a href="${checkoutUrl}" class="${classes}" target="_blank" rel="noopener noreferrer">Jetzt kaufen</a>`;
}

function createAvailabilityButton(product, extraClass = '', variant = null) {
    const classes = ['checkout-btn', 'availability-btn', extraClass].filter(Boolean).join(' ');
    const variantAttr = variant ? ` data-variant-id="${variant.id}"` : '';
    return `<button type="button" class="${classes}" data-product-id="${product.id}"${variantAttr}>Verfügbarkeit anfragen</button>`;
}

function getProductPreviewImagePath(product) {
    if (product.coverImage) {
        return product.coverImage;
    }

    if (product.variants?.length) {
        const firstVariant = product.variants[0];
        if (firstVariant.coverImage) {
            return firstVariant.coverImage;
        }
    }

    if (product.imageFiles && product.imageFiles.length) {
        return `${product.folder}/images/${product.imageFiles[0]}`;
    }

    return `${product.folder}/images/1.jpg`;
}

const CATEGORY_META = {
    mountain: { label: 'E-Mountainbike', order: 1 },
    city: { label: 'City / Urban', order: 2 },
    folding: { label: 'Faltbar', order: 3, heroImage: 'products/D3S/images/1.jpg' },
    moto: { label: 'Moto-Style', order: 4 },
    scooter: { label: 'E-Scooter', order: 5 }
};

function getCategoryHeroImage(categoryId) {
    const meta = CATEGORY_META[categoryId];
    if (meta.heroImage) {
        return meta.heroImage;
    }
    const hero = products.find(p => p.id === meta.heroProduct);
    return hero ? getProductPreviewImagePath(hero) : '';
}

const catalogState = {
    category: 'all',
    brand: 'all'
};

function getCatalogBrands() {
    return [...new Set(products.map(p => p.brand).filter(Boolean))].sort();
}

function getCatalogCategories() {
    const present = new Set();
    products.forEach(p => (p.category || []).forEach(c => present.add(c)));
    return Object.entries(CATEGORY_META)
        .filter(([id]) => present.has(id))
        .sort((a, b) => a[1].order - b[1].order)
        .map(([id, meta]) => ({ id, label: meta.label }));
}

function buildCategoryCards() {
    const container = document.getElementById('categoryCards');
    if (!container) return;

    container.innerHTML = '';

    getCatalogCategories().forEach(category => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'category-card';
        card.dataset.filter = category.id;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');

        card.innerHTML = `
            <img src="${getCategoryHeroImage(category.id)}" alt="${category.label}" loading="lazy">
            <span class="category-card-overlay">
                <span class="category-card-name">${category.label}</span>
            </span>
        `;

        card.addEventListener('click', () => {
            catalogState.category = catalogState.category === category.id ? 'all' : category.id;
            updateChips();
            loadProducts();
        });

        container.appendChild(card);
    });
}

function buildFilterChips(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = 'filter-chip active';
    allChip.textContent = 'Alle';
    allChip.dataset.filter = 'all';
    allChip.addEventListener('click', () => {
        catalogState.brand = 'all';
        updateChips();
        loadProducts();
    });
    container.appendChild(allChip);

    items.forEach(item => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'filter-chip';
        chip.textContent = item.label;
        chip.dataset.filter = item.id;
        chip.addEventListener('click', () => {
            catalogState.brand = item.id;
            updateChips();
            loadProducts();
        });
        container.appendChild(chip);
    });
}

function updateChips() {
    document.querySelectorAll('#categoryCards .category-card').forEach(card => {
        const isActive = catalogState.category === card.dataset.filter;
        card.classList.toggle('active', isActive);
        card.setAttribute('aria-pressed', isActive);
    });
    document.querySelectorAll('#brandFilter .filter-chip').forEach(chip => {
        const isActive = catalogState.brand === chip.dataset.filter;
        chip.classList.toggle('active', isActive);
        chip.setAttribute('aria-pressed', isActive);
    });
}

function getVisibleProducts() {
    const s = catalogState;

    return products.filter(product => {
        if (s.category !== 'all' && !(product.category || []).includes(s.category)) return false;
        if (s.brand !== 'all' && product.brand !== s.brand) return false;

        return true;
    });
}

function createProductCard(product) {
    const firstImagePath = getProductPreviewImagePath(product);
    const specs = getBasicSpecs(product);

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.productId = product.id;
    productCard.onclick = () => goToProduct(product.id);

    let specsHTML = '';
    Object.entries(specs).forEach(([key, value]) => {
        specsHTML += `<div class="card-spec"><span class="spec-key">${key}:</span> <span class="spec-val">${value}</span></div>`;
    });

    productCard.innerHTML = `
        <img src="${firstImagePath}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EBild nicht verfügbar%3C/text%3E%3C/svg%3E'">
        <div class="product-card-content">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-card-price">${formatPrice(product.price)} <span class="product-card-vat-note">(MwSt-befreit)</span></p>
            <p class="product-card-shipping-note">Kostenloser Versand</p>
            <div class="product-card-actions">
                ${createCheckoutButton(product)}
            </div>
            <div class="card-specs">
                ${specsHTML}
            </div>
        </div>
    `;

    const buyButton = productCard.querySelector('.checkout-btn');
    if (buyButton) {
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    return productCard;
}

function showEmptyState(productsList) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = '<p>Keine Produkte gefunden. Bitte passen Sie Ihre Filter an.</p>';
    productsList.appendChild(emptyState);
}

// Produkte auf der Startseite laden
function loadProducts() {
    const productsList = document.getElementById('productsList');

    if (!productsList) return; // Not on home page

    const visibleProducts = getVisibleProducts();

    productsList.innerHTML = '';

    if (!visibleProducts.length) {
        showEmptyState(productsList);
        return;
    }

    visibleProducts.forEach(product => {
        productsList.appendChild(createProductCard(product));
    });
}

function setupCatalogFilters() {
    if (!document.getElementById('productsList')) return;

    buildCategoryCards();
    buildFilterChips('brandFilter', getCatalogBrands().map(brand => ({ id: brand, label: brand })));
    updateChips();
}

// Zur Produktdetailseite navigieren
function goToProduct(productId) {
    window.location.href = `product-detail.html?product=${productId}`;
}

// Zum Produkt zurück scrollen, wenn über einen Produktparameter zurückgekehrt wird
function scrollToReturnedProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (!productId) return;

    const cards = document.querySelectorAll('#productsList .product-card');
    const card = Array.from(cards).find(c => c.dataset.productId === productId);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Produkt nach ID abrufen
function getProductById(productId) {
    return products.find(p => p.id === productId);
}

// Basisdaten je nach Produkt ermitteln
function getBasicSpecs(product) {
    const specs = {
        'Preis': `${formatPrice(product.price)}`,
        'Reichweite': `Bis ${product.rangeKm} km`,
        'Motorleistung': `${product.motorW} W`,
        'Akku': product.battery,
        'Max. Geschwindigkeit': '25 km/h'
    };

    return specs;
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    setupCatalogFilters();
    loadProducts();
    setupAvailabilityRequest();
    scrollToReturnedProduct();
});

// Setup site-wide inquiry form (used on index.html)
function setupSiteInquiryForm() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formDataObject = {
            productId: form.querySelector('[name="productId"]')?.value || null,
            productName: form.querySelector('[name="productName"]')?.value || null,
            sourcePage: form.querySelector('[name="sourcePage"]')?.value || 'main',
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push(formDataObject);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));

        try {
            await submitInquiryEmail(form);
            siteShowSuccessMessage();
            form.reset();
            console.log('Site inquiry submitted:', formDataObject);
        } catch (error) {
            console.error('E-Mail-Versand fehlgeschlagen:', error);
            alert('Ihre Anfrage konnte nicht per E-Mail gesendet werden. Bitte versuchen Sie es später erneut.');
        }
    });
}

async function submitInquiryEmail(form) {
    const emailEndpoint = 'https://formsubmit.co/ajax/ea2e661910e6d62498bce0022bd85aac ';
    const formData = new FormData(form);
    formData.set('_subject', 'Neue Anfrage von Ihrer Website');
    formData.set('_template', 'table');
    formData.set('_captcha', 'false');

    const response = await fetch(emailEndpoint, {
        method: 'POST',
        body: new URLSearchParams(formData)
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Email submission failed: ${response.status} ${response.statusText} - ${text}`);
    }

    const data = await response.json();
    if (data.success !== 'true' && data.success !== true) {
        throw new Error(`Email service error: ${JSON.stringify(data)}`);
    }

    return data;
}

function siteShowSuccessMessage() {
    let successMessage = document.querySelector('.success-message');

    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '✓ Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.';
        const inquirySection = document.querySelector('.inquiry-section');
        if (inquirySection) inquirySection.insertBefore(successMessage, inquirySection.querySelector('.inquiry-form'));
    }

    successMessage.classList.add('show');

    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Verfügbarkeitsanfrage
let currentAvailabilityRequest = null;

function ensureAvailabilityModal() {
    if (document.getElementById('availabilityModal')) return;

    const modal = document.createElement('div');
    modal.id = 'availabilityModal';
    modal.className = 'availability-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'availabilityModalTitle');
    modal.innerHTML = `
        <div class="availability-modal-content">
            <button type="button" class="availability-modal-close" id="availabilityModalClose" aria-label="Schließen">✕</button>
            <h3 id="availabilityModalTitle">Verfügbarkeit anfragen</h3>
            <p class="availability-modal-text">Hinterlassen Sie Ihre E-Mail-Adresse und wir melden uns zur Verfügbarkeit von <strong id="availabilityProductName"></strong> bei Ihnen.</p>
            <div class="availability-form" id="availabilityForm">
                <div class="form-group">
                    <label for="availabilityEmail">E-Mail-Adresse *</label>
                    <input type="email" id="availabilityEmail" name="availabilityEmail" placeholder="ihre@email.de" autocomplete="email" required>
                </div>
                <p class="availability-error" id="availabilityError" hidden></p>
                <button type="button" class="submit-btn" id="availabilitySubmitBtn">Verfügbarkeit anfragen</button>
            </div>
            <p class="availability-success" id="availabilitySuccess" hidden>✓ Vielen Dank! Ihre Verfügbarkeitsanfrage wurde gesendet. Wir melden uns in Kürze.</p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#availabilityModalClose')) {
            closeAvailabilityModal();
        }
    });

    document.getElementById('availabilitySubmitBtn').addEventListener('click', submitAvailabilityRequest);
    document.getElementById('availabilityEmail').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitAvailabilityRequest();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeAvailabilityModal();
        }
    });
}

function openAvailabilityModal(product, variantId = null) {
    ensureAvailabilityModal();

    const variant = product.variants?.find(v => v.id === variantId) || null;
    currentAvailabilityRequest = { product, variant };

    document.getElementById('availabilityProductName').textContent = variant
        ? `${product.name} (${variant.name})`
        : product.name;
    document.getElementById('availabilityEmail').value = '';
    document.getElementById('availabilityError').hidden = true;
    document.getElementById('availabilitySuccess').hidden = true;
    document.getElementById('availabilityForm').style.display = 'block';

    const modal = document.getElementById('availabilityModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        document.getElementById('availabilityEmail').focus();
    }, 50);
}

function closeAvailabilityModal() {
    const modal = document.getElementById('availabilityModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

async function submitAvailabilityRequest() {
    if (!currentAvailabilityRequest) return;

    const emailInput = document.getElementById('availabilityEmail');
    const errorEl = document.getElementById('availabilityError');
    const submitBtn = document.getElementById('availabilitySubmitBtn');
    const email = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorEl.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        errorEl.hidden = false;
        return;
    }

    errorEl.hidden = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet…';

    try {
        const { product, variant } = currentAvailabilityRequest;
        await sendAvailabilityEmail(product, variant, email);

        const requests = JSON.parse(localStorage.getItem('availabilityRequests') || '[]');
        requests.push({
            productId: product.id,
            productName: product.name,
            variant: variant ? variant.name : null,
            email,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('availabilityRequests', JSON.stringify(requests));

        document.getElementById('availabilityForm').style.display = 'none';
        document.getElementById('availabilitySuccess').hidden = false;
    } catch (error) {
        console.error('E-Mail-Versand fehlgeschlagen:', error);
        errorEl.textContent = 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.';
        errorEl.hidden = false;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Verfügbarkeit anfragen';
    }
}

async function sendAvailabilityEmail(product, variant, email) {
    const emailEndpoint = 'https://formsubmit.co/ajax/info@mrado.de';
    const params = new URLSearchParams();
    params.set('_subject', `Verfügbarkeitsanfrage: ${product.name}`);
    params.set('_template', 'table');
    params.set('_captcha', 'false');
    params.set('Product', product.name);
    params.set('Product-ID', product.id);
    params.set('Kunden-E-Mail', email);
    if (variant) params.set('Variante', variant.name);

    const response = await fetch(emailEndpoint, {
        method: 'POST',
        body: params
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Email submission failed: ${response.status} ${response.statusText} - ${text}`);
    }

    const data = await response.json();
    if (data.success !== 'true' && data.success !== true) {
        throw new Error(`Email service error: ${JSON.stringify(data)}`);
    }

    return data;
}

function setupAvailabilityRequest() {
    document.addEventListener('click', (event) => {
        const button = event.target.closest('.availability-btn');
        if (!button) return;
        event.preventDefault();
        event.stopPropagation();
        const productId = button.dataset.productId;
        const variantId = button.dataset.variantId || null;
        const product = getProductById(productId);
        if (product) {
            openAvailabilityModal(product, variantId);
        }
    }, true);
}

function setupScrollSpy() {
    const homeLink = document.querySelector('.nav a[href="index.html"]');
    const productsLink = document.querySelector('.nav a[href="#products"]');
    const contactLink = document.querySelector('.nav a[href="#contact"]');
    const productsSection = document.getElementById('products');
    const contactSection = document.getElementById('contact');

    if (!homeLink || !productsLink || !contactLink || !productsSection || !contactSection) {
        return;
    }

    const navLinks = [homeLink, productsLink, contactLink];

    function setActiveLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link === activeLink);
        });
    }

    function updateActiveLink() {
        const offset = window.scrollY + window.innerHeight * 0.2;

        if (offset >= contactSection.offsetTop) {
            setActiveLink(contactLink);
        } else if (offset >= productsSection.offsetTop) {
            setActiveLink(productsLink);
        } else {
            setActiveLink(homeLink);
        }
    }

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateActiveLink);
    });
    window.addEventListener('resize', () => {
        window.requestAnimationFrame(updateActiveLink);
    });

    updateActiveLink();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('contact')) {
        setupSiteInquiryForm();
    }
    setupScrollSpy();
});
