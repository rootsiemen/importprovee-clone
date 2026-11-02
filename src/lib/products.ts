/**
 * Catálogo de productos — Import Provee (clon)
 *
 * Los datos viven en este archivo local. Las fotos de Zapatillas, Botines y
 * Joyeria son las fotos originales del sitio, guardadas localmente en
 * `public/uploads/` con su nombre de archivo original. Las de Ropa son fotos
 * de stock libres (Unsplash) verificadas. `price` es siempre `null` y `size`
 * es `null` salvo que se especifique, igual que en el sitio original.
 */

export const CATEGORIES = [
  "Botines",
  "Joyeri",
  "Joyeria",
  "Ropa",
  "Zapatillas",
  "Liquidación",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Product {
  id: string;
  name: string;
  category: Category;
  /** Ruta local (`/uploads/...`) o URL base de la imagen. */
  image: string;
  price: number | null;
  size: string | null;
}

const U = (photoId: string) => `https://images.unsplash.com/${photoId}`;

/**
 * Devuelve la URL de la imagen lista para mostrar. Las imágenes remotas
 * (Unsplash) reciben parámetros de recorte; las locales se sirven tal cual
 * y el recorte lo hace CSS (`object-cover`).
 */
export function productImage(product: Product, width: number, height: number): string {
  if (product.image.startsWith("/")) return product.image;
  return `${product.image}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export const PRODUCTS: Product[] = [
  // ─── Zapatillas (fotos originales) ─────────────────────────────────────────
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000101",
    name: "Air Max 97 'White'",
    category: "Zapatillas",
    image: "/uploads/2914bcb7-7c33-4a6d-94b8-26d9c0425305.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000102",
    name: "Superstar 'Clasica'",
    category: "Zapatillas",
    image: "/uploads/66aafef6-74d7-4f47-96b3-432100a60617.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000103",
    name: "Superstar 'Black White'",
    category: "Zapatillas",
    image: "/uploads/b145adcf-52da-45bd-bba7-543e151cf7ef.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000104",
    name: "AF1 'Triple White'",
    category: "Zapatillas",
    image: "/uploads/b13e180d-e99c-4824-8f10-de95c79ba80c.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000105",
    name: "AF1 'Triple Black'",
    category: "Zapatillas",
    image: "/uploads/305480f7-fa1c-4a9d-a07d-861a14db3c96.jpg",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000106",
    name: "Air More Uptempo 'Black Gum'",
    category: "Zapatillas",
    image: "/uploads/ac509995-774b-4d7e-818a-dd14f36d6626.JPEG",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000107",
    name: "AF1 'Low'",
    category: "Zapatillas",
    image: "/uploads/81410064-55b0-4204-99ea-c2afbee97648.jpg",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000108",
    name: "Jordan 1 'Mid'",
    category: "Zapatillas",
    image: "/uploads/92328c6a-adb4-4f47-9152-829e297522e2.jfif",
    price: null,
    size: null,
  },

  // ─── Ropa (fotos de stock verificadas) ─────────────────────────────────────
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000201",
    name: "Remera Oversize 'Lisa'",
    category: "Ropa",
    image: U("photo-1521572163474-6864f9cf17ab"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000202",
    name: "Remera Oversize 'Essential'",
    category: "Ropa",
    image: U("photo-1576566588028-4147f3842f27"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000203",
    name: "Remera Oversize 'Bordada'",
    category: "Ropa",
    image: U("photo-1503341504253-dff4815485f1"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000204",
    name: "Remera Oversize 'Estampa Espalda'",
    category: "Ropa",
    image: U("photo-1583743814966-8936f5b7be1a"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000205",
    name: "Remera Oversize 'Estampa Delantera'",
    category: "Ropa",
    image: U("photo-1618354691373-d851c5c3a990"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000206",
    name: "Remera Oversize 'Bordado Deluxe'",
    category: "Ropa",
    image: U("photo-1596755094514-f87e34085b2c"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000207",
    name: "Remera Oversize 'Estampada'",
    category: "Ropa",
    image: U("photo-1562157873-818bc0726f68"),
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000208",
    name: "Remera Oversize 'Deluxe'",
    category: "Ropa",
    image: U("photo-1620799140408-edc6dcb6d633"),
    price: null,
    size: null,
  },

  // ─── Botines (fotos originales) ────────────────────────────────────────────
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000301",
    name: "Bota 'Tactica'",
    category: "Botines",
    image: "/uploads/Predstrike 30 lengua Predator Elite FG FB.jpeg",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000302",
    name: "Bota 'Cuero'",
    category: "Botines",
    image: "/uploads/Botines MaxPro3s Predator Elite FG FB.jpg",
    price: null,
    size: null,
  },

  // ─── Joyeria (fotos originales) ────────────────────────────────────────────
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000401",
    name: "Cadena 'Swarovski Esmeralda'",
    category: "Joyeria",
    image: "/uploads/9b9d1366-6b5d-4129-9a9a-c23d5a34c232.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000402",
    name: "Cadena 'Swarovski Rojo'",
    category: "Joyeria",
    image: "/uploads/ea433253-758a-49b8-a6ca-3642539dad71.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000403",
    name: "Cadena 'Swarovski Lila'",
    category: "Joyeria",
    image: "/uploads/6d23606a-b2b7-44fc-b919-e2dfa7256ead.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000404",
    name: "Cadena 'Swarovski Blanco'",
    category: "Joyeria",
    image: "/uploads/b79056cc-8741-43bd-a8a8-3c837c2d7572.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000405",
    name: "Cadena 'Swarovski Azul'",
    category: "Joyeria",
    image: "/uploads/04fa3cc9-1afb-4b7b-8fa4-579b6cfae6b5.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000406",
    name: "Cadena 'Swarovski Rosa'",
    category: "Joyeria",
    image: "/uploads/66c27d06-a8cc-403c-aa8e-406e734cdf91.jfif",
    price: null,
    size: null,
  },
  {
    id: "8f14e45f-ea0b-4a3d-9c1e-000000000407",
    name: "Cadena 'Swarovski Celeste'",
    category: "Joyeria",
    image: "/uploads/c1fd8b04-cae0-44fb-9cbe-fb9d5b5b121e.jfif",
    price: null,
    size: null,
  },

  // Joyeri y Liquidación existen en la navegación pero no tienen productos.
];

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProduct(category: Category, id: string): Product | undefined {
  return PRODUCTS.find((p) => p.category === category && p.id === id);
}

/** Productos destacados de la portada: las 8 Zapatillas. */
export function getFeatured(): Product[] {
  return getProductsByCategory("Zapatillas");
}

export function categoryHref(category: Category): string {
  return `/catalogue/${encodeURIComponent(category)}`;
}

export function productHref(product: Product): string {
  return `/catalogue/${encodeURIComponent(product.category)}/${product.id}`;
}
