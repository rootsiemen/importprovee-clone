import Link from "next/link";
import { productHref, productImage, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={productHref(product)}
      className="group block overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={productImage(product, 800, 1000)}
        alt={product.name}
        loading="lazy"
        className="aspect-[3/4] w-full object-cover transition-opacity group-hover:opacity-90"
      />
      <div className="border-t border-neutral-800 px-3 py-3">
        <p className="truncate text-sm text-neutral-200">{product.name}</p>
      </div>
    </Link>
  );
}
