// Produktkatalog
const products = [
    {
        id: 'xc-12',
        name: 'XC-12 Bagger',
        description: 'Kompakter und effizienter Bagger, ideal für kleine bis mittlere Bauprojekte.',
        folder: 'products/xc-12',
        imageCount: 5,
        hasVideo: true
    },
    {
        id: 'xc-18',
        name: 'XC-18 Bagger',
        description: 'Robuster Bagger für großflächige Bergbau- und Bauprojekte.',
        folder: 'products/xc-18',
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
    if (product.id === 'xc-12') {
        specs['Gewicht'] = '12 Tonnen';
        specs['Schaufel'] = '0.58 m³';
        specs['Tiefe'] = '4.2 m';
        specs['Leistung'] = '85 kW';
    } else if (product.id === 'xc-18') {
        specs['Gewicht'] = '18 Tonnen';
        specs['Schaufel'] = '0.85 m³';
        specs['Tiefe'] = '5.1 m';
        specs['Leistung'] = '125 kW';
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

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            productId: null,
            productName: null,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push(formData);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));

        siteShowSuccessMessage();

        form.reset();
        console.log('Site inquiry submitted:', formData);
    });
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
document.addEventListener('DOMContentLoaded', () => {
    setupSiteInquiryForm();
});
