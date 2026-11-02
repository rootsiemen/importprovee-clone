import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo B2B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-neutral-100 antialiased">
        <Header />
        <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
