"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

const SORT_OPTIONS = [
  "Relevancia",
  "Precio: menor a mayor",
  "Precio: mayor a menor",
  "Nombre A-Z",
  "Nombre Z-A",
] as const;

type SortOption = (typeof SORT_OPTIONS)[number];

function sortProducts(products: Product[], sort: SortOption): Product[] {
  const list = [...products];
  switch (sort) {
    case "Nombre A-Z":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "Nombre Z-A":
      return list.sort((a, b) => b.name.localeCompare(a.name));
    case "Precio: menor a mayor":
      // Sin precios cargados: se ordena por nombre como respaldo.
      return list.sort((a, b) => (a.price ?? 0) - (b.price ?? 0) || a.name.localeCompare(b.name));
    case "Precio: mayor a menor":
      return list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0) || b.name.localeCompare(a.name));
    default:
      return list;
  }
}

export default function CategoryClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState("Todos");
  const [sort, setSort] = useState<SortOption>("Relevancia");

  const sizes = useMemo(
    () => Array.from(new Set(products.map((p) => p.size).filter((s): s is string => Boolean(s)))),
    [products],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const byFilters = products.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (size !== "Todos" && p.size !== size) return false;
      return true;
    });
    return sortProducts(byFilters, sort);
  }, [products, search, size, sort]);

  const inputClasses =
    "rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-600 focus:outline-none";

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar..."
          className={`${inputClasses} w-full md:flex-1`}
        />
        <label className="flex flex-col gap-1 text-xs text-neutral-400">
          Filtrar por talle
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className={inputClasses}
          >
            <option value="Todos">Todos</option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs text-neutral-400">
          Ordenar por
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className={inputClasses}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-neutral-400">{filtered.length} resultados</p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-neutral-400">
          No se encontraron productos que coincidan con los filtros.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
