import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satyam Singh | Full Stack Developer",
  description: "Portfolio of Satyam Singh — CS Engineer, Full Stack Developer & AI enthusiast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
