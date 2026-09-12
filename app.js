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
        <div class="payment-methods" aria-label="Verfügbare Zahlungsarten über Stripe">
            <span class="payment-logo payment-logo--visa" aria-label="Visa">VISA</span>
            <span class="payment-logo payment-logo--mastercard" aria-label="Mastercard"><span></span><span></span><b>mastercard</b></span>
            <span class="payment-logo payment-logo--amex" aria-label="American Express">AMEX</span>
            <span class="payment-logo payment-logo--apple" aria-label="Apple Pay">Apple Pay</span>
            <span class="payment-logo payment-logo--google" aria-label="Google Pay">G Pay</span>
            <span class="payment-logo payment-logo--klarna" aria-label="Klarna">Klarna.</span>
            <span class="payment-logo payment-logo--sepa" aria-label="SEPA-Lastschrift">SEPA</span>
        </div>
    `;
}

function createCheckoutButton(product, extraClass = '', variant = null, showPaymentMethods = false) {
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
    const paymentMethods = showPaymentMethods ? createPaymentMethodsMarkup() : '';
    return `<div class="checkout-action-group"><a href="${checkoutUrl}" class="${classes}" target="_blank" rel="noopener noreferrer">Jetzt kaufen</a>${paymentMethods}</div>`;
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
    city: { label: 'City / Urban', order: 2, heroImage: 'products/C6/White/1.jpg' },
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
    category: 'all'
};

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
