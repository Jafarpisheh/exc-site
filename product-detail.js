// Galerie-Zustand
let galleryState = {
    currentIndex: 0,
    mediaItems: [],
    product: null
};

// Erste Debug-Meldung - Script geladen
const debugLoaded = document.createElement('div');
debugLoaded.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;padding:10px;z-index:99999;font-size:14px;font-weight:bold;';
debugLoaded.textContent = 'PRODUCT-DETAIL.JS GELADEN!';
document.body.appendChild(debugLoaded);

// Produkt-ID aus der URL lesen
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
}

// Produktdetails laden
async function loadProductDetails() {
    const productId = getProductIdFromUrl();
    const product = getProductById(productId);
    
    // Add debug box showing product loading
    let debugBox = document.createElement('div');
    debugBox.style.cssText = 'position:fixed;top:0;right:0;background:orange;color:black;padding:15px;z-index:10000;border:3px solid blue;font-size:12px;max-width:400px;';
    debugBox.innerHTML = `<strong>PRODUKT-LADE-DEBUG:</strong><br>Produkt-ID: ${productId}<br>Produkt gefunden: ${product ? 'JA' : 'NEIN'}<br>`;
    if (product) {
        debugBox.innerHTML += `Produktname: ${product.name}<br>Hat Video: ${product.hasVideo}<br>Anzahl Bilder: ${product.imageCount}<br>`;
    }
    document.body.appendChild(debugBox);
    
    if (!product) {
        document.body.innerHTML = '<div class="container" style="text-align: center; padding: 50px;"><h2>Produkt nicht gefunden</h2><a href="index.html">Zurück zur Startseite</a></div>';
        return;
    }
    
    galleryState.product = product;
    
    // Set product name
    document.getElementById('productName').textContent = product.name;
    
    // Bilder und Videos laden
    loadProductMedia(product);
    
    // Spezifikationen laden
    loadProductSpecs(product);
    
    // Anfrageformular einrichten
    setupInquiryForm(product);
}

// Produktbilder und Videos laden
function loadProductMedia(product) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    
    console.log('loadProductMedia called with product:', product);
    
    // Medienarray erstellen (Bilder und Videos)
    galleryState.mediaItems = [];
    
    // Bilder hinzufügen
    for (let i = 1; i <= product.imageCount; i++) {
        galleryState.mediaItems.push({
            type: 'image',
            path: `${product.folder}/images/${i}.jpg`,
            index: i
        });
    }
    
    console.log('After adding images, mediaItems length:', galleryState.mediaItems.length);
    
    // Video hinzufügen, falls vorhanden
    if (product.hasVideo) {
        console.log('Product has video, adding to mediaItems');
        galleryState.mediaItems.push({
            type: 'video',
            path: `${product.folder}/videos/1.mp4`
        });
    } else {
        console.log('Product does NOT have video');
    }
    
    console.log('Final mediaItems:', galleryState.mediaItems);
    
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

// Miniaturansichten erstellen
function createThumbnails(container) {
    container.innerHTML = '';
    
    // Create debug info and inject into page
    let debugInfo = `<div style="position:fixed;top:0;right:0;background:yellow;color:black;padding:15px;z-index:10000;border:2px solid red;font-size:12px;max-width:400px;"><strong>THUMBNAIL-DEBUG:</strong><br>Gesamtanzahl Einträge: ${galleryState.mediaItems.length}<br>`;
    
    galleryState.mediaItems.forEach((item, index) => {
        debugInfo += `${index}: ${item.type} - ${item.path}<br>`;
    });
    
    debugInfo += `</div>`;
    
    // Add to page
    if (!document.getElementById('debugBox')) {
        const debugBox = document.createElement('div');
        debugBox.id = 'debugBox';
        debugBox.innerHTML = debugInfo;
        document.body.appendChild(debugBox);
    }
    
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
        
        // Add click handler with alert for debugging
        thumbnail.addEventListener('click', (e) => {
            const itemLabel = item.type === 'image' ? 'Bild' : 'Video';
            alert(`Sie haben auf ${itemLabel} an Position ${index} geklickt`);
            console.log('Thumbnail click event fired');
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
    
    console.log('updateMainImage called. Index:', galleryState.currentIndex, 'Total items:', galleryState.mediaItems.length);
    console.log('Item:', item);
    
    if (!item) {
        console.log('Item is null or undefined');
        return;
    }
    
    console.log('Item type check - item.type =', item.type, '(type of:', typeof item.type, ')');
    
    if (item.type === 'image') {
        console.log('Matched IMAGE branch');
        mainImage.src = item.path;
        mainImage.style.display = 'block';
        // Video-Player ausblenden, falls sichtbar
        const videoPlayer = document.getElementById('videoPlayer');
        if (videoPlayer) videoPlayer.style.display = 'none';
    } else if (item.type === 'video') {
        console.log('Matched VIDEO branch');
        // Hide the image
        mainImage.style.display = 'none';
        
        // Video-Player erstellen oder anzeigen
        let videoPlayer = document.getElementById('videoPlayer');
        if (!videoPlayer) {
            console.log('Creating new video player');
            const mainImageContainer = document.getElementById('mainImageContainer');
            videoPlayer = document.createElement('video');
            videoPlayer.id = 'videoPlayer';
            videoPlayer.controls = true;
            videoPlayer.preload = 'metadata';
            videoPlayer.style.width = '100%';
            videoPlayer.style.height = 'auto';
            videoPlayer.style.display = 'block';
            // Insert video before the first button so buttons stay on top
            const firstButton = mainImageContainer.querySelector('.gallery-nav-btn');
            mainImageContainer.insertBefore(videoPlayer, firstButton);
            console.log('Video player created and inserted');
        }
        videoPlayer.src = item.path;
        videoPlayer.style.display = 'block';
        console.log('Video source set to:', item.path);
    } else {
        console.log('No matching branch - item.type is:', item.type);
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

// Galerie navigieren
function navigateGallery(direction) {
    const newIndex = galleryState.currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < galleryState.mediaItems.length) {
        galleryState.currentIndex = newIndex;
        updateMainImage();
        updateActiveThumb();
        updateImageCounter();
    }
}

// Galerie-Navigationsbuttons einrichten
function setupGalleryNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const expandBtn = document.getElementById('expandBtn');
    
    prevBtn.addEventListener('click', () => navigateGallery(-1));
    nextBtn.addEventListener('click', () => navigateGallery(1));
    expandBtn.addEventListener('click', openImageModal);
    
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
    
    // PDF-Download ankündigen
    specsHTML += `
        <div class="pdf-notice">
            <strong>📄 PDF nur zum Download</strong><br>
            <a href="${product.folder}/specs.pdf" target="_blank" download>Deutschsprachige Spezifikationen als PDF herunterladen</a>
        </div>
    `;
    
    specsContainer.innerHTML = specsHTML;
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
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Formular-Daten sammeln
        const formData = {
            productId: product.id,
            productName: product.name,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        // In localStorage speichern (Backend-Simulation)
        let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push(formData);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
        // Erfolgsmeldung anzeigen
        showSuccessMessage();
        
        // Formular zurücksetzen
        form.reset();
        
        // Zur Demo in die Konsole schreiben
        console.log('Inquiry submitted:', formData);
        
        // In einer echten Anwendung würden diese Daten an einen Server gesendet werden
        // Beispiel:
        // fetch('/api/inquiries', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
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
});

// Versuche sofort, falls DOM bereits geladen ist
if (document.readyState === 'loading') {
    // DOM is still loading
} else {
    // DOM is already loaded
    loadProductDetails();
}
