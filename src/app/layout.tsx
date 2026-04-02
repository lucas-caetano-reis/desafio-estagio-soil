import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soil - Esta é uma landing page com Next.js",
  description: "Essa seria a descrição da página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
