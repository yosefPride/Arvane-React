/**
 * Resolves menu image filenames to bundled asset URLs.
 * Images must be imported (not referenced by string path) so Vite includes
 * them in the production build.
 */
const modules = import.meta.glob("../../assets/images/{drinks,food,home-brewing}/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const IMAGES = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.replace("../../assets/images/", ""), url])
);

/** menuImage("drinks/latte.jpeg") -> "/assets/latte-abc123.jpeg" */
export function menuImage(path) {
  const url = IMAGES[path];
  if (!url && import.meta.env.DEV) {
    console.warn(`Missing menu image: ${path}`);
  }
  return url;
}
