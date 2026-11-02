import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryHref, getProduct, isCategory, productImage } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category: rawCategory, id } = await params;
  const category = decodeURIComponent(rawCategory);
  if (!isCategory(category)) notFound();

  const product = getProduct(category, id);
  if (!product) notFound();

  const mainImage = productImage(product, 1000, 1000);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Detalle del producto</h1>
      <Link
        href={categoryHref(category)}
        className="mt-3 inline-block text-sm text-neutral-400 transition-colors hover:text-white"
      >
        ← Volver al catálogo
      </Link>

      <div className="mt-6 max-w-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mainImage}
          alt={product.name}
          className="aspect-square w-full rounded-lg border border-neutral-800 object-cover"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mainImage}
          alt={product.name}
          className="mt-3 h-20 w-20 rounded-md border border-neutral-700 object-cover"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">{product.name}</h2>
      <p className="mt-3 text-neutral-400">Categoría: {product.category}</p>
      <p className="mt-1 text-neutral-400">Talle: {product.size ?? "No especificado"}</p>
    </div>
  );
}
