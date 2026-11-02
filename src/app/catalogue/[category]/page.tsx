import { notFound } from "next/navigation";
import { getProductsByCategory, isCategory } from "@/lib/products";
import CategoryClient from "./CategoryClient";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory);
  if (!isCategory(category)) notFound();

  const products = getProductsByCategory(category);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-white">{category}</h1>
      <CategoryClient products={products} />
    </div>
  );
}
