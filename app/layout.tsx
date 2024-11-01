import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "PRO GPS - Rastreo Satelital",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
