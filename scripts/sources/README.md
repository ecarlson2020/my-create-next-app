# Supplied image sources

Drop hand-supplied images in this directory. `scripts/optimize-images.mjs` reads
them by exact filename, generates AVIF/WebP/JPEG variants into `public/images/`,
and records them in `src/config/imageManifest.json`.

```bash
node scripts/optimize-images.mjs            # everything (re-downloads client photos)
node scripts/optimize-images.mjs bg-404     # one key, merged into the manifest
```

Missing files are **skipped with a warning**, not treated as errors — the site
builds and deploys fine before these land, so add them as they arrive.

## Where AI-generated images may and may not be used

Planned by Peter sells real work to real couples, so the line is not negotiable:

- **Never** AI-generate anything that reads as portfolio work, a real wedding, a
  real couple, or a team member. Peter's own 46 photographs cover the gallery and
  every feature slot; nothing generated goes in `GALLERY` or `FEATURES`.
- AI is used **only** for textures, backgrounds, and abstract detail shots — the
  decorative furniture of the page.

A prospective bride seeing a generated wedding scene in the gallery is being shown
work the team did not do. Keep that boundary.

## Still needed from Peter

| What | Why |
|---|---|
| A high-resolution or vector logo | The header currently uses the wordmark set in type. `logo.png` / `logo.webp` are generated from the Wix PNG, which is low-resolution. |
| Photo credits per gallery image | Wedding photographers expect attribution and the current site omits it. The lightbox has room for a credit line. |
| The official "Best of the Beehive" badge files | The footer currently renders the award as a typographic mark because the badges were not exposed on the live site. |

## AI image prompts

Deliver **3:2 landscape unless noted**, ≥2000px wide, photographic and neutral.
Nothing should read as a specific identifiable wedding.

1. **`texture-linen.png`** — Extreme close-up of soft ivory linen tablecloth fabric, natural side light, shallow depth of field, subtle warm shadows in the folds, no objects, muted cream and oatmeal tones, editorial fine-art photography. *(4:3; used at low opacity as a section background)*

2. **`texture-paper.png`** — Flat overhead scan of handmade deckle-edge cotton paper in warm cream, faint fibers visible, very subtle texture, evenly lit, no shadows or objects. *(barely-visible page background overlay)*

3. **`texture-silk.png`** — Draped champagne-colored silk fabric filling the frame, gentle folds catching soft light, warm neutral tones, abstract, no objects or people. *(sits behind the footer)*

4. **`detail-candles.png`** — Moody close-up of a cluster of unlit ivory taper candles in brass holders against a dark warm-burgundy background, soft directional light, deep shadows, no people, luxury editorial styling.

5. **`detail-stationery.png`** — Overhead flat lay of blank cream letterpress wedding stationery: an unaddressed envelope, a blank card, a length of dusty-mauve silk ribbon, a sprig of dried eucalyptus, on warm neutral linen. Soft natural light. **No legible text anywhere in the image.**

6. **`detail-florals.png`** — Close-up of a neutral-toned floral arrangement in soft mauve, blush, cream and dried-sage tones, out-of-focus warm background, natural window light, romantic and restrained, no vase branding, no people.

7. **`detail-place-setting.png`** — Overhead close-up of a single elegant place setting: cream plate, brushed gold flatware, mauve linen napkin, a small place card with **no readable writing**, on neutral linen. Soft natural light, luxury minimal styling.

8. **`detail-rings-abstract.png`** — Macro of two plain gold wedding bands resting on soft cream fabric, very shallow depth of field, warm light, **no hands, no people**.

9. **`bg-mountain-dusk.png`** — Wide atmospheric Utah mountain landscape at dusk, soft haze, muted desaturated taupe / dusty rose / pale grey, no buildings, no people, no tents or event structures. Fine-art landscape photography, very quiet mood. *(16:9)*

10. **`bg-desert-dunes.png`** — Rolling sand dunes at golden hour under a clear sky, long soft shadows across the ridges, warm neutral sand tones, no footprints, no people, no structures. Central Utah desert. *(16:9)*

11. **`bg-404.png`** — A single empty vintage chiavari-style chair on a soft cream backdrop, gentle shadow, minimal and slightly melancholy, warm neutral tones, no people.

12. **`og-share.png`** — Soft cream and mauve draped fabric with a small out-of-focus candle flame, generous empty space in the upper-left third. Warm, luxurious, quiet. **No text in the image.** *(exactly 1200×630)*

### Palette to steer toward

```
CREAM     #FBF9F6      MAUVE     #8C6F6B
TAUPE     #EFE9E1      BURGUNDY  #3B1518
SAND      #CFC5B8      INK       #2A1C1D
```

### Where each one gets used

Once supplied, wire them in by adding the key to the relevant component — none are
referenced yet, so dropping the files in alone changes nothing until then:

- `texture-linen`, `texture-paper` — low-opacity backgrounds on `Section bg="muted"`.
- `texture-silk` — behind `Footer`.
- `detail-*` — accent images breaking up long text runs on `/process` and `/services`.
- `bg-desert-dunes` — an alternative header for the Little Sahara blog post.
- `bg-404` — the 404 page, which is currently type-only.
- `og-share` — replaces the cropped hero as the social card in `Seo`.
