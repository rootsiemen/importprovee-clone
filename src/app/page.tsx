import ProductCard from "@/components/ProductCard";
import { getFeatured } from "@/lib/products";

export default function HomePage() {
  const featured = getFeatured();

  return (
    <div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Import Provee</h1>
      <p className="mt-2 text-neutral-400">
        Selecciona una categoría para explorar el catálogo
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">Destacados</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-neutral-500">Página 1</p>
    </div>
  );
}
