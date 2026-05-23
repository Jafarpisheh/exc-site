// Galerie-Zustand
let galleryState = {
    currentIndex: 0,
    mediaItems: [],
    product: null
};

// Produkt-ID aus der URL lesen
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
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
    
    // Set product name
    document.getElementById('productName').textContent = product.name;
    
    // Bilder und Videos laden
    await loadProductMedia(product);
    
    // Spezifikationen laden
    loadProductSpecs(product);
    
    // Anfrageformular einrichten
    setupInquiryForm(product);
}

// Produktbilder und Videos laden
async function loadProductMedia(product) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    
    // Medienarray erstellen (Bilder und Videos)
    galleryState.mediaItems = [];
    
    // Bilder ermitteln und hinzufügen
    const imagePaths = await getProductImagePaths(product);
    if (imagePaths.length > 0) {
        imagePaths.forEach((imagePath, index) => {
            galleryState.mediaItems.push({
                type: 'image',
                path: imagePath,
                index: index + 1
            });
        });
    } else if (product.imageCount) {
        // Fallback, falls der Server kein Verzeichnislisting liefert
        for (let i = 1; i <= product.imageCount; i++) {
            galleryState.mediaItems.push({
                type: 'image',
                path: `${product.folder}/images/${i}.jpg`,
                index: i
            });
        }
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

async function getProductImagePaths(product) {
    const imagesFolderUrl = `${product.folder}/images/`;
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
    
    prevBtn.addEventListener('click', () => navigateGallery(-1));
    nextBtn.addEventListener('click', () => navigateGallery(1));
    
    if (mainImageContainer) {
        mainImageContainer.style.cursor = 'zoom-in';
        mainImageContainer.addEventListener('click', (event) => {
            const item = galleryState.mediaItems[galleryState.currentIndex];
            if (item?.type === 'image') {
                const target = event.target;
                if (target.closest('.gallery-nav-btn')) {
                    return;
                }
                openImageModal();
            }
        });
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

// Produktspezifikationen laden (Basisdaten und PDF-Link anzeigen)
function loadProductSpecs(product) {
    const specsContainer = document.getElementById('specsContainer');
    
    // Basisdaten je nach Produkt erzeugen
    const basicSpecs = getBasicSpecs(product);
    
    let specsHTML = '';
    
    specsHTML += `<h3>Technische Daten</h3>`;
    
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
    renderPdfViewer(product);
}

function renderPdfViewer(product) {
    const viewer = document.getElementById('pdfViewerContainer');
    const pdfUrl = `${product.folder}/specs.pdf`;
    
    if (!viewer) return;

    viewer.innerHTML = `
        <div class="pdf-viewer-box">
            <h3>Spezifikationen</h3>
            <div class="pdf-viewer" id="pdfImageViewer">
                <div class="pdf-loading">Lade Spezifikationen...</div>
            </div>
        </div>
    `;

    const container = document.getElementById('pdfImageViewer');
    if (!window.pdfjsLib) {
        loadPdfJs(pdfUrl, () => renderPdfPages(pdfUrl, container, product.name));
    } else {
        renderPdfPages(pdfUrl, container, product.name);
    }
}

function loadPdfJs(pdfUrl, callback) {
    if (window.pdfjsLib) {
        callback();
        return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
    script.onload = () => {
        if (window.pdfjsLib) {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
        }
        callback();
    };
    script.onerror = () => {
        const viewer = document.getElementById('pdfImageViewer');
        if (viewer) {
            viewer.innerHTML = `
                <div class="pdf-error">
                    Die Spezifikation konnte nicht geladen werden. Öffnen Sie sie in einem neuen Tab.
                </div>
            `;
        }
    };
    document.head.appendChild(script);
}

async function renderPdfPages(pdfUrl, container, productName) {
    if (!container) return;

    try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        container.innerHTML = '';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const scale = 1.4;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.setAttribute('aria-label', `${productName} Spezifikationsseite`);

            const pageContainer = document.createElement('div');
            pageContainer.className = 'pdf-page-image';
            pageContainer.appendChild(canvas);
            container.appendChild(pageContainer);

            await page.render({ canvasContext: context, viewport }).promise;
        }
    } catch (error) {
        console.error('Spezifikationendarstellung fehlgeschlagen:', error);
        container.innerHTML = `
            <div class="pdf-error">
                Die Spezifikation konnte nicht geladen werden. Öffnen Sie sie in einem neuen Tab.
            </div>
        `;
    }
}

// Basisdaten je nach Produkt ermitteln
function getBasicSpecs(product) {
    const specs = {
        'Modell': product.name,
        'Typ': 'Hydraulikbagger',
        'Status': 'Verfügbar',
        'Verfügbarkeit': 'Auf Lager'
    };
    
    // Modellabhängige Spezifikationen hinzufügen
    if (product.id === 'xc-12') {
        specs['Betriebsgewicht'] = '12 Tonnen';
        specs['Schaufelkapazität'] = '0.58 m³';
        specs['Maximale Grabtiefe'] = '4.2 m';
        specs['Leistung'] = '85 kW / 115 PS';
        specs['Am besten für'] = 'Kleine bis mittlere Projekte';
    } else if (product.id === 'xc-18') {
        specs['Betriebsgewicht'] = '18 Tonnen';
        specs['Schaufelkapazität'] = '0.85 m³';
        specs['Maximale Grabtiefe'] = '5.1 m';
        specs['Leistung'] = '125 kW / 168 PS';
        specs['Am besten für'] = 'Großflächige Einsätze';
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

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
    disableProductNavButton();
});

// Versuche sofort, falls DOM bereits geladen ist
if (document.readyState === 'loading') {
    // DOM is still loading
} else {
    // DOM is already loaded
    loadProductDetails();
    disableProductNavButton();
}
