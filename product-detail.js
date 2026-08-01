// Galerie-Zustand
let galleryState = {
    currentIndex: 0,
    mediaItems: [],
    product: null,
    activeVariantId: null
};

// Produkt-ID aus der URL lesen
function getProductIdFromUrl() {
    try {
        const rawSearch = window.location.search || '';
        const decodedSearch = decodeURIComponent(rawSearch);
        const params = new URLSearchParams(decodedSearch);
        return params.get('product');
    } catch (error) {
        console.warn('Could not parse product URL:', error);
        return null;
    }
}

// Produktdetails laden
async function loadProductDetails() {
    const productId = getProductIdFromUrl();
    const product = getProductById(productId);
    
    if (!product) {
        document.body.innerHTML = '<div class="container" style="text-align: center; padding: 50px;"><h2>Produkt nicht gefunden</h2><a href="index.html">Zurück zur Startseite</a></div>';
        return;
    }
    
    galleryState.product = product;
    galleryState.activeVariantId = getInitialVariantId(product);
    
    // Set product name, price and supporting copy
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productBreadcrumb').textContent = product.name;
    document.getElementById('productPrice').textContent = `${formatPrice(product.price)}`;
    const productDescription = document.getElementById('productDescription');
    if (productDescription) {
        productDescription.textContent = product.description || 'Entdecken Sie dieses hochwertige E-Bike mit modernem Design, starker Reichweite und komfortabler Ausstattung.';
    }

    renderLongDescription(product);

    renderProductActions(product);
    renderVariantButtons(product);
    
    // Bilder und Videos laden
    await loadProductMedia(product, galleryState.activeVariantId);
    
    // Spezifikationen laden
    loadProductSpecs(product);
    
    // Anfrageformular einrichten
    setupInquiryForm(product);
}

function getInitialVariantId(product) {
    return product.variants?.length ? product.variants[0].id : null;
}

function renderLongDescription(product) {
    const container = document.getElementById('productLongDescription');
    if (!container) return;

    if (!product.longDescription) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    container.innerHTML = '';
    product.longDescription.forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        container.appendChild(p);
    });
}

function renderProductActions(product) {
    const container = document.getElementById('productActions');
    if (!container) return;

    const activeVariant = product.variants?.find(variant => variant.id === galleryState.activeVariantId);
    container.style.display = 'flex';
    container.innerHTML = createCheckoutButton(product, 'checkout-btn--detail', activeVariant);
    if (!container.innerHTML) {
        container.style.display = 'none';
    }
}

function renderVariantButtons(product) {
    const container = document.getElementById('variantButtonsContainer');
    if (!container) return;

    if (!product.variants?.length) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';
    container.innerHTML = '';

    product.variants.forEach((variant) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'variant-btn';
        button.textContent = variant.name;

        if (galleryState.activeVariantId === variant.id) {
            button.classList.add('active');
        }

        button.addEventListener('click', async () => {
            galleryState.activeVariantId = variant.id;
            renderVariantButtons(product);
            renderProductActions(product);
            await loadProductMedia(product, variant.id);
        });

        container.appendChild(button);
    });
}

// Produktbilder und Videos laden
async function loadProductMedia(product, variantId = galleryState.activeVariantId) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    
    // Medienarray erstellen (Bilder und Videos)
    galleryState.mediaItems = [];
    
    const selectedVariant = product.variants?.find(variant => variant.id === variantId) || null;
    const imagePaths = selectedVariant
        ? (selectedVariant.imageFiles?.length
            ? selectedVariant.imageFiles.map(filename => `${selectedVariant.folder}/${filename}`)
            : await getProductImagePaths(product, selectedVariant.folder))
        : product.imageFiles
            ? product.imageFiles.map(filename => `${product.folder}/images/${filename}`)
            : await getProductImagePaths(product);

    if (imagePaths.length > 0) {
        imagePaths.forEach((imagePath, index) => {
            galleryState.mediaItems.push({
                type: 'image',
                path: imagePath,
                index: index + 1
            });
        });
    }
    
    // Video hinzufügen, falls vorhanden
    if (product.hasVideo) {
        galleryState.mediaItems.push({
            type: 'video',
            path: `${product.folder}/videos/1.mp4`
        });
    }
    
    // Setze erstes Bild als Hauptbild
    if (galleryState.mediaItems.length > 0) {
        galleryState.currentIndex = 0;
        updateMainImage();
    }
    
    // Miniaturansichten erstellen
    createThumbnails(thumbnailContainer);
    
    // Setup gallery navigation
    setupGalleryNavigation();
}

async function getProductImagePaths(product, folderPath = null) {
    const imagesFolderUrl = folderPath ? `${folderPath}/` : `${product.folder}/images/`;
    const acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

    try {
        const response = await fetch(imagesFolderUrl, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Unable to load image folder listing: ${response.status}`);
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const anchors = Array.from(doc.querySelectorAll('a[href]'));

        const imageHrefs = anchors
            .map(a => a.getAttribute('href'))
            .filter(href => href && acceptedExtensions.some(ext => href.toLowerCase().endsWith(ext)))
            .map(href => new URL(href, window.location.origin + '/' + imagesFolderUrl).href);

        const uniquePaths = [...new Set(imageHrefs)];
        uniquePaths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
        return uniquePaths;
    } catch (error) {
        console.warn('Could not read product images from folder listing:', error);
        return [];
    }
}

// Miniaturansichten erstellen
function createThumbnails(container) {
    container.innerHTML = '';

    galleryState.mediaItems.forEach((item, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.dataset.index = index;
        
        if (item.type === 'image') {
            thumbnail.innerHTML = `<img src="${item.path}" alt="Image ${item.index}">`;
        } else if (item.type === 'video') {
            thumbnail.innerHTML = `<div class="video-thumbnail">🎬 Video</div>`;
            thumbnail.style.border = '3px solid red'; // Make video thumbnail clearly visible
        }

        thumbnail.addEventListener('click', () => {
            galleryState.currentIndex = index;
            updateMainImage();
            updateActiveThumb();
        });

        container.appendChild(thumbnail);
    });
    
    // Auch Modal-Minaturansichten erstellen
    const modalThumbnails = document.getElementById('modalThumbnails');
    modalThumbnails.innerHTML = '';
    galleryState.mediaItems.forEach((item, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'modal-thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.dataset.index = index;
        
        if (item.type === 'image') {
            thumbnail.innerHTML = `<img src="${item.path}" alt="Image ${item.index}">`;
        } else if (item.type === 'video') {
            thumbnail.innerHTML = `<div class="video-thumbnail">🎬 Video</div>`;
        }
        
        thumbnail.addEventListener('click', () => {
            galleryState.currentIndex = index;
            updateMainImage();
            updateModalImage();
            updateActiveThumb();
            updateImageCounter();
        });
        
        modalThumbnails.appendChild(thumbnail);
    });
}

// Hauptbild aktualisieren
function updateMainImage() {
    const mainImage = document.getElementById('mainImage');
    const item = galleryState.mediaItems[galleryState.currentIndex];
    
    if (!item) {
        return;
    }
    
    if (item.type === 'image') {
        mainImage.src = item.path;
        mainImage.style.display = 'block';
        const videoPlayer = document.getElementById('videoPlayer');
        if (videoPlayer) videoPlayer.style.display = 'none';
    } else if (item.type === 'video') {
        mainImage.style.display = 'none';
        
        let videoPlayer = document.getElementById('videoPlayer');
        if (!videoPlayer) {
            const mainImageContainer = document.getElementById('mainImageContainer');
            videoPlayer = document.createElement('video');
            videoPlayer.id = 'videoPlayer';
            videoPlayer.controls = true;
            videoPlayer.preload = 'metadata';
            videoPlayer.style.width = '100%';
            videoPlayer.style.height = 'auto';
            videoPlayer.style.display = 'block';
            const firstButton = mainImageContainer.querySelector('.gallery-nav-btn');
            mainImageContainer.insertBefore(videoPlayer, firstButton);
        }
        videoPlayer.src = item.path;
        videoPlayer.style.display = 'block';
    }
}

// Aktive Miniaturansicht aktualisieren
function updateActiveThumb() {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === galleryState.currentIndex);
    });
    
    // Also update modal thumbnails if they exist
    document.querySelectorAll('.modal-thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === galleryState.currentIndex);
    });
}

// Bildzähler im Modal aktualisieren
function updateImageCounter() {
    const counter = document.getElementById('imageCounter');
    if (counter) {
        const total = galleryState.mediaItems.length;
        counter.textContent = `${galleryState.currentIndex + 1} / ${total}`;
    }
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const item = galleryState.mediaItems[galleryState.currentIndex];
    if (!modalImage || !item) return;

    if (item.type === 'image') {
        modalImage.src = item.path;
        modalImage.alt = `Produktbild ${item.index}`;
        modalImage.style.display = 'block';
    } else {
        modalImage.src = '';
        modalImage.alt = '';
        modalImage.style.display = 'none';
    }
}

// Galerie navigieren
function navigateGallery(direction) {
    const newIndex = galleryState.currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < galleryState.mediaItems.length) {
        galleryState.currentIndex = newIndex;
        updateMainImage();
        updateModalImage();
        updateActiveThumb();
        updateImageCounter();
    }
}

// Galerie-Navigationsbuttons einrichten
function setupGalleryNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const mainImageContainer = document.getElementById('mainImageContainer');
    const mainImage = document.getElementById('mainImage');
    
    prevBtn.addEventListener('click', () => navigateGallery(-1));
    nextBtn.addEventListener('click', () => navigateGallery(1));
    
    if (mainImageContainer) {
        mainImageContainer.style.cursor = 'zoom-in';
        mainImageContainer.setAttribute('role', 'button');
        mainImageContainer.setAttribute('tabindex', '0');

        const openGalleryFromMedia = (event) => {
            const target = event.target;
            if (target.closest('.gallery-nav-btn')) {
                return;
            }

            const item = galleryState.mediaItems[galleryState.currentIndex];
            if (item?.type === 'image') {
                openImageModal();
            }
        };

        mainImageContainer.addEventListener('click', openGalleryFromMedia);
        mainImageContainer.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openGalleryFromMedia(event);
            }
        });

        if (mainImage) {
            mainImage.addEventListener('click', openGalleryFromMedia);
        }
    }
    
    // Setup modal navigation
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');
    const modalCloseBtn = document.getElementById('modalClose');
    
    modalPrevBtn.addEventListener('click', () => navigateGallery(-1));
    modalNextBtn.addEventListener('click', () => navigateGallery(1));
    modalCloseBtn.addEventListener('click', closeImageModal);
    
    // Modal bei Klick auf Hintergrund schließen
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Tastaturnavigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('imageModal').style.display === 'block') {
            if (e.key === 'ArrowLeft') navigateGallery(-1);
            if (e.key === 'ArrowRight') navigateGallery(1);
            if (e.key === 'Escape') closeImageModal();
        }
    });
}

// Bild-Modal öffnen
function openImageModal() {
    const modal = document.getElementById('imageModal');
    updateModalImage();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateImageCounter();
}

// Bild-Modal schließen
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Produktspezifikationen laden
function loadProductSpecs(product) {
    const specsContainer = document.getElementById('specsContainer');
    
    // Basisdaten je nach Produkt erzeugen
    const basicSpecs = getBasicSpecs(product);
    
    let specsHTML = '';
    
    // Übliche Spezifikationen anzeigen
    Object.entries(basicSpecs).forEach(([key, value]) => {
        specsHTML += `
            <div class="spec-item">
                <span class="spec-label">${key}</span>
                <span class="spec-value">${value}</span>
            </div>
        `;
    });
    
    specsContainer.innerHTML = specsHTML;
}

// Basisdaten je nach Produkt ermitteln
function getBasicSpecs(product) {
    const specs = {
        'Preis': `${formatPrice(product.price)}`,
        'Modell': product.name,
        'Typ': 'E-Bike',
        'Status': 'Verfügbar',
        'Verfügbarkeit': 'Auf Lager'
    };
    
    // Modellabhängige Spezifikationen hinzufügen
    if (product.id === 'C29k') {
        specs['Typ'] = 'E-Mountainbike';
        specs['Reichweite'] = 'Bis 90 km';
        specs['Motor'] = '500 W (65 N·m)';
        specs['Akku'] = '48V 18Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '8–9 Stunden';
        specs['Rahmen'] = 'Aluminiumrahmen (nicht faltbar)';
        specs['Schaltung'] = '7-Gang-Schaltung';
        specs['Bremsen'] = 'Hydraulische Scheibenbremsen';
        specs['Federung'] = 'Vorderradfederung';
        specs['Reifen'] = '29 x 2,1 Zoll';
        specs['Zuladung'] = '150 kg';
        specs['Gewicht'] = 'Netto 29,25 kg';
        specs['Display'] = 'Integriertes LCD-Display';
        specs['Konnektivität'] = 'Bluetooth-fähig';
    } else if (product.id === 'OT01') {
        specs['Typ'] = 'E-Urbanbike';
        specs['Reichweite'] = 'Bis 100 km';
        specs['Motor'] = '650 W (62 N·m)';
        specs['Akku'] = '48V 27Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '9–10 Stunden';
        specs['Rahmen'] = 'Aluminiumrahmen';
        specs['Schaltung'] = '8-Gang-Schaltung';
        specs['Bremsen'] = 'Hydraulische Scheibenbremsen';
        specs['Federung'] = 'Komfortable Gabel-Federung';
        specs['Reifen'] = '20 x 2,6 Zoll';
        specs['Zuladung'] = '180 kg';
        specs['Gewicht'] = 'Netto 41,7 kg';
        specs['Display'] = 'TFT-Farbdisplay';
    } else if (product.id === 'OT02') {
        specs['Typ'] = 'E-Urbanbike';
        specs['Reichweite'] = 'Bis 25 km';
        specs['Motor'] = '250 W (30 N·m)';
        specs['Akku'] = '36V 5,2Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '2,5–3 Stunden';
        specs['Rahmen'] = 'Chromoly-Stahl (faltbar)';
        specs['Schaltung'] = '8-Gang-Schaltung';
        specs['Bremsen'] = 'V-Bremsen';
        specs['Federung'] = 'Keine';
        specs['Reifen'] = '16 x 1,35 Zoll';
        specs['Zuladung'] = '80 kg';
        specs['Gewicht'] = 'Netto 14,5 kg';
        specs['Display'] = 'TFT-Farbdisplay';
    } else if (product.id === 'OT12') {
        specs['Typ'] = 'E-Urbanbike';
        specs['Reichweite'] = 'Bis 100 km';
        specs['Motor'] = '250 W (44 N·m)';
        specs['Akku'] = '36V 13Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '6–8 Stunden';
        specs['Rahmen'] = 'Eisenrahmen';
        specs['Schaltung'] = '8-Gang-Schaltung';
        specs['Bremsen'] = 'Mechanische Scheibenbremsen';
        specs['Federung'] = 'Komfortable Gabel-Federung';
        specs['Reifen'] = '27,5 x 2,25 Zoll';
        specs['Zuladung'] = '100 kg';
        specs['Gewicht'] = 'Netto 27,8 kg';
        specs['Display'] = 'TFT-Farbdisplay';
    } else if (product.id === 'OT16') {
        specs['Typ'] = 'E-Urbanbike';
        specs['Reichweite'] = 'Bis 120 km';
        specs['Motor'] = '250 W (40 N·m)';
        specs['Akku'] = '48V 17Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '8–10 Stunden';
        specs['Rahmen'] = 'Eisenrahmen (faltbar)';
        specs['Schaltung'] = '8-Gang-Schaltung';
        specs['Bremsen'] = 'Mechanische Scheibenbremsen';
        specs['Federung'] = 'Komfortable Gabel-Federung';
        specs['Reifen'] = '20 x 3,0 Zoll';
        specs['Zuladung'] = '150 kg';
        specs['Gewicht'] = 'Netto 30,1 kg';
        specs['Display'] = 'TFT-Farbdisplay';
    } else if (product.id === 'W77') {
        specs['Typ'] = 'E-Moto-Style';
        specs['Reichweite'] = 'Bis 90 km';
        specs['Motor'] = '250 W (500 W Peak, 65 N·m)';
        specs['Akku'] = '48V 18Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '8–9 Stunden';
        specs['Rahmen'] = 'Eisenrahmen (nicht faltbar)';
        specs['Schaltung'] = 'Shimano 7-Gang-Schaltung';
        specs['Bremsen'] = 'Hydraulische Scheibenbremsen';
        specs['Federung'] = 'Doppelfederung (Vorder- und Hinterrad)';
        specs['Reifen'] = '20 x 4,0 Zoll Fat-Tire';
        specs['Zuladung'] = '90 kg';
        specs['Gewicht'] = 'Netto 43,2 kg';
        specs['Display'] = '3,5 Zoll LCD-Display';
        specs['Konnektivität'] = 'Bluetooth (App)';
    } else if (product.id === 'OT08Pro') {
        specs['Typ'] = 'Full-Suspension E-Bike';
        specs['Reichweite'] = 'Bis 190 km (Power-Assist)';
        specs['Motor'] = '250 W (500 W Peak, 65 N·m)';
        specs['Akku'] = '2 x 48V 18Ah (Dual-Batterie)';
        specs['Max. Geschwindigkeit'] = '25 km/h';
        specs['Ladezeit'] = '8–10 Stunden';
        specs['Rahmen'] = 'Aluminiumrahmen (faltbar)';
        specs['Schaltung'] = 'Shimano 7-Gang-Schaltung';
        specs['Bremsen'] = 'Hydraulische Scheibenbremsen';
        specs['Federung'] = 'Vollfederung (Vorder- und Hinterrad)';
        specs['Reifen'] = '20 x 4,0 Zoll Fat-Tire';
        specs['Zuladung'] = '120 kg';
        specs['Gewicht'] = 'Netto 39,2 kg';
        specs['Display'] = 'LCD-Farbdisplay';
        specs['Wasserdicht'] = 'IPX4';
    }

    if (product.outOfStock) {
        specs['Status'] = 'Ausverkauft';
        specs['Verfügbarkeit'] = 'Nicht auf Lager';
    }
    
    return specs;
}

// Anfrageformular einrichten
function setupInquiryForm(product) {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    const productIdInput = form.querySelector('[name="productId"]');
    const productNameInput = form.querySelector('[name="productName"]');
    const sourcePageInput = form.querySelector('[name="sourcePage"]');

    if (productIdInput) productIdInput.value = product.id;
    if (productNameInput) productNameInput.value = product.name;
    if (sourcePageInput) sourcePageInput.value = 'product-detail';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formDataObject = {
            productId: product.id,
            productName: product.name,
            sourcePage: 'product-detail',
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
            showSuccessMessage();
            form.reset();
            console.log('Product inquiry submitted:', formDataObject);
        } catch (error) {
            console.error('E-Mail-Versand fehlgeschlagen:', error);
            alert('Ihre Anfrage konnte nicht per E-Mail gesendet werden. Bitte versuchen Sie es später erneut.');
        }
    });
}

// Product page nav button auf der Produktseite deaktivieren
function disableProductNavButton() {
    const productNavButton = document.querySelector('nav a[href="index.html#products"]');
    if (!productNavButton) return;

    productNavButton.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

// Erfolgsmeldung anzeigen
function showSuccessMessage() {
    let successMessage = document.querySelector('.success-message');
    
    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '✓ Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.';
        document.querySelector('.inquiry-section').insertBefore(successMessage, document.querySelector('.inquiry-form'));
    }
    
    successMessage.classList.add('show');
    
    // Nach 5 Sekunden ausblenden
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

function activateDetailTab(targetId) {
    const tabs = Array.from(document.querySelectorAll('.detail-tab'));
    const panels = Array.from(document.querySelectorAll('.detail-panel'));
    const targetPanel = document.getElementById(targetId);

    if (!targetPanel) return;

    tabs.forEach((item) => {
        const isActive = item.getAttribute('data-target') === targetId;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    panels.forEach((panel) => {
        const isActive = panel.id === targetId;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
    });
}

function setupDetailTabs() {
    const tabs = Array.from(document.querySelectorAll('.detail-tab'));

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            activateDetailTab(targetId);
        });
    });
}


function initializeDetailPage() {
    loadProductDetails();
    disableProductNavButton();
    setupDetailTabs();
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', initializeDetailPage);

// Versuche sofort, falls DOM bereits geladen ist
if (document.readyState !== 'loading') {
    initializeDetailPage();
}
