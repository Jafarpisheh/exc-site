// Produktkatalog
const products = [
    {
        id: 'C29k',
        name: 'Duotts C29 - K 500W E-Mountainbike – bis 90 km',
        description: 'Robustes E-Mountainbike mit starker Reichweite und Gelände-Performance.',
        longDescription: [
            'Das Duotts C29 ist ein kraftvolles E-Mountainbike, das für anspruchsvolles Gelände und lange Touren entwickelt wurde. Mit seiner leistungsstarken Batterie erreichen Sie Reichweiten von bis zu 90 km und sind damit auch für ausgedehnte Ausflüge bestens gerüstet.',
            'Der starke 500-W-Motor meistert Steigungen mühelos und bringt Sie sicher und schnell ans Ziel. Das robuste Design, die hochwertige Federung und die zuverlässigen Bremsen sorgen für ein stabiles und komfortables Fahrgefühl – ob im Wald, auf Feldwegen oder in der Stadt.'
        ],
        price: 1049,
        stripeCheckoutUrl: 'https://buy.stripe.com/fZudR18qD0YVfac8mu3oA03',
        folder: 'products/C29k',
        imageFiles: [
            '1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG','15.JPG','16.JPG','17.JPG','18.JPG','19.JPG','20.JPG','21.JPG','22.JPG','23.JPG','24.jpg','25.jpg','26.jpg','27.jpg'
        ],
        hasVideo: false
    },
    {
        id: 'OT01',
        name: 'ONESPORT OT01 Elektrofahrrad Faltrad',
        description: 'Vielseitiges E-Bike für tägliche Pendlerfahrten und Entdeckungstouren.',
        longDescription: [
            'Das ONESPORT OT01 ist das ideale E-Bike für den Alltag. Als faltbares Elektrofahrrad passt es problemlos in den Kofferraum, unter den Schreibtisch oder in öffentliche Verkehrsmittel – perfekt für Pendler und Stadtentdecker.',
            'Mit einer Reichweite von bis zu 100 km und einem starken 650-W-Motor sind Sie flexibel unterwegs, ganz ohne Reichweitenangst. Die hochwertige Ausstattung und die kompakte Bauweise machen das OT01 zu einem zuverlässigen Begleiter für jeden Tag.'
        ],
        price: 999,
        stripeCheckoutUrl: 'https://buy.stripe.com/aFa6oz5er0YV2nqcCK3oA02',
        folder: 'products/OT01',
        imageFiles: [
            '1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG','15.JPG','16.JPG','17.JPG','18.JPG','19.JPG','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jfif','27.jfif','28.jfif','29.jfif','30.jfif','31.jfif','32.jfif','33.jfif','34.jpg','35.jpg','36.jpg'
        ],
        hasVideo: false
    },
    {
        id: 'OT02',
        name: 'ONESPORT E-Bike Cityrad OT02',
        description: 'Moderne E-Bike-Variante mit zwei attraktiven Farboptionen und hochwertiger Ausstattung.',
        longDescription: [
            'Das ONESPORT Cityrad OT02 kombiniert modernes Design mit durchdachter Technik. Erhältlich in zwei attraktiven Farbvarianten, passt es sich perfekt Ihrem persönlichen Stil an.',
            'Der kompakte 250-W-Motor und die 36-V-Batterie machen das OT02 zum idealen Begleiter für kurze Fahrten in der Stadt. Dank seines geringen Gewichts und der praktischen Faltkonstruktion ist es problemlos überallhin mitnehmbar.'
        ],
        price: 599,
        stripeCheckoutUrl: 'https://buy.stripe.com/8x2dR1eP1cHD4vyeKS3oA05',
        folder: 'products/OT02',
        variants: [
            {
                id: 'gruen',
                name: 'Grün',
                folder: 'products/OT02/images/Grün',
                coverImage: 'products/OT02/images/Grün/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/8x2dR1eP1cHD4vyeKS3oA05',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG','15.JPG','16.JPG','17.JPG','18.JPG','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg']
            },
            {
                id: 'rot',
                name: 'Röt',
                folder: 'products/OT02/images/Röt',
                coverImage: 'products/OT02/images/Röt/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/fZubITfT54b7geg0U23oA04',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg']
            }
        ],
        hasVideo: false
    },
    {
        id: 'OT12',
        name: 'Onesport OT12 Urban',
        description: 'Stylisches E-Bike mit zwei attraktiven Farbvarianten und hochwertiger Ausstattung.',
        longDescription: [
            'Das Onesport OT12 Urban ist ein stilvolles E-Bike für alle, die Wert auf Design und Komfort legen. In elegantem Schwarz oder strahlendem Weiß erhältlich, setzt es in der Stadt ein klares Statement.',
            'Mit seinem effizienten 250-W-Motor, der 36-V-Batterie und einer Reichweite von bis zu 100 km sind Sie für jeden Weg gerüstet. Das TFT-Farbdisplay hält Sie über alle wichtigen Fahrdaten auf dem Laufenden.'
        ],
        price: 729,
        stripeCheckoutUrl: 'https://buy.stripe.com/4gM6oz8qDePL3ruauC3oA06',
        folder: 'products/OT12',
        variants: [
            {
                id: 'schwarz',
                name: 'Schwarz',
                folder: 'products/OT12/images/Schwarz',
                coverImage: 'products/OT12/images/Schwarz/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/4gM6oz8qDePL3ruauC3oA06',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.JPG','12.JPG','13.JPG','14.jpg','15.JPG','16.jpg','17.jpg','18.JPG','19.jpg','20.jpg','21.jpg']
            },
            {
                id: 'weiss',
                name: 'Weiß',
                folder: 'products/OT12/images/Weiß',
                coverImage: 'products/OT12/images/Weiß/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/4gM6ozayL5fbbY0fOW3oA07',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.jpg','7.jpg','8.JPG','9.JPG','10.JPG','11.JPG','12.jpg','13.JPG','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg']
            }
        ],
        hasVideo: false
    },
    {
        id: 'OT16',
        name: 'Onesport OT16 Faltbar',
        description: 'Robustes E-Bike mit modernem Design und vielseitiger Alltagstauglichkeit.',
        longDescription: [
            'Das Onesport OT16 Faltbar vereint Robustheit, modernes Design und maximale Flexibilität. Durch die Faltkonstruktion lässt es sich platzsparend verstauen und überallhin mitnehmen – ob im Auto, im Zug oder im Büro.',
            'Der kräftige 250-W-Motor und die 48-V-Batterie ermöglichen Reichweiten von bis zu 120 km. Dank komfortabler Federung und hochwertiger Komponenten genießen Sie auf jeder Fahrt ein angenehmes und sicheres Fahrerlebnis.'
        ],
        price: 729,
        stripeCheckoutUrl: 'https://buy.stripe.com/cNi8wH7mz373gegdGO3oA08',
        folder: 'products/OT16',
        variants: [
            {
                id: 'schwarz',
                name: 'Schwarz',
                folder: 'products/OT16/images/Schwarz',
                coverImage: 'products/OT16/images/Schwarz/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/cNi8wH7mz373gegdGO3oA08',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.jpg','8.jpg','9.jpg','10.jpg','11.JPG','12.JPG','13.jpg']
            },
            {
                id: 'weiss',
                name: 'Weiß',
                folder: 'products/OT16/images/Weiß',
                coverImage: 'products/OT16/images/Weiß/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/7sYbIT4anazv4vybyG3oA09',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.jpg','9.jpg','10.JPG','11.JPG','12.JPG','13.JPG']
            }
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
    if (!checkoutUrl) {
        return '';
    }

    const classes = ['checkout-btn', extraClass].filter(Boolean).join(' ');
    return `<a href="${checkoutUrl}" class="${classes}" target="_blank" rel="noopener noreferrer">Jetzt kaufen</a>`;
}

function getProductPreviewImagePath(product) {
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

// Produkte auf der Startseite laden
function loadProducts() {
    const productsList = document.getElementById('productsList');

    if (!productsList) return; // Not on home page

    productsList.innerHTML = '';

    products.forEach(product => {
        const firstImagePath = getProductPreviewImagePath(product);
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
                <p class="product-card-price">${formatPrice(product.price)}</p>
                <div class="product-card-actions">
                    ${createCheckoutButton(product)}
                </div>
                <div class="card-specs">
                    ${specsHTML}
                </div>
            </div>
        `;

        productsList.appendChild(productCard);

        const buyButton = productCard.querySelector('.checkout-btn');
        if (buyButton) {
            buyButton.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        }
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
    const specs = {
        'Preis': `${formatPrice(product.price)}`
    };

    // Modellabhängige Spezifikationen hinzufügen
    if (product.id === 'C29k') {
        specs['Reichweite'] = 'Bis 90 km';
        specs['Motorleistung'] = '500 W';
        specs['Akku'] = '48V 18Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
    } else if (product.id === 'OT01') {
        specs['Reichweite'] = 'Bis 100 km';
        specs['Motorleistung'] = '650 W';
        specs['Akku'] = '48V 27Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
    } else if (product.id === 'OT02') {
        specs['Reichweite'] = 'Bis 25 km';
        specs['Motorleistung'] = '250 W';
        specs['Akku'] = '36V 5,2Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
    } else if (product.id === 'OT12') {
        specs['Reichweite'] = 'Bis 100 km';
        specs['Motorleistung'] = '250 W';
        specs['Akku'] = '36V 13Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
    } else if (product.id === 'OT16') {
        specs['Reichweite'] = 'Bis 120 km';
        specs['Motorleistung'] = '250 W';
        specs['Akku'] = '48V 17Ah';
        specs['Max. Geschwindigkeit'] = '25 km/h';
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
