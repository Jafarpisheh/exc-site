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
            'Der 250-W-Motor (maximale Leistung 500 W) unterstützt Sie bis zu 25 km/h. Der integrierte 36-V-10-Ah-Lithium-Ionen-Akku ermöglicht im Pedal-Assist-Modus eine Reichweite von bis zu 50 km und ist in ca. 5–6 Stunden vollständig geladen.',
            'Die vorderen und hinteren Scheibenbremsen, das Frontlicht, das Rücklicht sowie das LCD-Display mit Akkustandanzeige sorgen für Komfort und Sicherheit. Mit nur 17 kg Gewicht, 120 kg Zuladung und IP54-Schutz ist das D3S ein zuverlässiger Begleiter für jeden Tag.'
        ],
        price: 439,
        stripeCheckoutUrl: 'https://buy.stripe.com/dRm3cnayL6jf6DGfOW3oA0R',
        folder: 'products/D3S',
        coverImage: 'products/D3S/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'
        ],
        hasVideo: false,
        dimensionsImage: 'products/D3S/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/D3S/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/D3S/extended/2.webp',
                    title: 'Keine Reichweiten-Sorgen',
                    text: 'Der hochintegrierte 36-V-10-Ah-Lithium-Ionen-Akku liefert Energie für den gesamten Alltag: Bis zu 50 km Reichweite im Pedal-Assist-Modus, in nur 5–6 Stunden wieder vollständig geladen.'
                },
                {
                    align: 'left',
                    image: 'products/D3S/extended/3.webp',
                    title: 'Hochfeste, pannensichere Reifen',
                    text: 'Die robusten 14-Zoll-Reifen sind so konstruiert, dass scharfe Gegenstände sie kaum beschädigen. Das erhöht die Sicherheit und verlängert die Lebensdauer deutlich.'
                },
                {
                    align: 'right',
                    image: 'products/D3S/extended/4.webp',
                    title: 'Sicheres Bremssystem',
                    text: 'Scheibenbremsen vorne und hinten erfüllen höchste Sicherheitsanforderungen. So bleiben Sie in jeder Situation sicher und zuverlässig unterwegs.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des D3S?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 36-V-10-Ah-Akku bis zu 50 km Reichweite. Die tatsächliche Reichweite hängt von Gewicht, Gelände und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das D3S für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das D3S als Pedelec EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Es bietet reine Tretunterstützung (kein Gasdrehgriff).'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der Akku ist in ca. 5–6 Stunden vollständig geladen. Die integrierte Batteriemanagement-Funktion (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das D3S und wie viel kann es zuladen?',
                    answer: 'Das D3S wiegt nur 17 kg und kann bis zu 120 kg belastet werden. Dank des kompakten Faltmechanismus passt es problemlos in Bus, Bahn oder den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das D3S?',
                    answer: 'Auf das D3S erhalten Sie eine Herstellergarantie. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'A1FPro',
        brand: 'DYU',
        category: ['folding'],
        rangeKm: 60,
        motorW: 250,
        battery: '36V 7.5Ah',
        name: 'DYU A1F Pro 16 Zoll Falt-E-Bike',
        description: 'Kompaktes vollfaltbares 16-Zoll-E-Bike mit 250-W-Motor, 36-V-7,5-Ah-Akku und bis zu 60 km Reichweite – ideal für Pendler und Stadtfahrten.',
        longDescription: [
            'Das DYU A1F Pro ist ein vollfaltbares 16-Zoll-E-Bike, das sich in wenigen Sekunden zusammenklappen lässt und sich damit perfekt für Pendler, die Stadt und öffentliche Verkehrsmittel eignet. Der hochfeste Stahlrahmen trägt ein Gesamtgewicht von bis zu 120 kg.',
            'Der kraftvolle 250-W-Motor (maximale Leistung 500 W) unterstützt Sie bis zu 25 km/h. Der integrierte 36-V-7,5-Ah-Lithium-Ionen-Akku liefert im Pedal-Assist-Modus eine Reichweite von bis zu 60 km und ist in ca. 3–4 Stunden vollständig geladen.',
            'Zur Ausstattung gehören ein großer Frontkorb, ein Gepäckträger, Scheibenbremsen vorne und hinten, ein helles Frontlicht sowie ein LED-Display mit Gangschaltung und Akkustandanzeige. Mit nur 21,2 kg Gewicht und IP54-Schutz ist das A1F Pro ein zuverlässiger Begleiter für jeden Tag.'
        ],
        price: 589,
        stripeCheckoutUrl: 'https://buy.stripe.com/00w8wH5er8rnd247iq3oA0S',
        folder: 'products/A1F Pro',
        coverImage: 'products/A1F Pro/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'
        ],
        hasVideo: false,
        dimensionsImage: 'products/A1F Pro/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/A1F Pro/extended/1.jpg'
                },
                {
                    align: 'right',
                    image: 'products/A1F Pro/extended/2.jpg',
                    title: 'Starker 250-W-Motor',
                    text: 'Der 250-W-Hochleistungsmotor erreicht eine Spitzenleistung von bis zu 500 W und ermöglicht ein müheloses und komfortables Fahren auf jeder Stadtstraße.'
                },
                {
                    align: 'left',
                    image: 'products/A1F Pro/extended/3.jpg',
                    title: 'Akku für den Alltag',
                    text: 'Der hochintegrierte 36-V-7,5-Ah-Lithium-Ionen-Akku deckt bequem den täglichen Pendelbedarf ab – mit bis zu 60 km Reichweite im Pedal-Assist-Modus.'
                },
                {
                    align: 'right',
                    image: 'products/A1F Pro/extended/4.jpg',
                    title: 'Sicherer und robuster Rahmen',
                    text: 'Nach mehr als tausend Tests steht die Rahmenfestigkeit für maximale Sicherheit. Der hochfeste Stahlrahmen ist besonders stabil und langlebig.'
                },
                {
                    type: 'fullwidth',
                    image: 'products/A1F Pro/extended/5.jpg'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des A1F Pro?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 36-V-7,5-Ah-Akku bis zu 60 km Reichweite, im reinen Gas-Modus bis zu 30 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das A1F Pro für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das A1F Pro als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der Akku ist in ca. 3–4 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das A1F Pro und wie viel kann es zuladen?',
                    answer: 'Das A1F Pro wiegt nur 21,2 kg und kann bis zu 120 kg belastet werden. Der Gepäckträger nimmt zusätzlich bis zu 25 kg auf. Dank des kompakten Faltmechanismus passt es problemlos in Bus, Bahn oder den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das A1F Pro?',
                    answer: 'Auf das A1F Pro erhalten Sie eine Herstellergarantie. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'C6',
        brand: 'DYU',
        category: ['city'],
        rangeKm: 60,
        motorW: 250,
        battery: '36V 12.5Ah',
        name: 'DYU C6 26 Zoll City-E-Bike',
        description: 'Retro-elegantes 26-Zoll-Stadt-E-Bike mit 250-W-Motor, herausnehmbarem 36-V-12,5-Ah-Akku und bis zu 60 km Reichweite – mit Frontkorb, Gepäckträger und Shimano-6-Gang-Schaltung.',
        longDescription: [
            'Das DYU C6 ist ein elegant-retro gestaltetes City-E-Bike mit klassischem Stahlrahmen, das im Stadtverkehr ebenso stilvoll wie zuverlässig unterwegs ist. Der hochfeste Stahlrahmen und die 26-Zoll-Reifen sorgen für eine stabilen und komfortablen Fahrkomfort auf jedem Untergrund.',
            'Der kraftvolle 250-W-Motor (maximale Leistung 500 W) unterstützt Sie bis zu 25 km/h. Der herausnehmbare 36-V-12,5-Ah-Lithium-Ionen-Akku liefert im Pedal-Assist-Modus eine Reichweite von bis zu 60 km und lässt sich bequem zuhause oder im Büro aufladen – gesichert durch ein integriertes Sicherheitsschloss.',
            'Die Federgabel vorne und die gefederte Sattelstütze dämpfen Unebenheiten, während die Shimano-6-Gang-Schaltung und die Scheibenbremsen vorne und hinten für sicheres und flexibles Fahren sorgen. Der große Frontkorb und der Gepäckträger bieten reichlich Stauraum für Einkäufe, Arbeit und Alltag.'
        ],
        price: 859,
        stripeCheckoutUrl: 'https://buy.stripe.com/bJebIT0Yb4b72nq7iq3oA0T',
        folder: 'products/C6',
        coverImage: 'products/C6/White/1.jpg',
        variants: [
            {
                id: 'White',
                name: 'Weiß',
                folder: 'products/C6/White',
                coverImage: 'products/C6/White/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/bJebIT0Yb4b72nq7iq3oA0T',
                imageFiles: [
                    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'
                ]
            },
            {
                id: 'Black',
                name: 'Schwarz',
                folder: 'products/C6/Black',
                coverImage: 'products/C6/Black/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/4gM8wH22fcHD6DG46e3oA0U',
                imageFiles: [
                    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '4b.jpg', '5.jpg', '5b.jpg', '6.jpg', '6b.jpg', '7.jpg', '8.jpg', '9.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/C6/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/C6/extended/1.jpg'
                },
                {
                    align: 'right',
                    image: 'products/C6/extended/2.jpg',
                    title: 'Starker 250-W-Motor',
                    text: 'Der 250-W-Hochleistungsmotor erreicht eine Spitzenleistung von bis zu 500 W und bewältigt so mühelos den Stadtverkehr sowie Steigungen von bis zu 15°.'
                },
                {
                    align: 'left',
                    image: 'products/C6/extended/3.jpg',
                    title: 'Akku für den Alltag',
                    text: 'Der herausnehmbare 36-V-12,5-Ah-Lithium-Ionen-Akku liefert im Pedal-Assist-Modus bis zu 60 km Reichweite. Dank Sicherheitsschloss können Sie den Akku überall sicher abstellen und bequem aufladen.'
                },
                {
                    align: 'right',
                    image: 'products/C6/extended/4.jpg',
                    title: 'Robuster Rahmen & sichere Bremsen',
                    text: 'Der hochfeste Stahlrahmen trägt zuverlässig bis zu 120 kg Zuladung. Die Scheibenbremsen vorne und hinten sorgen für eine starke und sichere Verzögerung in jeder Situation.'
                },
                {
                    type: 'fullwidth',
                    image: 'products/C6/extended/5.jpg'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des DYU C6?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 36-V-12,5-Ah-Akku bis zu 60 km Reichweite, im reinen Gas-Modus bis zu 43 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das DYU C6 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung (max. 500 W) und maximal 25 km/h ist das C6 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der herausnehmbare Akku ist in ca. 6–8 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das C6 und wie viel kann es zuladen?',
                    answer: 'Das C6 wiegt 27 kg und kann bis zu 120 kg belastet werden. Der Gepäckträger und der große Frontkorb bieten zusätzlich reichlich Stauraum für Einkäufe und Alltagsgegenstände.'
                },
                {
                    question: 'Welche Garantie gibt es auf das DYU C6?',
                    answer: 'Auf das DYU C6 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'UX',
        brand: 'DYU',
        category: ['city'],
        rangeKm: 80,
        motorW: 250,
        battery: '48V 13Ah',
        name: 'DYU UX BMX 20 Zoll Fat-Tire E-Bike',
        description: 'Agiles BMX-Style-Fat-Tire-E-Bike mit 250-W-Motor, herausnehmbarem 48-V-13-Ah-Akku und bis zu 80 km Reichweite – perfekt für City, Gravel und Trails.',
        longDescription: [
            'Das DYU UX vereint den wendigen Look eines BMX mit der Stabilität breiter Fat-Tire-Reifen. Die 20 x 3,0 Zoll Reifen absorbieren Unebenheiten zuverlässig und sorgen auf Asphalt, Kies oder Trails für maximale Stabilität.',
            'Der kraftvolle 250-W-Motor erreicht eine Spitzenleistung von bis zu 500 W und unterstützt Sie bis zu 25 km/h. Der herausnehmbare 48-V-13-Ah-Lithium-Ionen-Akku liefert im Pedal-Assist-Modus eine Reichweite von bis zu 80 km und lässt sich dank Plug-and-Play bequem zuhause oder im Büro aufladen.',
            'Zur Ausstattung gehören doppelte Scheibenbremsen vorne und hinten, ein LCD-Display mit Akkustandanzeige, ein helles Frontlicht, ein Rücklicht sowie ein verstellbarer Sitz. Mit 25,8 kg Gewicht und bis zu 120 kg Zuladung ist das UX ein zuverlässiger Begleiter für den täglichen Weg zur Arbeit und das nächste Wochenendabenteuer.'
        ],
        price: 899,
        stripeCheckoutUrl: 'https://buy.stripe.com/bJe14ffT5azv2nq5ai3oA0V',
        folder: 'products/UX',
        coverImage: 'products/UX/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'
        ],
        hasVideo: false,
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/UX/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/UX/extended/2.webp',
                    title: 'Starker 250-W-Motor',
                    text: 'Der 250-W-Hochleistungsmotor erreicht eine Spitzenleistung von bis zu 500 W und ermöglicht ein müheloses und kraftvolles Fahren – ob in der Stadt, auf Kies oder im Gelände.'
                },
                {
                    align: 'left',
                    image: 'products/UX/extended/3.webp',
                    title: 'Stabile Fat-Tire-Reifen',
                    text: 'Die 20 x 3,0 Zoll Fat-Tire-Reifen absorbieren Stöße und Unebenheiten und sorgen für maximale Stabilität und Traktion auf jedem Untergrund.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des DYU UX?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 48-V-13-Ah-Akku 60–80 km Reichweite, im Gas-Modus 50–65 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das DYU UX für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung (max. 500 W) und maximal 25 km/h ist das UX als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Lässt sich der Akku abnehmen und aufladen?',
                    answer: 'Ja. Der 48-V-13-Ah-Lithium-Ionen-Akku ist herausnehmbar und wird über das mitgelieferte Ladegerät bequem zuhause oder im Büro aufgeladen.'
                },
                {
                    question: 'Wie schwer ist das DYU UX und wie viel kann es zuladen?',
                    answer: 'Das DYU UX wiegt 25,8 kg und kann bis zu 120 kg belastet werden. Der verstellbare Sitz ist für Fahrer von ca. 165 bis 188 cm Körpergröße geeignet.'
                },
                {
                    question: 'Welche Garantie gibt es auf das DYU UX?',
                    answer: 'Auf das DYU UX erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'C9',
        brand: 'DYU',
        category: ['folding'],
        rangeKm: 150,
        motorW: 250,
        battery: '48V 15.6Ah',
        name: 'DYU C9 20 Zoll Langstrecken-E-Bike',
        description: 'Leistungsstarkes faltbares 20-Zoll-E-Bike mit Fat-Tire-Reifen, 48-V-15,6-Ah-Akku, hydraulischen Scheibenbremsen und bis zu 150 km Reichweite – perfekt für Pendler und Touren.',
        longDescription: [
            'Das DYU C9 ist ein faltbares 20-Zoll-E-Bike mit breiten Fat-Tire-Reifen (20 x 3,0 Zoll), das sich in nur drei Schritten zusammenklappen und bequem verstauen lässt. Der hochfeste Aluminiumrahmen und die vordere Stoßdämpfung sorgen auf jedem Untergrund für Komfort und Stabilität.',
            'Der kraftvolle 250-W-Motor unterstützt Sie bis zu 25 km/h und bewältigt mühelos Steigungen von bis zu 15°. Der herausnehmbare 48-V-15,6-Ah-Power-Lithium-Akku liefert im Pedal-Assist-Modus eine beeindruckende Reichweite von bis zu 150 km und ist in ca. 7–8 Stunden vollständig geladen.',
            'Hydraulische Scheibenbremsen vorne und hinten, ein helles Frontlicht, das LED-Display mit Akkustandanzeige sowie ein hinterer Gepäckträger machen das C9 zum vielseitigen Begleiter für Stadt und Alltag. Mit 30 kg Gewicht und bis zu 120 kg Zuladung ist es für Fahrer von ca. 160 bis 195 cm Körpergröße geeignet.'
        ],
        price: 949,
        stripeCheckoutUrl: 'https://buy.stripe.com/28E4gr6iv22Z2nq6em3oA0W',
        folder: 'products/C9',
        coverImage: 'products/C9/Grün/1.jpg',
        variants: [
            {
                id: 'Grün',
                name: 'Grün',
                folder: 'products/C9/Grün',
                coverImage: 'products/C9/Grün/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/28E4gr6iv22Z2nq6em3oA0W',
                imageFiles: [
                    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '11.jpg', '12.jpg'
                ]
            },
            {
                id: 'Weiss',
                name: 'Weiß',
                folder: 'products/C9/Weiss',
                coverImage: 'products/C9/Weiss/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/28E8wH6iv22Z2nq5ai3oA0X',
                imageFiles: [
                    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/C9/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/C9/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/C9/extended/2.webp',
                    title: 'Kraftvoller 250-W-Motor',
                    text: 'Der 250-W-Motor liefert starke Leistung, hervorragende Bergsteigfähigkeit und schnelle Beschleunigung – für ein reibungsloses und effizientes Fahrerlebnis auf verschiedenen Geländen.'
                },
                {
                    align: 'left',
                    image: 'products/C9/extended/3.webp',
                    title: 'Bis zu 150 km Reichweite',
                    text: 'Der herausnehmbare 48-V-15,6-Ah-Power-Lithium-Akku bietet eine enorme Reichweite von bis zu 150 km und sorgt für lange Fahrzeiten im täglichen Pendelverkehr und auf Touren.'
                },
                {
                    align: 'right',
                    image: 'products/C9/extended/4.webp',
                    title: 'Schnell & einfach faltbar',
                    text: 'Das C9 lässt sich in nur drei Schritten zusammenklappen: Vorbau absenken, Pedale einklappen und Rahmen zusammenlegen. Perfekt für die Stadt, Bus, Bahn oder enge Räume.'
                },
                {
                    align: 'left',
                    image: 'products/C9/extended/5.webp',
                    title: 'Perfekt gedämpft',
                    text: 'Das fortschrittliche Federungssystem mit vorderer Stoßdämpfung absorbiert Stöße effektiv und sorgt für eine ruhige und komfortable Fahrt auf unterschiedlichen Straßen.'
                },
                {
                    align: 'right',
                    image: 'products/C9/extended/6.webp',
                    title: 'Hydraulische Scheibenbremsen',
                    text: 'Das hydraulische Scheibenbremssystem vorne und hinten bietet präzise und starke Bremsleistung für maximale Sicherheit und Stabilität unterwegs.'
                },
                {
                    type: 'fullwidth',
                    image: 'products/C9/extended/7.webp'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des DYU C9?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 48-V-15,6-Ah-Akku bis zu 150 km Reichweite, im Gas-Modus 70–80 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das DYU C9 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das C9 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der herausnehmbare Akku ist in ca. 7–8 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das DYU C9 und wie viel kann es zuladen?',
                    answer: 'Das C9 wiegt 30 kg und kann bis zu 120 kg belastet werden. Der hintere Gepäckträger bietet zusätzlich Stauraum für Einkäufe und Gepäck. Geeignet für Fahrer von ca. 160 bis 195 cm Körpergröße.'
                },
                {
                    question: 'Wie lässt sich das DYU C9 falten und transportieren?',
                    answer: 'In nur drei Schritten: Vorbau absenken, Pedale einklappen und Rahmen zusammenlegen. Gefaltet ist es kompakt (970 x 465 x 760 mm) und passt problemlos in Bus, Bahn oder den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das DYU C9?',
                    answer: 'Auf das DYU C9 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'C2',
        brand: 'DYU',
        category: ['folding'],
        rangeKm: 40,
        motorW: 250,
        battery: '48V 7.5Ah',
        name: 'DYU C2 16 Zoll Falt-E-Bike',
        description: 'Kompaktes vollfaltbares 16-Zoll-E-Bike mit Magnesium-Rahmen, 250-W-Motor, mittlerer Stoßdämpfung und bis zu 50 km Reichweite – ideal für den urbanen Alltag.',
        longDescription: [
            'Das DYU C2 ist ein vollfaltbares 16-Zoll-E-Bike im eleganten Doppelfisch-Design aus ultraleichter Magnesiumlegierung. In nur zwei Schritten lässt es sich zusammenklappen und in wenigen Sekunden tragen, verstauen oder in Bahn, Bus und Kofferraum mitnehmen.',
            'Der kraftvolle 250-W-Motor erreicht eine Spitzenleistung von bis zu 500 W und meistert mühelos Steigungen von bis zu 15°. Der integrierte 48-V-7,5-Ah-Power-Lithium-Akku liefert im Gas-Modus eine Reichweite von bis zu 50 km und ist in ca. 4–5 Stunden vollständig geladen.',
            'Die mittlere Stoßdämpfung und die hintere Federung absorbieren Vibrationen zuverlässig, während die 16 x 2,5 Zoll Reifen starken Grip auf jedem Untergrund bieten. Scheibenbremsen vorne und hinten, ein helles Front- und Rücklicht, ein digitales Display sowie der vergrößerte Gepäckträger machen das C2 zum vielseitigen Begleiter für jeden Tag.'
        ],
        price: 509,
        stripeCheckoutUrl: 'https://buy.stripe.com/7sY5kvbCPazv5zC32a3oA0Y',
        folder: 'products/C2',
        coverImage: 'products/C2/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'
        ],
        hasVideo: false,
        dimensionsImage: 'products/C2/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/C2/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/C2/extended/2.webp',
                    title: 'Kraftvoller 250-W-Motor',
                    text: 'Der 250-W-Hochleistungsmotor erreicht eine Spitzenleistung von bis zu 500 W und meistert Steigungen von bis zu 15° mühelos – für ein zügiges und effizientes Fahrerlebnis in der Stadt.'
                },
                {
                    align: 'left',
                    image: 'products/C2/extended/3.webp',
                    title: 'Leichter Magnesium-Rahmen',
                    text: 'Der Rahmen aus ultraleichter Magnesiumlegierung im einzigartigen DYU-Doppelfisch-Design ist stabil und leicht zugleich. In nur zwei Schritten ist das C2 gefaltet und binnen Sekunden einsatzbereit.'
                },
                {
                    align: 'right',
                    image: 'products/C2/extended/4.webp',
                    title: 'Akku für den Alltag',
                    text: 'Der integrierte 48-V-7,5-Ah-Power-Lithium-Akku liefert im Gas-Modus eine Reichweite von bis zu 50 km und ist in ca. 4–5 Stunden wieder vollständig geladen.'
                },
                {
                    align: 'left',
                    image: 'products/C2/extended/5.webp',
                    title: 'Komfort perfekt gedämpft',
                    text: 'Das mittlere Stoßdämpfungssystem absorbiert die meisten Fahrbahnvibrationen. Die 16 x 2,5 Zoll Reifen mit starkem Grip sorgen dafür, dass sich jedes Terrain glatt und stabil anfühlt.'
                },
                {
                    type: 'fullwidth',
                    image: 'products/C2/extended/6.webp'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des DYU C2?',
                    answer: 'Im Gas-Modus erreichen Sie mit dem 48-V-7,5-Ah-Akku eine Reichweite von bis zu 50 km (40–50 km je nach Fahrweise). Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das DYU C2 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das C2 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der Akku ist mit dem mitgelieferten Ladegerät (AC 100–240V) in ca. 4–5 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das DYU C2 und wie viel kann es zuladen?',
                    answer: 'Das C2 wiegt ca. 30,5 kg und kann bis zu 120 kg belastet werden. Der vergrößerte Gepäckträger bietet zusätzlich reichlich Stauraum für Einkäufe, Gepäck und den Alltag.'
                },
                {
                    question: 'Wie lässt sich das DYU C2 falten und transportieren?',
                    answer: 'In nur zwei Schritten: Rahmen zusammenklappen und Vorbau absenken. Gefaltet ist es mit nur 815 x 435 x 565 mm kompakt und passt problemlos in Bahn, Bus, Aufzug oder den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das DYU C2?',
                    answer: 'Auf das DYU C2 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'SP1',
        brand: 'DYU',
        category: ['folding'],
        rangeKm: 30,
        motorW: 250,
        battery: '24V 5Ah',
        name: 'DYU SP1 20 Zoll Falt-E-Bike',
        description: 'Ultraleichtes 20-Zoll-Falt-E-Bike aus Aluminium mit 250-W-Motor, herausnehmbarer 24-V-Powerbank und nur 14 kg Gewicht – ideal für Pendler, Bahn und Flugzeug.',
        longDescription: [
            'Das DYU SP1 ist ein ultraleichtes 20-Zoll-Falt-E-Bike, das mit nur 14 kg Gewicht Maßstäbe setzt. Die innovative Aluminiumlegierung mit 3D-Schmiedetechnologie macht den Rahmen extrem stabil und dennoch so leicht, dass er sich bequem tragen, verstauen und auf Reisen mitnehmen lässt.',
            'Der bürstenlose 250-W-Gleichstrommotor unterstützt Sie bis zu 25 km/h. Die entnehmbare Powerbank aus LG-Lithium-Ionen-Zellen (24 V, 5 Ah) liefert im Pedal-Assist-Modus eine Reichweite von bis zu 30 km und lässt sich dank cleverem Design ideal zum Laden von Smartphones und Tablets unterwegs mitnehmen.',
            'Zur Ausstattung gehören TR-160-mm-Scheibenbremsen vorne und hinten, eine StVZO-zugelassene OSRAM-LED-Front- und Rückleuchte, die über USB aufgeladen wird, sowie ein Faltmechanismus, der das SP1 auf kompakte 700 x 450 x 620 mm zusammengeklappt. Dadurch ist es vollkommen konform für die Mitnahme in U-Bahn, Bahn und Flugzeug.'
        ],
        price: 1199,
        stripeCheckoutUrl: 'https://buy.stripe.com/8x228jgX9fTP1jmfOW3oA0Z',
        folder: 'products/SP1',
        coverImage: 'products/SP1/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'
        ],
        hasVideo: false,
        dimensionsImage: 'products/SP1/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/SP1/extended/2.webp'
                },
                {
                    align: 'right',
                    image: 'products/SP1/extended/3.webp',
                    title: 'Entnehmbare Powerbank',
                    text: 'Die herausnehmbare Powerbank aus LG-Lithium-Ionen-Zellen liefert die Energie für den gesamten Alltag – und lädt nebenbei auch Smartphone und Tablet unterwegs.'
                },
                {
                    align: 'left',
                    image: 'products/SP1/extended/4.webp',
                    title: 'Ultra-leicht & faltbar',
                    text: 'Mit nur 14 kg Gewicht ist das SP1 ein echtes Leichtgewicht. Kompakt zusammengeklappt passt es problemlos in U-Bahn, Bahn, Flugzeug oder den Kofferraum.'
                },
                {
                    align: 'right',
                    image: 'products/SP1/extended/5.webp',
                    title: 'High-Tech-Aluminiumrahmen',
                    text: 'Die 20-Zoll-Aluminiumlegierung mit innovativer 3D-Schmiedetechnologie bietet maximale Stabilität bei minimalem Gewicht.'
                },
                {
                    align: 'left',
                    image: 'products/SP1/extended/6.webp',
                    title: 'Sicher & gut beleuchtet',
                    text: 'TR-160-mm-Scheibenbremsen vorne und hinten sowie die StVZO-zugelassene OSRAM-LED-Beleuchtung sorgen zu jeder Tageszeit für sichere Fahrten.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des SP1?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit der 24-V-5-Ah-Powerbank 25–30 km Reichweite. Die tatsächliche Reichweite hängt von Gewicht, Gelände und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das SP1 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das SP1 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Die entnehmbare Powerbank ist mit dem mitgelieferten Ladegerät (DC 25,2 V / 1,5 A, AC 100–240 V) in ca. 3–4 Stunden vollständig geladen.'
                },
                {
                    question: 'Wie schwer ist das SP1 und wie viel kann es zuladen?',
                    answer: 'Das SP1 wiegt nur 14 kg und ist damit eines der leichtesten Falt-E-Bikes seiner Klasse. Dadurch lässt es sich bequem tragen und in U-Bahn, Bahn oder Flugzeug mitnehmen.'
                },
                {
                    question: 'Wie lässt sich das SP1 falten und transportieren?',
                    answer: 'Der Faltmechanismus klappt das SP1 auf kompakte 700 x 450 x 620 mm zusammen. Somit passt es problemlos in enge Räume, Aufzüge, Bahnen und den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das SP1?',
                    answer: 'Auf das SP1 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'M20',
        brand: 'DYU',
        category: ['moto'],
        rangeKm: 100,
        motorW: 250,
        battery: '48V 18.2Ah',
        name: 'DYU M20 20 Zoll All-Terrain Moto-E-Bike',
        description: 'Kraftvolles All-Terrain-Moto-E-Bike mit breiten 20-Zoll-Fat-Tire-Reifen, 48-V-18,2-Ah-Akku und bis zu 100 km Reichweite – für Gelände, Sand und anspruchsvolle Trails.',
        longDescription: [
            'Das DYU M20 ist ein kraftvolles All-Terrain-E-Bike im Moto-Style mit breiten 20 x 4,0 Zoll Fat-Tire-Reifen und einer vorderen Stoßdämpfung. Es meistert zuverlässig raue Trails, sandige Dünen und verschneite Wege und macht auf jedem Untergrund eine gute Figur.',
            'Der kraftvolle 250-W-Motor erreicht eine Spitzenleistung von bis zu 1000 W und unterstützt Sie bis 25 km/h ebenso wie beim Überwinden steilerer Steigungen. Der Lithium-Ionen-Akku mit 48 V und 18,2 Ah liefert im Pedal-Assist-Modus eine Reichweite von bis zu 100 km und im Gas-Modus bis zu 70 km – in ca. 7–8 Stunden ist er vollständig geladen.',
            'Für Sicherheit sorgen die hochwertigen Dual-Actuated-Scheibenbremsen vorne und hinten sowie das helle Frontlicht und das Rücklicht am Gepäckträger. Das LED-Display mit Akkustandanzeige zeigt jederzeit den Ladezustand. Mit 40 kg Gewicht, bis zu 120 kg Zuladung und IP54-Schutz ist das M20 ein robuster Begleiter für jedes Abenteuer.'
        ],
        price: 1049,
        stripeCheckoutUrl: 'https://buy.stripe.com/14A14f36j0YVd2446e3oA10',
        folder: 'products/M20',
        coverImage: 'products/M20/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'
        ],
        hasVideo: false,
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/M20/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/M20/extended/2.webp',
                    title: 'Voller All-Terrain-Antrieb',
                    text: 'Die 20 x 4,0 Zoll Fat-Tire-Reifen, die vordere Stoßdämpfung und der kraftvolle 250-W-Motor (max. 1000 W) sorgen für Grip, Komfort und jede Menge Power – auf Trails, Sand und Schnee gleichermaßen.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des DYU M20?',
                    answer: 'Mit dem 48-V-18,2-Ah-Akku erreichen Sie im Pedal-Assist-Modus bis zu 100 km, im Gas-Modus bis zu 70 km Reichweite. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das DYU M20 für den Straßenverkehr zugelassen?',
                    answer: 'Mit 250 W Nennleistung, maximal 1000 W Spitzenleistung und 25 km/h fällt das M20 in die EU-Klasse der E-Bikes. Bitte prüfen Sie für die Nutzung auf öffentlichen Straßen die lokalen Vorschriften.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der Akku ist mit dem mitgelieferten Ladegerät (DC54,6 V, AC 100–240 V) in ca. 7–8 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das DYU M20 und wie viel kann es zuladen?',
                    answer: 'Das M20 wiegt 40 kg und kann bis zu 120 kg belastet werden. Der Gepäckträger nimmt zusätzlich Gepäck auf und das Rücklicht erhöht die Sicherheit bei Fahrten in der Dunkelheit.'
                },
                {
                    question: 'Welche Garantie gibt es auf das DYU M20?',
                    answer: 'Auf das DYU M20 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'T1',
        brand: 'DYU',
        category: ['folding'],
        rangeKm: 60,
        motorW: 250,
        battery: '36V 10Ah',
        name: 'DYU T1 20 Zoll Falt-E-Bike',
        description: 'Leichtes 20-Zoll-Falt-E-Bike mit Magnesium-Rahmen, Drehmomentsensor, Shimano-7-Gang-Schaltung und bis zu 60 km Reichweite – ideal für den urbanen Alltag.',
        longDescription: [
            'Das DYU T1 ist ein kompaktes 20-Zoll-Falt-E-Bike mit einem Rahmen aus Magnesiumlegierung, der sich in drei einfachen Schritten zusammenklappen lässt und so problemlos in Bahn, Bus oder Kofferraum passt. Die 20-Zoll-Reifen machen es agil und komfortabel im Stadtverkehr.',
            'Der 250-W-Motor unterstützt Sie mit einem Drehmomentsensor (max. 35 Nm) bis zu 25 km/h. Der herausnehmbare 36-V-10-Ah-Lithium-Ionen-Akku ermöglicht eine Reichweite von bis zu 60 km und ist in ca. 5–6 Stunden vollständig geladen.',
            'Die Shimano-7-Gang-Schaltung, die Scheibenbremsen vorne und hinten sowie das helle Frontlicht sorgen für Komfort und Sicherheit. Mit nur 22,5 kg Gewicht, 120 kg Zuladung und IP54-Schutz ist das T1 mit seinem Gepäckträger ein zuverlässiger Begleiter für jeden Tag.'
        ],
        price: 759,
        stripeCheckoutUrl: 'https://buy.stripe.com/4gM00b7mz22Z5zCbyG3oA11',
        folder: 'products/T1',
        coverImage: 'products/T1/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg'
        ],
        hasVideo: false,
        dimensionsImage: 'products/T1/Dimensions/Dimensions.JPG',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/T1/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/T1/extended/2.webp',
                    title: 'Drehmomentsensor für natürliches Fahrgefühl',
                    text: 'Der Drehmomentsensor mit einem maximalen Drehmoment von 35 Nm bietet eine sanfte und besonders natürliche Tretunterstützung – sparsam im Verbrauch und angenehm in jeder Situation.'
                },
                {
                    align: 'left',
                    image: 'products/T1/extended/3.webp',
                    title: 'Leichter Magnesium-Rahmen',
                    text: 'Der im Druckgussverfahren gefertigte Rahmen aus Magnesiumlegierung mit matter Oberfläche reduziert das Gewicht deutlich und macht das T1 zu einem edlen und zugleich leichten Begleiter.'
                },
                {
                    align: 'right',
                    image: 'products/T1/extended/4.webp',
                    title: 'Reichweite für den ganzen Tag',
                    text: 'Der herausnehmbare 36-V-10-Ah-Akku verfügt über einen Diebstahlschutz und lässt sich per Schlüssel entnehmen. Im Pedal-Assist-Modus bringt Sie eine Ladung bis zu 60 km weit.'
                },
                {
                    align: 'left',
                    image: 'products/T1/extended/5.webp',
                    title: 'Flexibel und erweiterbar',
                    text: 'Die Kombination aus Drehmomentsensor und Gepäckträger steigert Komfort und Zuladung – das T1 lässt sich optimal an Ihre täglichen Anforderungen anpassen.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des DYU T1?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 36-V-10-Ah-Akku bis zu 60 km Reichweite. Die tatsächliche Reichweite hängt von Gewicht, Gelände und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das DYU T1 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das DYU T1 als Pedelec EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Es bietet reine Tretunterstützung (kein Gasdrehgriff).'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der Akku ist mit dem mitgelieferten Ladegerät (AC 100–220V) in ca. 5–6 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das DYU T1 und wie viel kann es zuladen?',
                    answer: 'Das T1 wiegt nur 22,5 kg und kann bis zu 120 kg belastet werden. Dank des kompakten Faltmechanismus und der 20-Zoll-Reifen passt es problemlos in Bahn, Bus oder den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das DYU T1?',
                    answer: 'Auf das DYU T1 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'Campx',
        brand: 'DYU',
        category: ['wagon'],
        rangeKm: 0,
        motorW: 1200,
        battery: '36V 8Ah',
        name: 'DYU CampX Faltbarer Elektrischer Bollerwagen',
        description: 'Kompakter faltbarer elektrischer Bollerwagen mit 1200-W-Doppelantrieb, LiFePO₄-Akku und 350 kg Zuladung – ideal für Camping, Garten und Alltag.',
        longDescription: [
            'Der DYU CampX ist ein faltbarer elektrischer Bollerwagen, der mit seinem 1200-W-Heck-Dualantrieb und der vollständigen Ackermann-Lenkgeometrie sanfte und stabile Kraftübertragung auf jedem Gelände bietet. Dank der 4-Wege-Kompaktfaltung ist er ultraslim für die Aufbewahrung im Kofferraum und Schrank.',
            'Der LiFePO₄-Akku mit 9-Schicht-BMS sorgt für höhere Sicherheit und längere Lebensdauer. Mit einer Maximalgeschwindigkeit von 12 km/h und einer Tragfähigkeit von bis zu 350 kg bewältigt der CampX selbst schwere Lasten mühelos.',
            'Das dreifache Bremssystem inklusive Rekuperationsbremse sorgt für Sicherheit unter Last und bei Bergabfahrten. Der 1,5-Zoll-Digitall Display zeigt alle wichtigen Informationen auf einen Blick. Der CampX ist ausschließlich für den Geländeeinsatz geeignet (Campingplätze, Parks und Privatgrundstücke).'
        ],
        price: 999,
        stripeCheckoutUrl: 'https://buy.stripe.com/8x23cngX9gXT1jmbyG3oA12',
        folder: 'products/Campx',
        coverImage: 'products/Campx/Images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg'
        ],
        hasVideo: false,
        extendedContent: {
            sections: [
                { type: 'fullwidth', image: 'products/Campx/extended/1.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/2.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/3.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/4.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/6.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/7.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/8.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/9.webp' },
                { type: 'fullwidth', image: 'products/Campx/extended/10.webp' }
            ],
            faqs: [
                {
                    question: 'Welche Zahlungsmethoden werden akzeptiert?',
                    answer: 'Wir akzeptieren Shop Pay für Ratenzahlungen sowie alle gängigen Kreditkarten, PayPal und Klarna. Eine Bezahlung per Nachnahme wird aktuell nicht angeboten.'
                },
                {
                    question: 'Habe ich eine Garantie beim Einkauf?',
                    answer: 'Ja. Wir unterstützen Rückgabe und Umtausch innerhalb von 14 Tagen und garantieren Ihnen eine sichere Zahlung. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                },
                {
                    question: 'Ist der CampX für den Straßenverkehr zugelassen?',
                    answer: 'Nein. Der CampX ist ausschließlich für den Geländeeinsatz geeignet (Campingplätze, Parks und Privatgrundstücke) und nicht für öffentliche Straßen vorgesehen.'
                },
                {
                    question: 'Wie viel kann der CampX laden?',
                    answer: 'Der CampX hat eine maximale Tragfähigkeit von 350 kg (772 lbs). Das Fassungsvermögen beträgt 183 Liter (ca. 92 x 48 x 33 cm).'
                },
                {
                    question: 'Wie schnell lädt sich der Akku?',
                    answer: 'Der LiFePO₄-Akku ist in ca. 3 Stunden vollständig geladen. Das integrierte 9-Schicht-BMS sorgt für sicheres und schonendes Laden.'
                },
                {
                    question: 'Wie faltet sich der CampX?',
                    answer: 'Der CampX verfügt über eine 4-Wege-Kompaktfaltung (Converging Fold). Gefaltet misst er nur 48 x 29 x 75 cm und passt so kompakt in Kofferräume und Schränke.'
                }
            ]
        }
    },
    {
        id: 'OT16-2',
        brand: 'OneSport',
        category: ['folding'],
        rangeKm: 120,
        motorW: 250,
        battery: '48V 17Ah',
        name: 'OneSport OT16-2 20 Zoll Falt-E-Bike',
        description: 'Kraftvolles faltbares 20-Zoll-E-Bike mit 250-W-Motor, 48-V-17-Ah-Akku und bis zu 120 km Reichweite – mit mechanischen Scheibenbremsen, Front-Stoßdämpfung und faltbarem Eisenrahmen.',
        longDescription: [
            'Das OneSport OT16-2 ist ein faltbares 20-Zoll-E-Bike mit robustem Eisenrahmen und breiten 20 x 3,0 Zoll Reifen. Der faltbare Rahmen lässt sich kompakt zusammenklappen und ermöglicht so einfachen Transport und Stauraum – ideal für Pendler, Bahn und Kofferraum.',
            'Der kraftvolle 48-V-250-W-Hubmotor mit 40 Nm Drehmoment unterstützt Sie bis zu 25 km/h und bewältigt Steigungen von bis zu 30° mühelos. Der leistungsstarke 48-V-17-Ah-Lithium-Ionen-Akku liefert im Pedalunterstützungsmodus eine beeindruckende Reichweite von bis zu 120 km und ist in ca. 8–10 Stunden vollständig geladen.',
            'Mechanische Scheibenbremsen vorne und hinten, eine vordere Gabel-Stoßdämpfung sowie Front- und Rücklicht sorgen für Komfort und Sicherheit. Mit IPX6-Schutzklasse, 150 kg Zuladung und nur ca. 30 kg Eigengewicht ist das OT16-2 ein zuverlässiger Begleiter für Stadt und Tour.'
        ],
        price: 729,
        stripeCheckoutUrl: 'https://buy.stripe.com/cNi8wH7mz373gegdGO3oA08',
        folder: 'products/OT16-2',
        coverImage: 'products/OT16-2/images/Schwarz/1.jpg',
        variants: [
            {
                id: 'Schwarz',
                name: 'Schwarz',
                folder: 'products/OT16-2/images/Schwarz',
                coverImage: 'products/OT16-2/images/Schwarz/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/cNi8wH7mz373gegdGO3oA08',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg'
                ]
            },
            {
                id: 'Weiß',
                name: 'Weiß',
                folder: 'products/OT16-2/images/Weiß',
                coverImage: 'products/OT16-2/images/Weiß/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/7sYbIT4anazv4vybyG3oA09',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','16.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/OT16-2/Dimensions.webp',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/OT16-2/extended/1.jpg'
                },
                {
                    align: 'right',
                    image: 'products/OT16-2/extended/9.jpg',
                    title: 'Kraftvoller 48-V-250-W-Motor',
                    text: 'Der leistungsstarke Hubmotor mit 40 Nm Drehmoment unterstützt Sie bis zu 25 km/h und bewältigt Steigungen von bis zu 30° mühelos – für ein kraftvolles und effizientes Fahrerlebnis auf jedem Terrain.'
                },
                {
                    align: 'left',
                    image: 'products/OT16-2/extended/11.jpg',
                    title: 'Bis zu 120 km Reichweite',
                    text: 'Der leistungsstarke 48-V-17-Ah-Lithium-Ionen-Akku liefert im Pedalunterstützungsmodus eine beeindruckende Reichweite von bis zu 120 km – ideal für lange Pendelwege und ausgedehnte Touren.'
                },
                {
                    align: 'right',
                    image: 'products/OT16-2/extended/12.JPG',
                    title: 'Komfort & Sicherheit',
                    text: 'Die vordere Gabel-Stoßdämpfung absorbiert Unebenheiten zuverlässig, während mechanische Scheibenbremsen vorne und hinten für sichere Verzögerung sorgen. IPX6-Schutzklasse macht das OT16-2 wetterfest.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des OneSport OT16-2?',
                    answer: 'Im Pedalunterstützungsmodus erreichen Sie mit dem 48-V-17-Ah-Akku eine Reichweite von bis zu 120 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das OneSport OT16-2 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das OT16-2 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der Akku ist mit dem mitgelieferten Ladegerät in ca. 8–10 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das OT16-2 und wie viel kann es zuladen?',
                    answer: 'Das OT16-2 wiegt ca. 30 kg und kann bis zu 150 kg belastet werden. Der faltbare Eisenrahmen bietet Stabilität und Robustheit für den täglichen Einsatz.'
                },
                {
                    question: 'Wie lässt sich das OT16-2 falten und transportieren?',
                    answer: 'Der faltbare Rahmen lässt sich kompakt zusammenklappen (895 x 380 x 750 mm) und passt problemlos in Bahn, Bus, Aufzug oder den Kofferraum.'
                },
                {
                    question: 'Welche Garantie gibt es auf das OneSport OT16-2?',
                    answer: 'Auf das OT16-2 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'OT02',
        brand: 'OneSport',
        category: ['folding'],
        rangeKm: 25,
        motorW: 250,
        battery: '36V 5.2Ah',
        name: 'OneSport OT02 16 Zoll Falt-E-Bike',
        description: 'Leichtes faltbares 16-Zoll-E-Bike mit 250-W-Motor, 36-V-5,2-Ah-Flaschen-Akku und bis zu 25 km Reichweite – mit nur 14,5 kg besonders leicht und in Sekunden zusammenfaltbar.',
        longDescription: [
            'Das OneSport OT02 ist ein besonders leichtes Falt-E-Bike mit 16-Zoll-Reifen und robustem Chromoly-Stahlrahmen. Mit nur 14,5 kg Netto-Gewicht lässt es sich bequem tragen, in Bus oder Bahn mitnehmen und platzsparend unter dem Schreibtisch verstauen – ideal für Pendler und den urbanen Alltag.',
            'Der leise 250-W-Ananda-Hinterradmotor mit Torque-Sensor und 30 Nm Drehmoment unterstützt Sie bis zu 25 km/h und macht Steigungen und längere Strecken mühelos. Der herausnehmbare 36-V-5,2-Ah-Flaschen-Akku sorgt für eine Reichweite von bis zu 25 km und ist in ca. 2,5–3 Stunden vollständig geladen.',
            'V-Bremsen, ein helles Frontlicht sowie ein 3-stufiges LCD-Display mit Akkustandanzeige sorgen für Komfort und Sicherheit. Mit einer maximalen Zuladung von 80 kg und IPX4-Schutzklasse ist das OT02 ein zuverlässiger Begleiter für den täglichen Weg zur Arbeit.'
        ],
        price: 599,
        outOfStock: true,
        stripeCheckoutUrl: 'https://buy.stripe.com/8x2dR1eP1cHD4vyeKS3oA05',
        folder: 'products/OT02',
        coverImage: 'products/OT02/images/Grün/1.jpg',
        variants: [
            {
                id: 'Grün',
                name: 'Grün',
                folder: 'products/OT02/images/Grün',
                coverImage: 'products/OT02/images/Grün/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/8x2dR1eP1cHD4vyeKS3oA05',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg'
                ]
            },
            {
                id: 'Röt',
                name: 'Röt',
                folder: 'products/OT02/images/Röt',
                coverImage: 'products/OT02/images/Röt/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/fZubITfT54b7geg0U23oA04',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/OT02/Dimensions.webp',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/OT02/extended/1.jpg'
                },
                {
                    align: 'right',
                    image: 'products/OT02/extended/11.jpg',
                    title: 'Faltet in Sekunden',
                    text: 'Der klassische Faltmechanismus aus Chromoly-Stahl macht das OT02 im Handumdrehen kompakt. So passt es überall hin – in Bus, Bahn, Aufzug, den Kofferraum oder unter den Schreibtisch.'
                },
                {
                    align: 'left',
                    image: 'products/OT02/extended/13.jpg',
                    title: 'Leiser 250-W-Motor',
                    text: 'Der 250-W-Ananda-Hinterradmotor mit Torque-Sensor liefert sanfte, agile und zugleich kraftvolle Unterstützung bis 25 km/h – für ein reibungsloses Fahrerlebnis im Stadtverkehr.'
                },
                {
                    align: 'right',
                    image: 'products/OT02/extended/23.jpg',
                    title: '36-V-5,2-Ah-Flaschen-Akku',
                    text: 'Der herausnehmbare Flaschen-Akku ist elegant im Rahmen integriert, liefert eine Reichweite von bis zu 25 km und ist in nur ca. 2,5–3 Stunden vollständig geladen.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des OneSport OT02?',
                    answer: 'Mit dem 36-V-5,2-Ah-Akku erreichen Sie im Pedalunterstützungsmodus eine Reichweite von bis zu 25 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das OneSport OT02 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das OT02 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der herausnehmbare Flaschen-Akku ist mit dem mitgelieferten 42V-2A-Ladegerät in ca. 2,5–3 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das OneSport OT02 und wie viel kann es zuladen?',
                    answer: 'Das OT02 wiegt nur ca. 14,5 kg (netto) und kann bis zu 80 kg belastet werden. Der Chromoly-Stahlrahmen bietet dabei eine gute Balance aus Stabilität und geringem Gewicht.'
                },
                {
                    question: 'Wie lässt sich das OneSport OT02 falten und transportieren?',
                    answer: 'Der faltbare Rahmen lässt sich in Sekunden kompakt zusammenklappen. Gefaltet passt das OT02 problemlos in Bus, Bahn, Aufzug oder den Kofferraum und lässt sich dank des geringen Gewichts bequem tragen.'
                },
                {
                    question: 'Welche Garantie gibt es auf das OneSport OT02?',
                    answer: 'Auf das OT02 erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'OT02Pro',
        brand: 'OneSport',
        category: ['folding'],
        rangeKm: 25,
        motorW: 250,
        battery: '36V 5.2Ah',
        name: 'OneSport OT02 Pro 20 Zoll Falt-E-Bike',
        description: 'Leichtes faltbares 20-Zoll-E-Bike mit 250-W-Motor, Torque-Sensor, Shimano 7-Gang und mechanischen Scheibenbremsen – mit nur ca. 17,18 kg Gewicht und bis zu 25 km Reichweite.',
        longDescription: [
            'Das OneSport OT02 Pro verbindet Retro-Design mit moderner Technik: Der robuste Chromoly-Stahlrahmen ist faltbar und lässt sich platzsparend in Bus, Bahn oder Kofferraum verstauen. Mit ca. 17,18 kg Netto-Gewicht und den agilen 20-Zoll-Reifen ist es der ideale Begleiter für Pendler und urbane Alltagsfahrten.',
            'Der leise 250-W-Hinterradmotor mit Torque-Sensor liefert bis zu 30 Nm Drehmoment und unterstützt Sie bis 25 km/h. In Kombination mit der Shimano 7-Gang-Schaltung meistern Sie Steigungen bis 30° mühelos. Der herausnehmbare 36-V-5,2-Ah-Lithium-Ionen-Akku sorgt für eine Reichweite von bis zu 25 km und ist in ca. 2,5–3 Stunden vollständig geladen.',
            'Mechanische Scheibenbremsen vorne und hinten, ein LCD-Display und ein helles Frontlicht sorgen für Komfort und Sicherheit. Mit einer maximalen Zuladung von 80 kg und IPX4-Schutzklasse ist das OT02 Pro ein zuverlässiger Begleiter für den täglichen Weg zur Arbeit.'
        ],
        price: 629,
        stripeCheckoutUrl: 'https://buy.stripe.com/6oU5kvfT5fTPgegcCK3oA0F',
        folder: 'products/OT02Pro',
        coverImage: 'products/OT02Pro/Grün/1.jpg',
        variants: [
            {
                id: 'Grün',
                name: 'Grün',
                folder: 'products/OT02Pro/Grün',
                coverImage: 'products/OT02Pro/Grün/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/6oU5kvfT5fTPgegcCK3oA0F',
                imageFiles: [
                    '1.jpg','2.jpg','L01.jpg','L02.jpg','L03.jpg','L04.jpg','L05.jpg','L06.jpg','L07.jpg','L08.jpg','L09.jpg','OT02Pro-L.13.jpg','OT02Pro-L.14.jpg','OT02Pro-L.15.jpg','OT02Pro-L.16.jpg','OT02Pro-L.17.jpg','OT02Pro-L.19.jpg','OT02Pro-L.20.jpg','OT02Pro-L.21.jpg','OT02Pro-L.22.jpg','OT02Pro-L.23.jpg','OT02Pro-L.24.jpg','OT02Pro-L.25.jpg','OT02Pro-L.26.jpg','OT02Pro-L.5.jpg','OT02Pro-L.9.jpg','OT02Pro-ZD.4.jpg','OT02Pro-ZD.6.jpg'
                ]
            },
            {
                id: 'Rot',
                name: 'Rot',
                folder: 'products/OT02Pro/Rot',
                coverImage: 'products/OT02Pro/Rot/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/14A8wHcGTgXT1jm9qy3oA0E',
                imageFiles: [
                    '1.jpg','2 (2).jpg','2.jpg','2b.jpg','4 (2).jpg','H01.jpg','H02.jpg','H03.jpg','H04.jpg','H05.jpg','H06.jpg','H07.jpg','H08.jpg','H09.jpg','OT02Pro-H.13.jpg','OT02Pro-H.14.jpg','OT02Pro-H.15.jpg','OT02Pro-H.17.jpg','OT02Pro-H.19.jpg','OT02Pro-H.21.jpg','OT02Pro-H.22.jpg','OT02Pro-H.23.jpg','OT02Pro-H.24.jpg','OT02Pro-H.25.jpg','OT02Pro-H.26.jpg','OT02Pro-H.5.jpg','OT02Pro-H.9.jpg','OT02Pro-ZD.1.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/OT02Pro/Dimensions/Dimensions.jpg',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/OT02Pro/extended/1.webp'
                },
                {
                    align: 'right',
                    image: 'products/OT02Pro/extended/H07.jpg',
                    title: 'Leiser 250-W-Motor mit Torque-Sensor',
                    text: 'Der 250-W-Hinterradmotor mit Drehmomentsensor liefert bis zu 30 Nm und passt die Unterstützung sanft und linear an Ihre Tretkraft an – für ein natürliches Fahrgefühl bis 25 km/h.'
                },
                {
                    align: 'left',
                    image: 'products/OT02Pro/extended/L05.jpg',
                    title: 'Shimano 7-Gang für jede Situation',
                    text: 'Die Shimano 7-Gang-Schaltung macht das OT02 Pro vielseitig: Ob entspannt durch die Stadt, über Steigungen oder auf längeren Strecken – Sie schalten immer im passenden Gang.'
                },
                {
                    align: 'right',
                    image: 'products/OT02Pro/extended/L09.jpg',
                    title: '36-V-5,2-Ah-Akku',
                    text: 'Der herausnehmbare Flaschen-Akku liefert eine Reichweite von bis zu 25 km und ist mit dem mitgelieferten 42-V-2-A-Ladegerät in nur ca. 2,5–3 Stunden wieder vollständig geladen.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des OneSport OT02 Pro?',
                    answer: 'Mit dem 36-V-5,2-Ah-Akku erreichen Sie in der Unterstützungsstufe eine Reichweite von bis zu 25 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das OneSport OT02 Pro für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das OT02 Pro als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der herausnehmbare Flaschen-Akku ist mit dem mitgelieferten 42V-2A-Ladegerät in ca. 2,5–3 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das OneSport OT02 Pro und wie viel kann es zuladen?',
                    answer: 'Das OT02 Pro wiegt ca. 17,18 kg (netto) und kann bis zu 80 kg belastet werden. Der Chromoly-Stahlrahmen bietet dabei eine gute Balance aus Stabilität und geringem Gewicht.'
                },
                {
                    question: 'Wie lässt sich das OneSport OT02 Pro falten und transportieren?',
                    answer: 'Der faltbare Rahmen lässt sich in wenigen Schritten kompakt zusammenklappen. Gefaltet passt das OT02 Pro problemlos in Bus, Bahn, Aufzug oder den Kofferraum und lässt sich dank des geringen Gewichts bequem tragen.'
                },
                {
                    question: 'Welche Garantie gibt es auf das OneSport OT02 Pro?',
                    answer: 'Auf das OT02 Pro erhalten Sie eine Herstellergarantie von 12–24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'OT05',
        brand: 'OneSport',
        category: ['city'],
        rangeKm: 120,
        motorW: 250,
        battery: '36V 18.2Ah',
        name: 'OneSport OT05 27,5 Zoll City-E-Bike',
        description: 'Komfortables 27,5-Zoll-City-E-Bike mit 250-W-Motor mit Torque-Sensor, 36-V-18,2-Ah-Akku und bis zu 120 km Reichweite – mit Shimano 7-Gang, hydraulischen Scheibenbremsen und LCD-Display mit Bluetooth.',
        longDescription: [
            'Das OneSport OT05 ist ein vielseitiges City-E-Bike mit robustem 27,5-Zoll-Aluminiumrahmen und ergonomischer Geometrie für ein entspanntes und aufrechtes Fahrgefühl. Mit den luftigen 27,5 x 2,25 Zoll Reifen, einem bequemen Sattel und Schutzblechen ist es ideal für den täglichen Weg zur Arbeit, Einkäufe und ausgedehnte Stadtrundfahrten.',
            'Der leise 250-W-Hinterradmotor von Ananda mit Drehmomentsensor und 40 Nm Drehmoment unterstützt Sie sanft und natürlich bis 25 km/h und bewältigt Steigungen von bis zu 20° mühelos. Der herausnehmbare 36-V-18,2-Ah-Lithium-Ionen-Akku (18650) liefert im Pedal-assist-Modus eine Reichweite von bis zu 120 km und ist in ca. 8–10 Stunden vollständig geladen.',
            'Die hydraulischen Scheibenbremsen vorne und hinten sorgen für zuverlässige Verzögerung, während die Shimano 7-Gang-Schaltung Sie in jeder Situation flexibel schalten lässt. Das 3-stufige LCD-Display mit Bluetooth, Front- und Rücklicht sowie die vordere Stoßdämpfergabel runden das komfortable Ausstattungspaket mit IPX5-Schutz ab.'
        ],
        price: 1029,
        stripeCheckoutUrl: 'https://buy.stripe.com/5kQbITgX96jf3ru6em3oA0I',
        folder: 'products/OT05',
        coverImage: 'products/OT05/Weiß/1.jpg',
        variants: [
            {
                id: 'Weiß',
                name: 'Weiß',
                folder: 'products/OT05/Weiß',
                coverImage: 'products/OT05/Weiß/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/5kQbITgX96jf3ru6em3oA0I',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','13.jpg','14.jpg','15.jpg'
                ]
            }
        ],
        hasVideo: false
    },
    {
        id: 'OT05Pro',
        brand: 'OneSport',
        category: ['city'],
        rangeKm: 130,
        motorW: 250,
        battery: '36V 22.5Ah',
        name: 'OneSport OT05 Pro 27,5 Zoll City-E-Bike',
        description: 'Leistungsstarkes 27,5-Zoll-City-E-Bike mit 250-W-Motor (40 Nm) mit Torque-Sensor, großem 36-V-22,5-Ah-Akku und bis zu 140 km Reichweite – mit Shimano 7-Gang, hydraulischen Scheibenbremsen und IPX6-Schutzklasse.',
        longDescription: [
            'Das OneSport OT05 Pro ist ein kraftvolles City-E-Bike mit robustem 27,5-Zoll-Aluminiumrahmen und aufrechter, komfortabler Geometrie für den urbanen Alltag. Mit den luftigen 27,5 x 2,25 Zoll Reifen, dem bequemen Sattel und Schutzblechen eignet es sich ideal für Arbeitswege, Einkäufe und ausgedehnte Stadtrundfahrten.',
            'Der leise 250-W-Hinterradmotor von Ananda mit Drehmomentsensor liefert bis zu 40 Nm Drehmoment und unterstützt Sie sanft und natürlich bis 25 km/h. Der große herausnehmbare 36-V-22,5-Ah-Lithium-Ionen-Akku (21700) sorgt für eine Reichweite von bis zu 130–140 km mit Pedalunterstützung und ist mit dem 42V-3A-Ladegerät in ca. 6–8 Stunden vollständig geladen.',
            'Die hydraulischen Scheibenbremsen vorne und hinten sorgen für zuverlässige Verzögerung auch bei Regen, während die Shimano 7-Gang-Schaltung für Flexibilität in jeder Situation sorgt. Das LCD-Display mit Bluetooth und Smart-Connection-App, Front- und Rücklicht sowie die vordere Stoßdämpfergabel runden das Ausstattungspaket mit IPX6-Schutzklasse ab.'
        ],
        price: 1149,
        stripeCheckoutUrl: 'https://buy.stripe.com/bJeaEPeP1azv1jm6em3oA0J',
        folder: 'products/OT05Pro',
        coverImage: 'products/OT05Pro/Dunkelgrau/1.jpg',
        variants: [
            {
                id: 'Dunkelgrau',
                name: 'Dunkelgrau',
                folder: 'products/OT05Pro/Dunkelgrau',
                coverImage: 'products/OT05Pro/Dunkelgrau/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/bJeaEPeP1azv1jm6em3oA0J',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/OT05Pro/Dimensions.webp'
    },
    {
        id: 'OT12',
        brand: 'OneSport',
        category: ['city'],
        rangeKm: 65,
        motorW: 250,
        battery: '36V 13Ah',
        name: 'OneSport OT12 27,5 Zoll City-E-Bike',
        description: 'Komfortables 27,5-Zoll-Step-Through-City-E-Bike mit 250-W-Motor (44 Nm), integriertem 36-V-13-Ah-Akku und bis zu 65 km Reichweite – mit Shimano 7-Gang, mechanischen Scheibenbremsen und Front-Federgabel.',
        longDescription: [
            'Das OneSport OT12 ist ein urbanes Step-Through-City-E-Bike mit einsteigerfreundlicher Geometrie: Der tiefe Einstieg und die aufrechte Sitzposition machen das Auf- und Absteigen im Stadtverkehr besonders einfach. Mit 27,5-Zoll-Laufrädern, einer Front-Federgabel mit 85 mm Federweg und einem Gepäckträger für bis zu 25 kg ist es ideal für Pendler, Einkäufe und entspannte Alltagsfahrten.',
            'Der leise 250-W-Hinterradmotor mit 44 Nm Drehmoment unterstützt Sie angenehm und natürlich bis 25 km/h. Der sauber im Rahmen integrierte 36-V-13-Ah-Lithium-Ionen-Akku sorgt für eine Reichweite von bis zu 65 km und ist mit dem mitgelieferten 42-V-2-A-Ladegerät in ca. 6–8 Stunden vollständig geladen.',
            'Die Shimano 7-Gang-Schaltung macht das OT12 flexibel für unterschiedliche Strecken und Steigungen, während mechanische Scheibenbremsen vorne und hinten für zuverlässige Verzögerung sorgen. Das übersichtliche LCD-Display zeigt alle wichtigen Fahrdaten auf einen Blick, die IPX6-Schutzklasse macht das City-Bike zum wetterfesten Begleiter.'
        ],
        price: 729,
        stripeCheckoutUrl: 'https://buy.stripe.com/4gM6oz8qDePL3ruauC3oA06',
        folder: 'products/OT12',
        coverImage: 'products/OT12/images/Schwarz/1.jpg',
        variants: [
            {
                id: 'Schwarz',
                name: 'Schwarz',
                folder: 'products/OT12/images/Schwarz',
                coverImage: 'products/OT12/images/Schwarz/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/4gM6oz8qDePL3ruauC3oA06',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg'
                ]
            },
            {
                id: 'Weiß',
                name: 'Weiß',
                folder: 'products/OT12/images/Weiß',
                coverImage: 'products/OT12/images/Weiß/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/4gM6ozayL5fbbY0fOW3oA07',
                imageFiles: [
                    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg'
                ]
            }
        ],
        hasVideo: false,
        dimensionsImage: 'products/OT12/Dimensions.webp',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/OT12/extended/1.jpg'
                },
                {
                    align: 'right',
                    image: 'products/OT12/extended/DSCF3242.jpg',
                    title: 'Step-Through für einfachen Einstieg',
                    text: 'Der tiefe, durchstiegsfreundliche Rahmen macht das OT12 extrem zugänglich: Ob im Alltag, mit Einkäufen oder im Stadtverkehr – komfortables Auf- und Absteigen ohne Umstände.'
                },
                {
                    align: 'left',
                    image: 'products/OT12/extended/DSCF3577.jpg',
                    title: 'Sanfte Unterstützung bis 25 km/h',
                    text: 'Der 250-W-Hinterradmotor mit 44 Nm liefert eine ruhige, natürliche Unterstützung bis 25 km/h. In Kombination mit dem integrierten 36-V-13-Ah-Akku erreichen Sie so Reichweiten von bis zu 65 km.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des OneSport OT12?',
                    answer: 'Mit dem integrierten 36-V-13-Ah-Akku erreichen Sie im Pedalunterstützungsmodus eine Reichweite von bis zu 65 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das OneSport OT12 für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das OT12 als Elektrofahrrad EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der integrierte Akku ist mit dem mitgelieferten 42V-2A-Ladegerät in ca. 6–8 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das OneSport OT12 und wie viel kann es zuladen?',
                    answer: 'Das OT12 wiegt ca. 27,8 kg (netto) und kann mit bis zu 100 kg belastet werden. Der Gepäckträger trägt dabei zusätzlich bis zu 25 kg Gepäck.'
                },
                {
                    question: 'Welche Gangschaltung und Bremsen hat das OneSport OT12?',
                    answer: 'Das OT12 ist mit einer Shimano 7-Gang-Schaltung ausgestattet und hält mit mechanischen Scheibenbremsen vorne und hinten sicher an. Die Front-Federgabel mit 85 mm Federweg glättet den Weg auf unebenen Stadtstrecken.'
                },
                {
                    question: 'Welche Garantie gibt es auf das OneSport OT12?',
                    answer: 'Auf das OT12 erhalten Sie eine Herstellergarantie von 24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
    },
    {
        id: 'C29Lite',
        brand: 'Duotts',
        category: ['city'],
        rangeKm: 65,
        motorW: 250,
        battery: '36V 13Ah',
        name: 'Duotts C29Lite 27,5 Zoll City-E-Bike',
        description: 'Leichtes 27,5-Zoll-City-E-Bike mit 250-W-Motor (43 Nm), integriertem 36-V-13-Ah-Akku und bis zu 65 km Reichweite – mit Shimano 7-Gang-Schaltung, mechanischen Scheibenbremsen und Front-Federgabel.',
        longDescription: [
            'Das Duotts C29Lite ist ein wendiges 27,5-Zoll-City-E-Bike für den täglichen Weg zur Arbeit und durch die Stadt. Der Stahlrahmen, die Front-Federgabel mit 85 mm Federweg und die 27,5-Zoll-Reifen sorgen für eine stabile, komfortable Fahrt, während der Gepäckträger bis zu 25 kg Gepäck aufnimmt.',
            'Der 250-W-Bürstenlosmotor mit 43 Nm Drehmoment unterstützt Sie angenehm und kraftvoll bis 25 km/h. Der integrierte 36-V-13-Ah-Lithium-Ionen-Akku liefert im Pedal-Assist-Modus eine Reichweite von bis zu 65 km und ist mit dem 42-V-2-A-Ladegerät in ca. 6–8 Stunden vollständig geladen.',
            'Die Shimano 1x7-Gang-Schaltung und die mechanischen Scheibenbremsen (160 mm) vorne und hinten machen das C29Lite flexibel und sicher im Verkehr. Das integrierte Frontlicht und das Bremsrücklicht erhöhen die Sicherheit, ein Farbdisplay zeigt alle wichtigen Fahrdaten. Mit 27,8 kg Gewicht, bis zu 150 kg Zuladung und IPX4-Schutz ist es der ideale Begleiter für die Stadt.'
        ],
        price: 749,
        stripeCheckoutUrl: 'https://buy.stripe.com/REPLACE_C29Lite',
        folder: 'products/C29Lite',
        coverImage: 'products/C29Lite/images/1.jpg',
        imageFiles: [
            '1.jpg','2.jpg','4.jpg','9.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','47.jpg','48.jpg','49.jpg'
        ],
        hasVideo: false,
        dimensionsImage: 'products/C29Lite/Dimensions.webp',
        extendedContent: {
            sections: [
                {
                    type: 'fullwidth',
                    image: 'products/C29Lite/extended/1.jpg'
                },
                {
                    align: 'right',
                    image: 'products/C29Lite/extended/2.jpg',
                    title: 'Starker 250-W-Motor, sanfte Unterstützung',
                    text: 'Der hocheffiziente 36-V-250-W-Bürstenlosmotor liefert mit 43 Nm Drehmoment eine gleichmäßige und kraftvolle Unterstützung – für zügiges Anfahren und souveränes Klettern.'
                },
                {
                    align: 'left',
                    image: 'products/C29Lite/extended/3.jpg',
                    title: 'Smarte Tretunterstützung für die Stadt',
                    text: 'Das Pedal-Assist-System mit Speed-Sensor und 4 Stufen passt die Unterstützung präzise an Ihre Trittfrequenz an und erreicht bis zu 25 km/h – ideal für den Stadtverkehr nach EU-Norm.'
                },
                {
                    align: 'right',
                    image: 'products/C29Lite/extended/4.jpg',
                    title: 'Komfort durch Front-Federgabel',
                    text: 'Die vordere Federgabel mit 85 mm Federweg dämpft Unebenheiten und Schläge zuverlässig. Das erhöht den Komfort und reduziert die Ermüdung auf längeren Fahrten.'
                },
                {
                    align: 'left',
                    image: 'products/C29Lite/extended/5.jpg',
                    title: 'Sicheres mechanisches Bremssystem',
                    text: 'Mechanische Scheibenbremsen mit 160-mm-Rotoren vorne und hinten sorgen für eine starke und zuverlässige Verzögerung – auch auf längeren Bergabfahrten.'
                }
            ],
            faqs: [
                {
                    question: 'Wie hoch ist die Reichweite des Duotts C29Lite?',
                    answer: 'Im Pedal-Assist-Modus erreichen Sie mit dem 36-V-13-Ah-Akku eine Reichweite von bis zu 65 km. Die tatsächliche Reichweite hängt von Gewicht, Gelände, Temperatur und gewählter Unterstützungsstufe ab.'
                },
                {
                    question: 'Ist das Duotts C29Lite für den Straßenverkehr zugelassen?',
                    answer: 'Ja. Mit 250 W Nennleistung und maximal 25 km/h ist das C29Lite als Pedelec EU-zugelassen und darf auf öffentlichen Straßen gefahren werden. Bitte beachten Sie die lokalen Vorschriften zur Nutzung.'
                },
                {
                    question: 'Wie lange dauert das Aufladen des Akkus?',
                    answer: 'Der integrierte 36-V-13-Ah-Akku ist mit dem mitgelieferten 42-V-2-A-Ladegerät in ca. 6–8 Stunden vollständig geladen. Das integrierte Batteriemanagement (BMS) lädt den Akku dabei sicher und schonend.'
                },
                {
                    question: 'Wie schwer ist das C29Lite und wie viel kann es zuladen?',
                    answer: 'Das C29Lite wiegt 27,8 kg (netto) und kann mit bis zu 150 kg belastet werden. Der stabile Gepäckträger nimmt zusätzlich bis zu 25 kg Gepäck auf.'
                },
                {
                    question: 'Für welche Körpergröße ist das Duotts C29Lite geeignet?',
                    answer: 'Das C29Lite ist für Fahrer von ca. 170 bis 200 cm Körpergröße geeignet. Die Sitzhöhe lässt sich zwischen 80 cm und 100 cm einstellen.'
                },
                {
                    question: 'Welche Garantie gibt es auf das Duotts C29Lite?',
                    answer: 'Auf das C29Lite erhalten Sie eine Herstellergarantie von 24 Monaten. Details zu Umfang und Ablauf finden Sie auf unserer Garantieseite.'
                }
            ]
        }
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

function createPaymentMethodsMarkup() {
    return `
        <div class="detail-side-card payment-methods-card">
            <h3>Zahlungsmethoden</h3>
            <div class="payment-methods" aria-label="Verfügbare Zahlungsarten">
                <span class="payment-tile" title="Kreditkarte (Visa, Mastercard)" aria-label="Kreditkarte (Visa, Mastercard)"><img src="payment-logos/visa.svg" alt="Visa" class="payment-tile-img payment-tile-img--small"><img src="payment-logos/mastercard.svg" alt="Mastercard" class="payment-tile-img payment-tile-img--small"></span>
                <span class="payment-tile" title="Apple Pay"><img src="payment-logos/applepay.svg" alt="Apple Pay" class="payment-tile-img"></span>
                <span class="payment-tile" title="Link"><img src="payment-logos/link.svg" alt="Link" class="payment-tile-img"></span>
                <span class="payment-tile" title="Klarna"><img src="payment-logos/klarna.svg" alt="Klarna" class="payment-tile-img"></span>
                <span class="payment-tile" title="Amazon Pay"><img src="payment-logos/amazonpay.svg" alt="Amazon Pay" class="payment-tile-img"></span>
                <span class="payment-tile" title="Bancontact"><img src="payment-logos/bancontact.svg" alt="Bancontact" class="payment-tile-img"></span>
                <span class="payment-tile" title="MB WAY"><img src="payment-logos/mbway.svg" alt="MB WAY" class="payment-tile-img"></span>
                <span class="payment-tile" title="EPS"><img src="payment-logos/eps.svg" alt="EPS" class="payment-tile-img"></span>
                <span class="payment-tile" title="Satispay"><img src="payment-logos/satispay.svg" alt="Satispay" class="payment-tile-img"></span>
            </div>
        </div>
    `;
}

function createCheckoutButton(product, extraClass = '', variant = null, showPaymentMethods = false) {
    const checkoutUrl = getProductCheckoutUrl(product, variant);
    const outOfStock = product.outOfStock || variant?.outOfStock;
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
    const returnNote = '<p class="payment-return-note">14 Tage Rückgaberecht – Details finden Sie in unserer <a href="widerruf.html">Widerrufsbelehrung</a>.</p>';
    const paymentMethods = showPaymentMethods ? createPaymentMethodsMarkup() : '';
    const price = variant?.price ?? product.price;
    const priceTag = showPaymentMethods ? `<div class="checkout-price-tag">${formatPrice(price)}</div>` : '';
    const vatNote = showPaymentMethods ? '<p class="checkout-price-vat-note">Umsatzsteuerbefreit nach § 19 UStG.</p>' : '';
    return `<div class="checkout-action-group">${priceTag}<a href="${checkoutUrl}" class="${classes}" target="_blank" rel="noopener noreferrer">Jetzt kaufen</a>${vatNote}${returnNote}${paymentMethods}</div>`;
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
    city: { label: 'City / Urban', order: 2, heroImage: 'Categories/City-Urban.jpg' },
    folding: { label: 'Faltbar', order: 3, heroImage: 'Categories/Faltbar.jpg' },
    moto: { label: 'Moto-Style', order: 4, heroImage: 'Categories/Moto-Style.jpg' },
    scooter: { label: 'E-Scooter', order: 5 },
    wagon: { label: 'E-Wagon', order: 6, heroImage: 'Categories/E-Wagon.webp' }
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
    brand: 'all',
    sort: 'price-asc'
};

function getBatteryCapacityWh(battery) {
    if (!battery) return 0;
    const v = parseFloat(battery.match(/(\d+(?:\.\d+)?)\s*V/i)?.[1]);
    const ah = parseFloat(battery.match(/(\d+(?:\.\d+)?)\s*Ah/i)?.[1]);
    if (!v || !ah) return 0;
    return v * ah;
}

const SORT_OPTIONS = {
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    'range-desc': (a, b) => (b.rangeKm || 0) - (a.rangeKm || 0),
    'battery-desc': (a, b) => getBatteryCapacityWh(b.battery) - getBatteryCapacityWh(a.battery)
};

function getCatalogCategories() {
    const present = new Set();
    products.forEach(p => (p.category || []).forEach(c => present.add(c)));
    return Object.entries(CATEGORY_META)
        .filter(([id]) => present.has(id))
        .sort((a, b) => a[1].order - b[1].order)
        .map(([id, meta]) => ({ id, label: meta.label }));
}

function getBrands() {
    const brands = new Set();
    products.forEach(p => { if (p.brand) brands.add(p.brand); });
    return Array.from(brands).sort();
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

function updateChips() {
    document.querySelectorAll('#categoryCards .category-card').forEach(card => {
        const isActive = catalogState.category === card.dataset.filter;
        card.classList.toggle('active', isActive);
        card.setAttribute('aria-pressed', isActive);
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

function getBannerImagePaths(product) {
    const variant = product.variants?.length ? product.variants[0] : null;
    if (variant) {
        if (variant.imageFiles?.length) {
            return variant.imageFiles.map(filename => `${variant.folder}/${filename}`);
        }
        if (variant.coverImage) {
            return [variant.coverImage];
        }
    }
    if (product.imageFiles?.length) {
        return product.imageFiles.map(filename => `${product.folder}/images/${filename}`);
    }
    if (product.coverImage) {
        return [product.coverImage];
    }
    return [`${product.folder}/images/1.jpg`];
}

const IMAGE_FALLBACK = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EBild nicht verfügbar%3C/text%3E%3C/svg%3E";

function createProductCard(product) {
    const specGroups = getSpecGroups(product);
    const imagePaths = getBannerImagePaths(product);
    let currentIndex = 0;

    const banner = document.createElement('div');
    banner.className = 'product-banner';
    banner.dataset.productId = product.id;
    banner.setAttribute('role', 'button');
    banner.setAttribute('tabindex', '0');
    banner.setAttribute('aria-label', `${product.name} ansehen`);

    banner.addEventListener('click', (event) => {
        if (event.target.closest('.checkout-btn') ||
            event.target.closest('.banner-gallery-btn') ||
            event.target.closest('.banner-main-image') ||
            event.target.closest('.product-banner__details-link')) {
            return;
        }
        goToProduct(product.id);
    });

    banner.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goToProduct(product.id);
        }
    });

    const imgFallback = `onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'"`;

    const showNav = imagePaths.length > 1 ? `
        <button type="button" class="banner-gallery-btn banner-gallery-btn--prev" aria-hidden="true" tabindex="-1">&lsaquo;</button>
        <button type="button" class="banner-gallery-btn banner-gallery-btn--next" aria-hidden="true" tabindex="-1">&rsaquo;</button>
        <span class="banner-image-counter">1 / ${imagePaths.length}</span>` : '';

    let groupsHTML = '';
    specGroups.forEach(group => {
        let rowsHTML = '';
        Object.entries(group.rows).forEach(([key, value]) => {
            if (value === undefined || value === null || value === '') return;
            rowsHTML += `<div class="card-spec"><span class="spec-key">${key}:</span> <span class="spec-val">${value}</span></div>`;
        });
        groupsHTML += `
        <div class="spec-group">
            <h4 class="spec-group-title">${group.title}</h4>
            ${rowsHTML}
        </div>`;
    });

    banner.innerHTML = `
        <div class="product-banner__gallery">
            <img class="banner-main-image" src="${imagePaths[0] || ''}" alt="${product.name}" ${imgFallback}>
            ${showNav}
        </div>
        <div class="product-banner__info">
            <h3 class="product-banner__name">${product.name}</h3>
            <p class="product-banner__desc">${product.description}</p>
            <div class="product-banner__price">
                <span class="product-banner__price-amount">${formatPrice(product.price)}</span>
                <span class="product-card-vat-note">(MwSt-befreit)</span>
            </div>
            <p class="product-card-shipping-note">Kostenloser Versand</p>
            <div class="product-banner__actions">
                ${createCheckoutButton(product)}
            </div>
            <div class="product-banner__specs">
                ${groupsHTML}
            </div>
            <button type="button" class="product-banner__details-link">Mehr Details ansehen &rsaquo;</button>
        </div>
    `;

    const mainImage = banner.querySelector('.banner-main-image');
    const counterEl = banner.querySelector('.banner-image-counter');

    mainImage.addEventListener('click', (event) => {
        event.stopPropagation();
        openImageLightbox(imagePaths, currentIndex, product.name);
    });

    function showImage(index) {
        if (!imagePaths.length) return;
        currentIndex = (index + imagePaths.length) % imagePaths.length;
        mainImage.src = imagePaths[currentIndex];
        counterEl.textContent = `${currentIndex + 1} / ${imagePaths.length}`;
    }

    const prevBtn = banner.querySelector('.banner-gallery-btn--prev');
    const nextBtn = banner.querySelector('.banner-gallery-btn--next');
    if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    const buyButton = banner.querySelector('.checkout-btn');
    if (buyButton) {
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    const detailsLink = banner.querySelector('.product-banner__details-link');
    if (detailsLink) {
        detailsLink.addEventListener('click', (event) => {
            event.stopPropagation();
            goToProduct(product.id);
        });
    }

    return banner;
}

function openImageLightbox(imagePaths, startIndex, productName) {
    const existing = document.getElementById('homeImageLightbox');
    if (existing) existing.remove();

    const total = imagePaths.length;
    if (!total) return;
    let currentIndex = ((startIndex % total) + total) % total;

    const lightbox = document.createElement('div');
    lightbox.id = 'homeImageLightbox';
    lightbox.className = 'image-modal';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', `${productName} – Bildergalerie`);

    lightbox.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" data-lb-close aria-label="Schließen">✕</button>
            ${total > 1 ? '<button class="modal-nav-btn prev" data-lb-prev aria-label="Vorheriges Bild">❮</button>' : ''}
            <div class="modal-image-container">
                <img data-lb-image src="" alt="${productName} – Bild vergrößert">
                <div class="image-counter" data-lb-counter></div>
            </div>
            ${total > 1 ? '<button class="modal-nav-btn next" data-lb-next aria-label="Nächstes Bild">❯</button>' : ''}
            ${total > 1 ? '<div class="modal-thumbnails" data-lb-thumbnails></div>' : ''}
        </div>
    `;

    const img = lightbox.querySelector('[data-lb-image]');
    const counter = lightbox.querySelector('[data-lb-counter]');
    const thumbnailsEl = lightbox.querySelector('[data-lb-thumbnails]');

    if (thumbnailsEl) {
        imagePaths.forEach((path, index) => {
            const thumbDiv = document.createElement('div');
            thumbDiv.className = 'modal-thumbnail';
            thumbDiv.dataset.index = index;
            thumbDiv.innerHTML = `<img src="${path}" alt="${productName} – Bild ${index + 1}">`;
            thumbDiv.addEventListener('click', () => {
                currentIndex = index;
                render();
            });
            thumbnailsEl.appendChild(thumbDiv);
        });
    }

    function render() {
        img.src = imagePaths[currentIndex];
        img.onerror = () => {
            img.onerror = null;
            img.src = IMAGE_FALLBACK;
        };
        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${total}`;
        }
        if (thumbnailsEl) {
            thumbnailsEl.querySelectorAll('.modal-thumbnail').forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentIndex);
            });
        }
    }

    function closeLightbox() {
        lightbox.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKey);
    }

    function handleKey(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + total) % total;
            render();
        } else if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % total;
            render();
        }
    }

    lightbox.querySelector('[data-lb-close]').addEventListener('click', closeLightbox);

    const prevBtn = lightbox.querySelector('[data-lb-prev]');
    const nextBtn = lightbox.querySelector('[data-lb-next]');
    if (prevBtn) prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + total) % total;
        render();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % total;
        render();
    });

    // Klick außerhalb des Overlays schließt die Ansicht
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', handleKey);

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    render();
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
    const sortedProducts = [...visibleProducts].sort(
        SORT_OPTIONS[catalogState.sort] || SORT_OPTIONS['price-asc']
    );

    productsList.innerHTML = '';

    if (!sortedProducts.length) {
        showEmptyState(productsList);
        return;
    }

    sortedProducts.forEach(product => {
        productsList.appendChild(createProductCard(product));
    });
}

function setupCatalogFilters() {
    if (!document.getElementById('productsList')) return;

    buildCategoryCards();
    updateChips();

    const brandSelect = document.getElementById('brandSelect');
    if (brandSelect) {
        getBrands().forEach(brand => {
            const opt = document.createElement('option');
            opt.value = brand;
            opt.textContent = brand;
            brandSelect.appendChild(opt);
        });
        brandSelect.addEventListener('change', () => {
            catalogState.brand = brandSelect.value;
            loadProducts();
        });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            catalogState.sort = sortSelect.value;
            loadProducts();
        });
    }
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

    const cards = document.querySelectorAll('#productsList .product-banner');
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

// Zusätzliche technische Daten je Produkt
// Felder werden nur angezeigt, wenn sie für das jeweilige Bike vorhanden sind.
const EXTRA_SPECS = {
    D3S: {
        Bremsen: 'Scheibenbremsen vorn + hinten',
        Gewicht: '17 kg',
        Reifen: '14 Zoll',
        Ladezeit: '5–6 Std.'
    },
    A1FPro: {
        Bremsen: 'Scheibenbremsen vorn + hinten',
        Gewicht: '21,2 kg',
        Reifen: '16 Zoll',
        Ladezeit: '3–4 Std.'
    },
    C6: {
        Bremsen: 'Scheibenbremsen vorn + hinten',
        Gewicht: '27 kg',
        Reifen: '26 Zoll',
        Ladezeit: '6–8 Std.'
    },
    UX: {
        Bremsen: 'Doppelte Scheibenbremsen vorn + hinten',
        Gewicht: '25,8 kg',
        Reifen: '20 x 3,0 Zoll'
    },
    C9: {
        Bremsen: 'Hydraulische Scheibenbremsen',
        Gewicht: '30 kg',
        Reifen: '20 x 3,0 Zoll',
        Ladezeit: '7–8 Std.'
    },
    C2: {
        Bremsen: 'Scheibenbremsen vorn + hinten',
        Gewicht: '30,5 kg',
        Reifen: '16 x 2,5 Zoll',
        Ladezeit: '4–5 Std.'
    },
    SP1: {
        Bremsen: 'TR-160-mm-Scheibenbremsen',
        Gewicht: '14 kg',
        Reifen: '20 Zoll',
        Ladezeit: 'Ca. 3–4 Std.'
    },
    M20: {
        Bremsen: 'Dual-Actuated-Scheibenbremsen',
        Gewicht: '40 kg',
        Reifen: '20 x 4,0 Zoll',
        Ladezeit: '7–8 Std.'
    },
    T1: {
        Bremsen: 'Scheibenbremsen vorn + hinten',
        Gewicht: '22,5 kg',
        Reifen: '20 Zoll',
        Ladezeit: '5–6 Std.'
    },
    'OT16-2': {
        Bremsen: 'Mechanische Scheibenbremsen vorn + hinten',
        Gewicht: '30 kg',
        Reifen: '20 x 3,0 Zoll',
        Ladezeit: '8–10 Std.'
    },
    OT02: {
        Bremsen: 'V-Bremsen vorn + hinten',
        Gewicht: '14,5 kg',
        Reifen: '16 x 1,35 Zoll',
        Ladezeit: '2,5–3 Std.'
    },
    OT02Pro: {
        Bremsen: 'Mechanische Scheibenbremsen vorn + hinten',
        Gewicht: '17,18 kg',
        Reifen: '20 x 1,35 Zoll',
        Ladezeit: '2,5–3 Std.'
    },
    OT05: {
        Bremsen: 'Hydraulische Scheibenbremsen vorn + hinten',
        Gewicht: '28 kg',
        Reifen: '27,5 x 2,25 Zoll',
        Ladezeit: '8–10 Std.'
    },
    OT12: {
        Bremsen: 'Mechanische Scheibenbremsen vorn + hinten',
        Gewicht: '27,8 kg',
        Reifen: '27,5 x 2,25 Zoll',
        Ladezeit: '6–8 Std.'
    },
    C29Lite: {
        Bremsen: 'Mechanische Scheibenbremsen vorn + hinten',
        Gewicht: '27,8 kg',
        Reifen: '27,5 x 2,25 Zoll',
        Ladezeit: '6–8 Std.'
    },
    OT05: {
        Bremsen: 'Hydraulische Scheibenbremsen vorn + hinten',
        Gewicht: '28 kg',
        Reifen: '27,5 x 2,25 Zoll',
        Ladezeit: '8–10 Std.'
    }
};

// Spezifikationen als mehrere, nebeneinander liegende Tabellen
// Jede Produktkarte zeigt dieselben Felder – Felder ohne Daten werden weggelassen.
function getSpecGroups(product) {
    const extras = EXTRA_SPECS[product.id] || {};

    const akkuRows = {
        'Akku': product.battery,
        'Reichweite': `Bis ${product.rangeKm} km`
    };
    if (extras.Ladezeit) {
        akkuRows['Ladezeit'] = extras.Ladezeit;
    }

    const groups = [
        {
            title: 'Antrieb',
            rows: {
                'Motorleistung': `${product.motorW} W`,
                'Max. Geschwindigkeit': '25 km/h',
                'Bremsen': extras.Bremsen
            }
        },
        {
            title: 'Akku & Reichweite',
            rows: akkuRows
        },
        {
            title: 'Details',
            rows: {
                'Gewicht': extras.Gewicht,
                'Reifen': extras.Reifen
            }
        }
    ];

    return groups;
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
