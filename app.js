// Produktkatalog
const products = [
    {
        id: 'i600',
        name: 'i600',
        description: 'Intelligenter Mähroboter mit Vision AI – mäht bis 600 m² Fläche, kein Begrenzungsdraht nötig.',
        folder: 'products/i600',
        imageCount: 5,
        hasVideo: true
    },
    {
        id: 'n1000',
        name: 'n1000',
        description: 'RTK GPS gesteuerter Mähroboter – mäht bis 3.000 m² mit zentimetergenauer Navigation.',
        folder: 'products/n1000',
        imageCount: 6,
        hasVideo: true
    }
];

// Produkte auf der Startseite laden
function loadProducts() {
    const productsList = document.getElementById('productsList');
    
    if (!productsList) return; // Not on home page
    
    productsList.innerHTML = '';
    
    products.forEach(product => {
        const firstImagePath = `${product.folder}/images/1.jpg`;
        const specs = getBasicSpecs(product);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => goToProduct(product.id);
        
        // Build specs HTML
        let specsHTML = '';
        Object.entries(specs).forEach(([key, value]) => {
            specsHTML += `<div class="card-spec"><span class="spec-key">${key}:</span> <span class="spec-val">${value}</span></div>`;
        });
        
        productCard.innerHTML = `
            <img src="${firstImagePath}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EBild nicht verfügbar%3C/text%3E%3C/svg%3E'">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="card-specs">
                    ${specsHTML}
                </div>
            </div>
        `;
        
        productsList.appendChild(productCard);
    });
}

// Zur Produktdetailseite navigieren
function goToProduct(productId) {
    window.location.href = `product-detail.html?product=${productId}`;
}

// Produkt nach ID abrufen
function getProductById(productId) {
    return products.find(p => p.id === productId);
}

// Basisdaten je nach Produkt ermitteln
function getBasicSpecs(product) {
    const specs = {};
    
    // Modellabhängige Spezifikationen hinzufügen
    if (product.id === 'i600') {
        specs['Arbeitsfläche'] = 'Bis 600 m²';
        specs['Akku'] = '5,0 Ah';
        specs['Hinderniserkennung'] = 'Vision AI';
        specs['Neigung'] = '35 %';
    } else if (product.id === 'n1000') {
        specs['Arbeitsfläche'] = 'Bis 3.000 m²';
        specs['Akku'] = '21,6V / 6,4 Ah';
        specs['Hinderniserkennung'] = 'Vision (Kamera)';
        specs['Neigung'] = '±45 % (24°)';
    }
    
    return specs;
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
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

// Initialize site inquiry form if present
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

function setupHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;

    function onScroll() {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100 && currentScrollY > lastScrollY) {
            header.classList.add('hidden');
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(onScroll);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('contact')) {
        setupSiteInquiryForm();
    }
    setupScrollSpy();
    setupHeaderScroll();
});
