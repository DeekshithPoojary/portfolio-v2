# Certificate images

All of these are wired up in `src/data/profile.js` under `certifications`.
Filenames are referenced there directly, so **renaming a file here means
updating that entry too**.

## Naming convention

| Prefix | Meaning |
|---|---|
| `ibm-*`    | IBM "In recognition of…" certificate (card cover) |
| `cc-*`     | Cognitive Class certificate (second tab in the viewer) |
| `badge-*`  | Square Credly badge (card thumbnail, and cover fallback) |
| `vtu-*`    | VTU Centre for Online Education certificate |

## Current files

| Credential | Cover | Second doc | Badge |
|---|---|---|---|
| Data Analysis with Python (DA0101EN)      | `ibm-data-analysis.png`          | `cc-data-analysis.png`      | `badge-data-analysis.png` |
| Data Visualization with Python (DV0101EN) | `ibm-data-visualization.png`     | `cc-data-visualization.png` | `badge-data-visualization.png` |
| Python 101 for Data Science (PY0101EN)    | `ibm-python-for-data-science.png`| `cc-python-101.png`         | `badge-python-for-data-science.png` |
| Applied Data Science with Python — L2     | `ibm-applied-data-science-l2.png`| —                           | `badge-applied-data-science-l2.png` |
| Data Analytics with Python (VTU Elite Gold)| `vtu-data-analytics.png`        | —                           | — |

## Adding another certificate

1. Drop the image in this folder.
2. Add an entry to `certifications` in `src/data/profile.js`:

```js
{
  title: 'Course name',
  id: 'CODE',
  issuer: 'Issuer',
  date: 'Mon YYYY',
  level: 'Foundational',
  note: 'One line about what it covered.',
  badge: '/certificates/badge-xyz.png',   // optional
  documents: [
    { label: 'Certificate', src: '/certificates/your-file.png' },
  ],
  verify: 'https://…',                    // optional
}
```

Cards degrade safely: certificate → badge → plain icon, so a missing or
mistyped filename never renders as a broken image.

## Tips

- Keep each file under ~400 KB. `vtu-data-analytics.png` is ~700 KB and is the
  one worth compressing.
- The Cognitive Class scans include the browser's print header/footer (date,
  page URL, `1/1`). Cropping those off would look tidier, but they're genuine
  and readable as-is.
