export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-700 border-t-white" />
      <p className="mt-4 text-sm text-neutral-300">Iniciando sesión...</p>
    </div>
  );
}
