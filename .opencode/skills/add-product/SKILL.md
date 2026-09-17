---
name: add-product
description: Add a new e-bike product to this exc-site storefront. Use when the user says "add the new product <Name>", "add product", "new bike", or drops new product images/specs into the products/ folder. Converts images to .jpg, resizes large ones, OCRs the specs image, then wires the product into app.js, product-detail.js and Pricelist.xlsx — including the Highlights, Dimensions and FAQ tabs built for D3S.
---

# Add a product to exc-site

Add a new e-bike to the catalog following the exact workflow below. Run through
these steps in order; do not skip the image step or the verification step.

The reference implementation for the page structure is the **D3S** product
(`products/D3S/`). Build new products the same way: a `Highlights` tab (extended
marketing content), a `Dimensions` tab (geometry diagram), a `Häufige Fragen`
tab (FAQ accordion) and `Technische Daten`. **If a product has no `extended/`
or `Dimensions/` sub-folder, skip that part** — `product-detail.js` auto-hides
those tabs when the corresponding data is missing.

## 1. Locate the product folder

The product data arrives as a folder under `products/<Name>/` containing some
or all of:

- an `images/` sub-folder with the product photos (`.jpg`, `.avif`, `.webp`)
- an `extended/` sub-folder with marketing/detail images for the **Highlights**
  tab (optional — skip Highlights if absent)
- a `Dimensions/` sub-folder with the geometry/dimensions diagram image
  (optional — skip Dimensions if absent)
- a `specs.JPG` image (technical specification sheet, optional)
- OR one sub-folder per color variant (e.g. `Blau`, `Schwarz`, `Grau`,
  `Reisweiß`) containing that variant's photos instead of a flat `images/`
- possibly Windows `*.avif:Zone.Identifier` junk files

List it: `ls -laR products/<Name>/`

## 2. Convert images and reduce size

All **product photos** must be `.jpg` (site-wide convention) and none may exceed
1600px on the longest side. Remove `:Zone.Identifier` files. Use the project
venv's Pillow — do NOT convert by hand.

For the photos (`images/`, or each variant folder):

```bash
.venv/bin/python3 - <<'EOF'
from PIL import Image, ImageOps
import os

MAX_DIM = 1600
QUALITY = 82

roots = ['products/<Name>/images']      # or the variant folders instead
for root in roots:
    if not os.path.isdir(root):
        continue
    for f in sorted(os.listdir(root)):
        p = os.path.join(root, f)
        if f.endswith(':Zone.Identifier'):
            os.remove(p)
            print('removed zone:', f)
            continue
        if not f.lower().endswith(('.avif', '.webp', '.jpg', '.jpeg')):
            continue
        base = os.path.splitext(f)[0]
        im = Image.open(p)
        im = ImageOps.exif_transpose(im)
        w, h = im.size
        if max(w, h) <= MAX_DIM and not f.lower().endswith(('.avif', '.webp')):
            continue
        if im.mode not in ('RGB', 'L'):
            im = im.convert('RGB')
        im.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)
        dst = os.path.join(root, base + '.jpg')
        old = os.path.getsize(p)
        im.save(dst, 'JPEG', quality=QUALITY, optimize=True)
        new = os.path.getsize(dst)
        if dst != p:
            os.remove(p)
        print(f'{f} -> {base}.jpg {im.size} {old} -> {new}')
print('done')
EOF
```

For the **optional** `extended/` and `Dimensions/` folders keep their original
format (webp is fine) but still cap at 1600px on the longest side:

```bash
.venv/bin/python3 - <<'EOF'
from PIL import Image, ImageOps
import os

MAX_DIM = 1600
for root in ['products/<Name>/extended', 'products/<Name>/Dimensions']:
    if not os.path.isdir(root):
        continue
    for f in sorted(os.listdir(root)):
        p = os.path.join(root, f)
        if not f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            continue
        im = Image.open(p)
        im = ImageOps.exif_transpose(im)
        if max(im.size) <= MAX_DIM:
            continue
        im.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)
        im.save(p, optimize=True)
        print('resized', f, im.size)
print('done')
EOF
```

Notes:

- Keep the same base filename, only change the extension for photos
  (e.g. `1.avif` -> `1.jpg`, `H<hash>.avif` -> `H<hash>.jpg`).
- After conversion verify no `.avif`/`.webp`/Zone files remain in the photo
  folders: `find products/<Name> -name "*.avif" -o -name "*Zone*" | wc -l` -> 0

## 3. Extract the specs via OCR (only if a specs.JPG is present)

The model cannot read `specs.JPG` directly. OCR it with the project venv's
`rapidocr-onnxruntime`:

```bash
.venv/bin/python3 -c "
from rapidocr_onnxruntime import RapidOCR
ocr = RapidOCR()
result, elapse = ocr('products/<Name>/specs.JPG')
for line in result:
    print(line[1])
"
```

The output is machine-translated Chinese-to-German and may be garbled or
duplicated. Translate/correct it into clean German spec keys. If the image
contains contradictory values (e.g. both "Hydraulische" and "Mechanische"
Scheibenbremse), pick the primary field and flag the ambiguity to the user at
the end. When no `specs.JPG` exists, take the specs from the user's description
and follow the shape of the D3S spec block.

## 4. Add the product to app.js

Append a new object to the `products` array in `app.js` (before the closing
`];`). The structure **must match the D3S product** (single product, no
variants when the folder has a flat `images/` layout):

```js
{
    id: '<ID>',                       // matching the folder name
    brand: '<BRAND>',                 // see brand rules below
    category: ['folding'],            // ['mountain','city','folding','moto']
    rangeKm: <range>,
    motorW: <motor>,
    battery: '<36V 10Ah>',
    name: '<Brand> <Name> …',
    description: '…',                 // 1–2 German sentences
    longDescription: ['…', '…', '…'], // 3 German paragraphs
    price: <price>,
    stripeCheckoutUrl: 'https://buy.stripe.com/REPLACE_<ID>',
    folder: 'products/<Name>',
    coverImage: 'products/<Name>/images/1.jpg',
    imageFiles: ['1.jpg', '2.jpg', …],        // converted .jpg files in images/
    hasVideo: false,
    // Only if products/<Name>/Dimensions/ exists:
    dimensionsImage: 'products/<Name>/Dimensions/<file>',
    // Only if products/<Name>/extended/ exists:
    extendedContent: {
        sections: [
            // first image: full-width banner, no text
            { type: 'fullwidth', image: 'products/<Name>/extended/1.webp' },
            // remaining images alternate text/image position left/right
            { align: 'right', image: 'products/<Name>/extended/2.webp', title: '…', text: '…' },
            { align: 'left',  image: 'products/<Name>/extended/3.webp', title: '…', text: '…' },
            { align: 'right', image: 'products/<Name>/extended/4.webp', title: '…', text: '…' }
        ],
        faqs: [
            { question: '…', answer: '…' },
            // 3–6 German Q&As covering range, street legality, charge time,
            // weight/load, warranty, folding/transport
        ]
    }
}
```

Key rules:

- `id`: matching the folder name (e.g. folder `Polaris` -> id `Polaris`).
- `brand`: **include the brand by default.** Add a `brand` field and prefix
  `name` with it (e.g. `brand: 'Kingbull'`, `name: 'Kingbull Literider ...'`).
  Ask the user for the brand if it is not obvious. **Only** when the user
  explicitly says "no brand" (e.g. "this bike has no brand") should you omit
  the `brand` field and leave the brand out of the `name`.
- `category`: pick from `['mountain', 'city', 'folding', 'moto']` based on the
  specs (e.g. a folding bike -> `['folding']`).
- `rangeKm`, `motorW`, `battery` from the specs.
- `price`: the user-provided price.
- `stripeCheckoutUrl`: a **placeholder** unless a real link is given:
  `'https://buy.stripe.com/REPLACE_<ID>'`.
- `imageFiles`: the list of converted photo files in `images/` (natural order).
- **`extendedContent`**: add it only when `extended/` exists. Write 1 full-width
  banner section plus the remaining images alternating `align: 'right'` /
  `align: 'left'`, each with a German marketing title and 1–2 sentences,
  mirroring D3S (motor power, battery/range, tires, brakes, folding, lights,
  display, …). The `faqs` go under `extendedContent.faqs` even though they are
  rendered on their own "Häufige Fragen" tab.
- **`dimensionsImage`**: add it only when `Dimensions/` exists, pointing at the
  diagram file.
- **Skipping**: if `extended/` or `Dimensions/` does not exist, **omit** that
  field entirely — the product page will automatically hide the respective tab.
- Variant products: if the folder instead contains one subfolder per color
  variant, keep the per-variant structure (one object per variant with `id`,
  `name`, `folder`, `coverImage`, placeholder `stripeCheckoutUrl` and
  `imageFiles`) as used by the other variant products.
- End with `hasVideo: false`.

### 4a. Update EXTRA_SPECS in app.js (main-page card data)

Do **not** forget this — the missing `EXTRA_SPECS` entry makes the main-page
product card (index.html) blank out Bremsen, Gewicht, Reifen and Ladezeit in
its "Antrieb" / "Akku & Reichweite" / "Details" groups.

In `app.js`, the `EXTRA_SPECS` map (right after the `products` array, around
`app.js:1651`) maps each product `id` to the exactly four German keys that
`getSpecGroups(product)` reads for the card:

- `Bremsen` — e.g. 'Hydraulische Scheibenbremsen vorn + hinten'
- `Gewicht` — e.g. '28 kg'
- `Reifen` — e.g. '27,5 x 2,25 Zoll'
- `Ladezeit` — e.g. '8–10 Std.'

Add a new entry for the product, derived from the same spec data used in
Step 5 (never invent values):

```js
    OT05: {   // <--- product id, matching the folder/id
        Bremsen: 'Hydraulische Scheibenbremsen vorn + hinten',
        Gewicht: '28 kg',
        Reifen: '27,5 x 2,25 Zoll',
        Ladezeit: '8–10 Std.'
    }
```

If a field is genuinely absent from the specs, omit that key rather than making
up a value — `getSpecGroups` skips undefined entries.

## 5. Add the specs block to product-detail.js

The `Technische Daten` tab groups specs into sections (Allgemein, Antrieb,
Laden, Fahrwerk, Ausstattung, Maße & Gewicht). The grouping is automatic: the
`SPEC_CATEGORIES` map in `product-detail.js` assigns each spec **key** to a
category, so the spec key you write determines which section the row lands in.

In `product-detail.js`, `getBasicSpecs(product)`, add a new
`} else if (product.id === '<ID>') {` branch after the last product branch.
**Never make up data**: only set a key when its value actually came from the
specs sheet (OCR) or the user's description. Do not invent values to fill out
sections, and do not add a key that the sheet doesn't cover — an empty section
or a missing row is fine.

Use only the exact German keys below (they are what `SPEC_CATEGORIES`
recognizes); write rows grouped per category, mirroring the D3S branch at
product-detail.js:630:

- **Allgemein**: `Modell`, `Typ`, `Preis`, `Status`, `Verfügbarkeit`
- **Antrieb**: `Reichweite`, `Motor`, `Akku`, `Max. Geschwindigkeit`
- **Laden**: `Ladezeit`, `Ladegerät`
- **Fahrwerk**: `Rahmen`, `Bremsen`, `Reifen`
- **Ausstattung**: `Display`, `Beleuchtung`, `Wasserdicht`
- **Maße & Gewicht**: `Gewicht`, `Zuladung`, `Abmessungen (L x B x H)`, `Faltmaße`

Only include a key when it applies to the product (e.g. omit `Faltmaße` when the
bike is not folding). The base block already supplies `Preis`, `Status` and
`Verfügbarkeit`; do not duplicate them in the branch.

If the OCR reveals a spec field that is **not** listed above (e.g.
`Gangschaltung`, `Federung`, `Frontesprit`…), add it to `SPEC_CATEGORIES` under
the most fitting existing section heading, **using only the value the OCR/user
provided**. Do not invent a category or a value. A genuinely uncategorizable
field can be left unassigned — `loadProductSpecs` renders leftover keys in a
fallback group at the bottom, so it still shows up.

## 6. Update Pricelist.xlsx

Add a `Model | Price` row via the project venv:

```bash
.venv/bin/python3 - <<'EOF'
import openpyxl
wb = openpyxl.load_workbook('products/Pricelist.xlsx')
ws = wb['Sheet1']
rows = list(ws.iter_rows(values_only=True))
if not any(r and r[0] == '<Name>' for r in rows):
    ws.append(('<Name>', <price>))
wb.save('products/Pricelist.xlsx')
print([r for r in ws.iter_rows(values_only=True) if r and r[0] == '<Name>'])
EOF
```

## 7. Verify

1. Syntax check both JS files:
   `node --check app.js && node --check product-detail.js`
2. Confirm the entry parsed correctly and has the expected `brand` (present
   unless the user explicitly said "no brand"), the right price, every
   `imageFiles` entry exists on disk, and that `extendedContent` /
   `dimensionsImage` are present exactly when the `extended/` / `Dimensions/`
   sub-folders exist:

```bash
node -e "
const fs = require('fs');
let src = fs.readFileSync('app.js','utf8');
const start = src.indexOf('const products = [');
const end = src.indexOf('];', start);
let products;
eval('products = ' + src.slice(start + 'const products = '.length, end + 2));
const p = products.find(x=>x.id==='<ID>');
console.log('found:', !!p);
console.log('brand:', p.brand, '| price:', p.price, '| category:', JSON.stringify(p.category));
console.log('dimensionsImage:', p.dimensionsImage, '| folder exists:', fs.existsSync('products/<ID>/Dimensions'));
console.log('extendedContent:', !!p.extendedContent, '| folder exists:', fs.existsSync('products/<ID>/extended'));
let ok = true;
for (const f of p.imageFiles || []) {
  if (!fs.existsSync('products/' + p.id + '/images/' + f)) { console.log('MISSING:', 'products/' + p.id + '/images/' + f); ok = false; }
}
console.log('all imageFiles exist:', ok);
"
```

3. For variant products, check each variant's `imageFiles` instead of
   `images/`, as documented for earlier products.

4. Confirm the product has an `EXTRA_SPECS` entry in `app.js` (the main-page
   card reads Bremsen/Gewicht/Reifen/Ladezeit from it — a missing entry
   silently blanks those fields on the card):

```bash
node -e "
const fs = require('fs');
let src = fs.readFileSync('app.js','utf8');
const m = src.match(/const EXTRA_SPECS = (\{[\s\S]*?\});\n\n/);
let extra;
eval('extra = ' + src.slice(src.indexOf('const EXTRA_SPECS') + 'const EXTRA_SPECS = '.length, src.indexOf('};', src.indexOf('const EXTRA_SPECS')) + 2));
const s = extra['<ID>'] || {};
console.log('EXTRA_SPECS <ID>:', !!extra['<ID>']);
console.log('Bremsen:', s.Bremsen, '| Gewicht:', s.Gewicht, '| Reifen:', s.Reifen, '| Ladezeit:', s.Ladezeit);
"
```

## Notes / hand-offs

- The specs are OCR-derived (or user-provided); tell the user to review the spec
  block (especially brake type and any garbled fields) once done.
- The `Technische Daten` tab groups specs into sections via `SPEC_CATEGORIES`
  in `product-detail.js`. Categorization is driven entirely by the spec keys, so
  use the exact German keys from Step 5. Specs are never invented — only the
  fields actually present in the OCR/user input are added and categorized.
- Stripe URLs are placeholders (`REPLACE_<ID>...`); remind the user to replace
  them with real checkout links before going live.
- The `brand` field is included by default and the `name` is prefixed with it
  (e.g. `brand: 'Duotts'`, `brand: 'Kingbull'`). Only omit it when the user
  explicitly says the bike has no brand.
- `product-detail.js` renders the Highlights, Dimensions and FAQ tabs only when
  the matching data exists (D3S-style). Products without `extended/` or
  `Dimensions/` folders simply lose those tabs; `Technische Daten` becomes the
  default tab. No other code changes are needed.