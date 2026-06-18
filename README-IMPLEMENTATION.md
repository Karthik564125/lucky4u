# Lucky 4U — Implementation Notes

Short guide to review and publish the updated site copy and design artifacts.

1) Verify metrics
- Open `content/content-collection.csv` and populate verified numbers, quotes and hero image filenames.

2) Photography
- Replace placeholders with high-resolution in-market photography. Add images to `public/assets` and reference them from components.

3) Components added
- `src/components/UI/QuoteBlock.tsx`
- `src/components/UI/MetricTiles.tsx`
- `src/components/UI/LargePanel.tsx`

4) Mockup
- Static preview: `mockups/home-mockup.html` — open in browser to view layout concept.

5) Local run
```bash
npm install
npm run dev
```

6) Publishing checklist
- Confirm each metric is verified.
- Legal & PR sign-off on copy and founder quotes.
- Confirm photography licenses.

If you want, I can now wire the new components into the `Home.tsx` layout, add portrait images, or produce a high-fidelity Figma-ready export.
