import Link from "next/link";
import { CATEGORIES, categoryHref } from "@/lib/products";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold uppercase tracking-widest text-white"
        >
          Import Provee
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={categoryHref(category)}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
