import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Satyam Singh | Full Stack Developer",
  description: "Portfolio of Satyam Singh — UI/UX Designer, Full Stack Developer & AI enthusiast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
