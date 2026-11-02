import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-bold text-white">404</p>
      <p className="mt-3 text-neutral-400">Esta página no existe.</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
