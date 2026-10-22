# Karelly (archived)

The `/k` page from the Next.js version of this site. It is kept here for reference and is not built, linted or
type-checked.

The last commit where it ran is `5ea6d3c` on `main`. To run it again, restore that commit or copy these files into a
Next.js app with:

- `react` 18 and `react-dom` 18
- `classnames`
- `react-snowfall`
- `sass`, for `Karelly.module.scss`
- `next/font/google` (Mulish), used in `k.tsx`
- `bg-snow1.jpg`, served at `/images/bg-snow1.jpg`

`k.tsx` imported the template through the `~templates` path alias, which pointed at `components/templates/`.
