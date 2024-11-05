import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { ThemeProvider } from "next-themes";
import { NavBar } from "@/components/index";

export const metadata: Metadata = {
  title: "ProGPS - Rastreo Satelital",
  description: "PRO GPS - Rastreo Satelital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex justify-center items-center min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
