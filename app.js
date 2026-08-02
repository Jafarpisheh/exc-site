// Produktkatalog
const products = [
    {
        id: 'C29k',
        brand: 'Duotts',
        category: ['mountain'],
        rangeKm: 90,
        motorW: 500,
        battery: '48V 18Ah',
        name: 'Duotts C29 - K 750W Doppelbatterie',
        description: 'Robustes E-Mountainbike mit starker Reichweite und Gelände-Performance.',
        longDescription: [
            'Das Duotts C29 ist ein kraftvolles E-Mountainbike, das für anspruchsvolles Gelände und lange Touren entwickelt wurde. Mit seiner leistungsstarken Batterie erreichen Sie Reichweiten von bis zu 90 km und sind damit auch für ausgedehnte Ausflüge bestens gerüstet.',
            'Der starke 500-W-Motor meistert Steigungen mühelos und bringt Sie sicher und schnell ans Ziel. Das robuste Design, die hochwertige Federung und die zuverlässigen Bremsen sorgen für ein stabiles und komfortables Fahrgefühl – ob im Wald, auf Feldwegen oder in der Stadt.'
        ],
        price: 1199,
        stripeCheckoutUrl: 'https://buy.stripe.com/00w3cncGTfTPgegfOW3oA0g',
        folder: 'products/C29k',
        imageFiles: [
            '1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG','15.JPG','16.JPG','17.JPG','18.JPG','19.JPG','20.JPG','21.JPG','22.JPG','23.JPG','24.jpg','25.jpg','26.jpg','27.jpg'
        ],
        hasVideo: false
    },
    {
        id: 'C29Lite',
        brand: 'Duotts',
        category: ['city'],
        rangeKm: 65,
        motorW: 250,
        battery: '36V 13Ah',
        name: 'Duotts C29 Lite E-Bike 250W',
        description: 'Zuverlässiges und alltagstaugliches E-Bike mit 250-W-Motor, Shimano-7-Gang-Schaltung und komfortablen 27,5-Zoll-Reifen – ideal für Pendler und Freizeitfahrer.',
        longDescription: [
            'Das Duotts C29 Lite ist ein zuverlässiges und alltagstaugliches E-Bike, das speziell für Pendler und Freizeitfahrer entwickelt wurde. Mit seinem effizienten 250-W-Motor und der 36-V-13-Ah-Batterie erreichen Sie eine Reichweite von bis zu 65 km – ideal für den Weg zur Arbeit oder entspannte Ausflüge.',
            'Die Shimano-7-Gang-Schaltung, die mechanischen Scheibenbremsen vorne und hinten sowie die komfortablen 27,5 x 2,25 Zoll großen Reifen sorgen für ein stabiles und sicheres Fahrgefühl. Der robuste Stahlrahmen und das 3-Tasten-Multifunktions-Farbdisplay machen das C29 Lite zu einem einfachen und zuverlässigen Begleiter im Alltag.'
        ],
        price: 749,
        stripeCheckoutUrl: 'https://buy.stripe.com/28EbITbCPcHD4vyeKS3oA0c',
        folder: 'products/C29Lite',
        imageFiles: ['1.JPG','2.JPG','4.JPG','9.JPG','13.JPG','14.JPG','15.JPG','16.JPG','17.JPG','18.JPG','19.JPG','20.JPG','21.JPG','22.JPG','23.JPG','24.JPG','25.JPG','26.JPG','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','47.jpg','48.jpg','49.jpg'],
        hasVideo: false
    },
    {
        id: 'C29L',
        brand: 'Duotts',
        category: ['city'],
        rangeKm: 100,
        motorW: 750,
        battery: '48V 15Ah',
        name: 'Duotts C29L E-Bike 750W',
        description: 'Kräftiges E-Bike mit 750-W-Motor, Shimano-21-Gang-Schaltung und hydraulischen Scheibenbremsen – für lange Touren und den täglichen Einsatz.',
        longDescription: [
            'Das Duotts C29L ist ein kraftvolles E-Bike für alle, die hohe Leistung und Zuverlässigkeit schätzen. Der starke 750-W-Motor und die 48-V-15-Ah-Batterie mit hochwertigen 18650-Zellen ermöglichen Reichweiten von bis zu 100 km – perfekt für lange Touren und den täglichen Einsatz.',
            'Die Shimano-21-Gang-Schaltung, die hydraulischen Scheibenbremsen und der robuste Aluminiumrahmen sorgen für ein stabiles und komfortables Fahrerlebnis. Mit Gepäckträger, Rücklicht, Frontfederung und App-Anbindung ist das C29L ein vielseitiger Begleiter für jede Fahrt.'
        ],
        price: 859,
        stripeCheckoutUrl: 'https://buy.stripe.com/fZu14f0Yb8rne687iq3oA0d',
        folder: 'products/C29L',
        imageFiles: ['1.JPG','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg'],
        variants: [
            {
                id: 'standard',
                name: 'Standard',
                price: 859,
                folder: 'products/C29L/images',
                coverImage: 'products/C29L/images/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/fZu14f0Yb8rne687iq3oA0d',
                imageFiles: ['1.JPG','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg']
            },
            {
                id: 'doppelt-batterien',
                name: 'Doppelt-Batterien',
                price: 1049,
                folder: 'products/C29L/images/Doppelt-Batterien',
                coverImage: 'products/C29L/images/Doppelt-Batterien/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/dRmcMX36jazv4vyeKS3oA0e',
                imageFiles: ['1.JPG','../2.jpg','../3.jpg','../4.jpg','../5.jpg','../6.jpg','../7.jpg','../8.jpg','../9.jpg','../10.jpg','../11.jpg','../12.jpg','../13.jpg','../14.jpg','../15.jpg','../16.jpg','../17.jpg','../18.jpg','../19.jpg','../20.jpg','../21.jpg','../22.jpg','../23.jpg','../24.jpg','../25.jpg','../26.jpg','../27.jpg','../28.jpg'],
                specOverrides: {
                    'Akku': '2x 48V 15Ah (Dual-Batterie)'
                }
            }
        ],
        hasVideo: false
    },
    {
        id: 'OT01',
        brand: 'Onesport',
        category: ['folding'],
        rangeKm: 100,
        motorW: 650,
        battery: '48V 27Ah',
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
        brand: 'Onesport',
        category: ['city', 'folding'],
        rangeKm: 25,
        motorW: 250,
        battery: '36V 5,2Ah',
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
        brand: 'Onesport',
        category: ['city'],
        rangeKm: 100,
        motorW: 250,
        battery: '36V 13Ah',
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
        brand: 'Onesport',
        category: ['folding'],
        rangeKm: 120,
        motorW: 250,
        battery: '48V 17Ah',
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
    },
    {
        id: 'W77',
        brand: 'Onesport',
        category: ['moto'],
        rangeKm: 90,
        motorW: 500,
        battery: '48V 18Ah',
        name: 'Onesport W77 E-Bike im Moto-Style',
        description: 'Moto-Style E-Bike mit Fat-Tire-Reifen, starkem Motor und komfortabler Doppelfederung.',
        longDescription: [
            'Das Onesport W77 ist ein auffälliges E-Bike im Moto-Style mit markantem Retro-Design und breiten 20 x 4,0 Zoll Fat-Tire-Reifen. Der kraftvolle 250-W-Motor (Spitzenleistung 500 W) und die 48-V-18-Ah-Batterie bringen Sie mit einer Reichweite von bis zu 90 km sicher ans Ziel.',
            'Die hydraulischen Scheibenbremsen, die Doppelfederung und die Shimano-7-Gang-Schaltung sorgen für ein komfortables und sicheres Fahrerlebnis. Das 3,5-Zoll-LCD-Display mit Bluetooth-Funktion hält Sie dabei über alle wichtigen Fahrdaten auf dem Laufenden.'
        ],
        price: 999,
        folder: 'products/W77',
        imageFiles: [
            '1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg'
        ],
        stripeCheckoutUrl: 'https://buy.stripe.com/fZueV57mz9vr4vygT03oA0b',
        hasVideo: false
    },
    {
        id: 'OT08Pro',
        brand: 'Onesport',
        category: ['mountain', 'moto'],
        rangeKm: 190,
        motorW: 500,
        battery: '2x 48V 18Ah',
        name: 'Onesport OT08 Pro Full-Suspension E-Bike',
        description: 'Leistungsstarkes E-Bike mit Dual-Batterie-System, Vollfederung und Fat-Tire-Reifen – für Gelände und lange Touren.',
        longDescription: [
            'Das Onesport OT08 Pro ist ein kraftvolles Full-Suspension E-Bike im markanten Fat-Tire-Design. Das Dual-Batterie-System (2 x 48V 18Ah) ermöglicht Reichweiten von bis zu 190 km und macht das Bike zum idealen Begleiter für lange Touren und anspruchsvolles Gelände.',
            'Der starke 250-W-Motor (Spitzenleistung 500 W) liefert bis zu 65 N·m Drehmoment und meistert Steigungen von bis zu 30° mühelos. Die hydraulischen Scheibenbremsen, die Shimano-7-Gang-Schaltung und die Vollfederung sorgen für ein komfortables und sicheres Fahrerlebnis – ob in der Stadt, auf Trails oder im Gelände.'
        ],
        price: 1429,
        outOfStock: true,
        stripeCheckoutUrl: 'https://buy.stripe.com/REPLACE_OT08PRO',
        folder: 'products/OT08Pro',
        variants: [
            {
                id: 'dunkelgrau',
                name: 'Dunkelgrau',
                outOfStock: true,
                folder: 'products/OT08Pro/images/Dunkelgrau',
                coverImage: 'products/OT08Pro/images/Dunkelgrau/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/REPLACE_OT08PRO_DUNKELGRAU',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG','15.JPG','17.jpg','18.jpg','19.jpg','20.jpg','65465.JPG']
            },
            {
                id: 'weiss',
                name: 'Weiß',
                outOfStock: true,
                folder: 'products/OT08Pro/images/Weiß',
                coverImage: 'products/OT08Pro/images/Weiß/1.JPG',
                stripeCheckoutUrl: 'https://buy.stripe.com/REPLACE_OT08PRO_WEISS',
                imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg']
            }
        ],
        hasVideo: false
    },
    {
        id: 'F20',
        brand: 'Duotts',
        category: ['mountain', 'moto'],
        rangeKm: 140,
        motorW: 250,
        battery: '52V 27Ah',
        name: 'Duotts F20 Full-Suspension E-Bike im Retro-Style',
        description: 'Retro Full-Suspension E-Bike mit Fat-Tire-Reifen, 52-V-27-Ah-Akku und Reichweiten von bis zu 140 km.',
        longDescription: [
            'Das Duotts F20 ist ein auffälliges Full-Suspension E-Bike im Retro-Stil, das klassisches Design mit moderner E-Bike-Technologie verbindet. Der kraftvolle 52-V-Motor und die 52-V-27-Ah-Batterie mit hochwertigen Zellen ermöglichen Reichweiten von bis zu 140 km – ideal für lange Touren und anspruchsvolles Gelände.',
            'Die hydraulischen Scheibenbremsen, die Vollfederung und die breiten 20 x 4,0 Zoll Fat-Tire-Reifen sorgen für ein komfortables und sicheres Fahrerlebnis. Das 4,5-Zoll-HD-LCD-Display mit Bluetooth-Anbindung an die Duotts-App hält Sie dabei über alle wichtigen Fahrdaten auf dem Laufenden.'
        ],
        price: 1169,
        stripeCheckoutUrl: 'https://buy.stripe.com/28E3cnfT522Z5zCeKS3oA0f',
        folder: 'products/F20',
        imageFiles: ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.JPG','18.JPG','19.JPG','20.JPG'],
        hasVideo: false
    },
    {
        id: 'F26Lite',
        brand: 'Duotts',
        category: ['mountain', 'moto'],
        rangeKm: 90,
        motorW: 500,
        battery: '48V 18Ah',
        name: 'Duotts F26Lite Fat-Tire E-Bike 750W',
        description: 'Vielseitiges Fat-Tire E-Bike mit 500-W-Motor (750 W Peak), integriertem 48-V-18-Ah-Akku und 26 x 4,0 Zoll Reifen – für Stadt und Gelände.',
        longDescription: [
            'Das Duotts F26Lite ist ein vielseitiges Fat-Tire E-Bike, das urbane Pendelfahrten und Offroad-Abenteuer vereint. Der integrierte 48-V-18-Ah-Akku fügt sich nahtlos in den Aluminiumrahmen ein und ermöglicht mit dem 500-W-Hecknabenmotor (Spitzenleistung 750 W, 65 N·m) Reichweiten von bis zu 90 km mit Pedalunterstützung.',
            'Die breiten 26 x 4,0 Zoll Fat-Reifen, die hydraulischen Scheibenbremsen, die Frontfederung und die Shimano-7-Gang-Schaltung sorgen für Komfort und Sicherheit auf jedem Untergrund. Das LCD-Display mit Bluetooth-Anbindung an die Duotts-App, integrierte Lichter und der praktische Gepäckträger machen das F26Lite zum idealen Begleiter für jeden Tag.'
        ],
        price: 1149,
        stripeCheckoutUrl: 'https://buy.stripe.com/28EcMX4an4b74vy9qy3oA0i',
        folder: 'products/F26Lite',
        variants: [
            {
                id: 'schwarz',
                name: 'Schwarz',
                price: 1149,
                folder: 'products/F26Lite/images/Schwarz',
                coverImage: 'products/F26Lite/images/Schwarz/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/28EcMX4an4b74vy9qy3oA0i',
                imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg']
            },
            {
                id: 'silber',
                name: 'Silber',
                price: 1149,
                folder: 'products/F26Lite/images/Silber',
                coverImage: 'products/F26Lite/images/Silber/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/14A00bbCP3732nqdGO3oA0h',
                imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
            }
        ],
        hasVideo: false
    },
    {
        id: 'N26',
        brand: 'Duotts',
        category: ['mountain', 'moto'],
        rangeKm: 120,
        motorW: 500,
        battery: '48V 20Ah',
        name: 'Duotts N26 Dual-Motor E-Bike',
        description: 'Leistungsstarkes Dual-Motor E-Bike mit Vollfederung, Fat-Tire-Reifen und 48-V-20-Ah-Akku – für maximale Traktion und Reichweiten von bis zu 120 km.',
        longDescription: [
            'Das Duotts N26 ist ein kraftvolles E-Bike mit Dual-Motor-Antrieb (Vorder- und Hinterrad), das maximale Traktion und Durchsetzungskraft auf jedem Untergrund bietet. Mit dem 48-V-20-Ah-Akku mit Samsung-Zellen erreichen Sie Reichweiten von bis zu 120 km mit Pedalunterstützung – ideal für lange Touren und anspruchsvolles Gelände.',
            'Die Vollfederung, die hydraulischen Scheibenbremsen, die breiten 26 x 4,0 Zoll Fat-Tire-Reifen und die Shimano-7-Gang-Schaltung sorgen für ein komfortables und sicheres Fahrerlebnis. Das 4,5-Zoll-HD-LCD-Display mit Bluetooth-Anbindung an die Duotts-App und die Wahl zwischen Single- und Dual-Drive-Modus machen das N26 zum vielseitigen Begleiter für Stadt und Offroad.'
        ],
        price: 1299,
        stripeCheckoutUrl: 'https://buy.stripe.com/3cI3cnayL5fb7HK8mu3oA0k',
        folder: 'products/N26',
        coverImage: 'products/N26/images/Weiss-Blau/1.jpg',
        variants: [
            {
                id: 'rot',
                name: 'Rot',
                price: 1299,
                folder: 'products/N26/images/Rot',
                coverImage: 'products/N26/images/Rot/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/3cI3cnayL5fb7HK8mu3oA0k',
                imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
            },
            {
                id: 'weiss-blau',
                name: 'Weiß-Blau',
                price: 1299,
                folder: 'products/N26/images/Weiss-Blau',
                coverImage: 'products/N26/images/Weiss-Blau/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/cNiaEPfT5bDzfacgT03oA0j',
                imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
            }
        ],
        hasVideo: false
    },
    {
        id: 'S26Pro',
        brand: 'Duotts',
        category: ['mountain', 'moto'],
        rangeKm: 120,
        motorW: 1500,
        battery: '48V 20Ah',
        name: 'Duotts S26 Pro Dual-Motor E-Bike',
        description: 'Leistungsstarkes Dual-Motor E-Bike mit Vollfederung, Fat-Tire-Reifen und 48-V-20-Ah-Samsung-Akku – für maximale Traktion und Reichweiten von bis zu 120 km.',
        longDescription: [
            'Das Duotts S26 Pro ist ein kraftvolles E-Bike mit Dual-Motor-Antrieb (2x 750 W, 1500 W im Dual-Drive-Modus), das maximale Traktion und Durchsetzungskraft auf jedem Untergrund bietet. Der 48-V-20-Ah-Akku mit Samsung-Lithium-Zellen ermöglicht Reichweiten von bis zu 120 km mit Pedalunterstützung – ideal für lange Touren und anspruchsvolles Gelände.',
            'Die Vollfederung, die hydraulischen Scheibenbremsen, die breiten 26 x 4,0 Zoll Fat-Tire-Reifen und die Shimano-7-Gang-Schaltung sorgen für ein komfortables und sicheres Fahrerlebnis. Das Display mit Bluetooth-Anbindung an die Duotts-App und die Wahl zwischen Single- und Dual-Drive-Modus machen das S26 Pro zum vielseitigen Begleiter für Stadt und Offroad.'
        ],
        price: 1299,
        stripeCheckoutUrl: 'https://buy.stripe.com/3cI8wH6iv0YVgegdGO3oA0l',
        folder: 'products/S26Pro',
        coverImage: 'products/S26Pro/images/1.jpg',
        imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'],
        hasVideo: false
    },
    {
        id: 'E26',
        brand: 'Duotts',
        category: ['mountain'],
        rangeKm: 120,
        motorW: 750,
        battery: '48V 20Ah',
        name: 'Duotts E26 E-Mountainbike',
        description: 'Kraftvolles E-Mountainbike mit 750-W-Motor, starkem 48-V-20-Ah-Akku und Reichweiten von bis zu 120 km – für anspruchsvolles Gelände und lange Touren.',
        longDescription: [
            'Das Duotts E26 ist ein robustes E-Mountainbike, das für anspruchsvolles Gelände und lange Touren entwickelt wurde. Der Bafang-Motor mit 750 W und 80 N·m Drehmoment meistert Steigungen von bis zu 30° mühelos, während der Samsung-Lithium-Akku mit 48 V und 20 Ah Reichweiten von bis zu 120 km ermöglicht.',
            'Die DNM-Luftfederung vorne und hinten, die TEKTRO-4-Kolben-Hydraulikbremsen und die breiten 26 x 4,0 Zoll Fat-Tire-Reifen sorgen für ein komfortables und sicheres Fahrgefühl – ob auf Trails, Feldwegen oder in der Stadt. Der zentrale Drehmomentsensor liefert ein natürliches Fahrgefühl, und die Smart-Connection-App hält Sie über alle wichtigen Fahrdaten auf dem Laufenden.'
        ],
        price: 1999,
        stripeCheckoutUrl: 'https://buy.stripe.com/8x2dR18qD8rn8LO0U23oA0m',
        folder: 'products/E26',
        coverImage: 'products/E26/images/Blau/1.jpg',
        variants: [
            {
                id: 'blau',
                name: 'Blau',
                price: 1999,
                folder: 'products/E26/images/Blau',
                coverImage: 'products/E26/images/Blau/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/8x2dR18qD8rn8LO0U23oA0m',
                imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
            },
            {
                id: 'gruen',
                name: 'Grün',
                price: 1999,
                folder: 'products/E26/images/Grün',
                coverImage: 'products/E26/images/Grün/1.jpg',
                stripeCheckoutUrl: 'https://buy.stripe.com/eVq8wHayL4b70fi5ai3oA0n',
                imageFiles: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg']
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
    const outOfStock = variant ? variant.outOfStock : product.outOfStock;
    if (outOfStock) {
        const classes = ['out-of-stock-badge', extraClass].filter(Boolean).join(' ');
        return `<span class="${classes}">Ausverkauft</span>`;
    }
    if (!checkoutUrl) {
        return '';
    }

    const classes = ['checkout-btn', extraClass].filter(Boolean).join(' ');
    return `<a href="${checkoutUrl}" class="${classes}" target="_blank" rel="noopener noreferrer">Jetzt kaufen</a>`;
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
    mountain: { label: 'E-Mountainbike', order: 1, heroImage: 'products/OT08Pro/images/Weiß/19.jpg' },
    city: { label: 'City / Urban', order: 2, heroImage: 'products/C29L/images/28.jpg' },
    folding: { label: 'Faltbar', order: 3, heroImage: 'products/OT02/images/Grün/22.jpg' },
    moto: { label: 'Moto-Style', order: 4, heroImage: 'products/OT08Pro/images/Weiß/16.jpg' }
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
    emptyState.innerHTML = '<p>Keine E-Bikes gefunden. Bitte passen Sie Ihre Filter an.</p>';
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
