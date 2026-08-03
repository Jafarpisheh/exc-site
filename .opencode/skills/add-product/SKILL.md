---
name: add-product
description: Add a new e-bike product to this exc-site storefront. Use when the user says "add the new product <Name>", "add product", "new bike", or drops new product images/specs into the products/ folder. Converts images to .jpg, resizes large ones, OCRs the specs image, then wires the product into app.js, product-detail.js and Pricelist.xlsx.
---

# Add a product to exc-site

Add a new e-bike to the catalog following the exact workflow below. Run through
these steps in order; do not skip the image step or the verification step.

## 1. Locate the product folder

The product data arrives as a folder under `products/<Name>/` containing:

- a `specs.JPG` image (technical specification sheet)
- one subfolder per color variant (e.g. `Blau`, `Schwarz`, `Grau`, `Reisweiß`)
- product photos inside each variant folder (mix of `.jpg`, `.avif`, `.webp`)
- possibly Windows `*.avif:Zone.Identifier` junk files

List it: `ls -laR products/<Name>/`

## 2. Convert images and reduce size

All product images must be `.jpg` (the site-wide convention) and none may exceed
1600px on the longest side. Remove `:Zone.Identifier` files. Use the project
venv's Pillow — do NOT convert by hand.

```bash
.venv/bin/python3 - <<'EOF'
from PIL import Image, ImageOps
import os

MAX_DIM = 1600
QUALITY = 82

roots = ['products/<Name>/<Variant1>', 'products/<Name>/<Variant2>']
for root in roots:
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

Notes:

- Keep the same base filename, only change the extension (e.g. `1.avif` -> `1.jpg`,
  `H<hash>.avif` -> `H<hash>.jpg`).
- This resizes large photos (e.g. 2500px / 6800px covers) down to <=1600px.
- After conversion verify no `.avif`/`.webp`/Zone files remain:
  `find products/<Name> -name "*.avif" -o -name "*Zone*" | wc -l` -> 0

## 3. Extract the specs via OCR

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
the end.

## 4. Add the product to app.js

Append a new object to the `products` array in `app.js` (before the closing
`];`). Follow the structure of the most recently added product. Key rules:

- `id`: camelCase, matching the folder name (e.g. folder `Polaris` -> id
  `Polaris`).
- `brand`: **include the brand by default.** Add a `brand` field and prefix
  `name` with it (e.g. `brand: 'Kingbull'`, `name: 'Kingbull Literider ...'`).
  Ask the user for the brand if it is not obvious. **Only** when the user
  explicitly says "no brand" (e.g. "this bike has no brand") should you omit
  the `brand` field and leave the brand out of the `name`.
- `category`: pick from `['mountain', 'city', 'folding', 'moto']` based on the
  specs (e.g. a folding bike -> `['folding']`).
- `rangeKm`, `motorW`, `battery` from the OCR specs.
- `name`, `description`, `longDescription` in German.
- `price`: the user-provided price.
- `stripeCheckoutUrl`: a **placeholder** unless a real link is given:
  `'https://buy.stripe.com/REPLACE_<ID>'`.
- `folder`: `'products/<Name>'`.
- `variants`: one object per color variant with `id`, `name`, `folder`,
  `coverImage` (`<folder>/1.jpg`), a per-variant placeholder
  `stripeCheckoutUrl` (`'https://buy.stripe.com/REPLACE_<ID>_<VARIANT>'`) and
  `imageFiles` — the list of converted `.jpg` files in that variant folder,
  sorted as they were in the folder.
- End with `hasVideo: false`.

## 5. Add the specs block to product-detail.js

In `product-detail.js`, `getBasicSpecs(product)`, add a new
`} else if (product.id === '<ID>') {` branch after the last product branch
(Smart30, Urban7, ...). Set the same keys used by sibling products:
`Modell`, `Typ`, `Reichweite`, `Motor`, `Akku`, `Max. Geschwindigkeit`,
`Schaltung`, `Ladezeit`, `Rahmen`, `Federung`, `Bremsen`, `Reifen`,
`Batterieposition`, plus any extras from the OCR (Display, Schalthebel,
Besonderheiten, Anwendung, ...).

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

If a previous product was renamed (e.g. Urbaun7 -> Urban7), also update any
stale row in the pricelist to match.

## 7. Verify

1. Syntax check both JS files:
   `node --check app.js && node --check product-detail.js`
2. Confirm the entry parsed correctly, has the expected `brand` (present unless
   the user explicitly said "no brand"), the right price, and every
   `imageFiles` entry exists on disk:

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
console.log('variants:', p.variants.map(v=>v.name));
console.log('stripe:', p.stripeCheckoutUrl);
let ok = true;
for (const v of p.variants) {
  for (const f of v.imageFiles) {
    if (!fs.existsSync(v.folder + '/' + f)) { console.log('MISSING:', v.folder + '/' + f); ok = false; }
  }
}
console.log('all imageFiles exist:', ok);
"
```

## Notes / hand-offs

- The specs are OCR-derived; tell the user to review the spec block (especially
  brake type and any garbled fields) once done.
- Stripe URLs are placeholders (`REPLACE_<ID>...`); remind the user to replace
  them with real checkout links before going live.
- The `brand` field is included by default and the `name` is prefixed with it
  (e.g. `brand: 'Duotts'`, `brand: 'Kingbull'`). Only omit it when the user
  explicitly says the bike has no brand.
