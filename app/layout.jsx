import "./globals.css";
import "./styles.css";
import { Footer, NavBar } from "@/components/index";

export const metadata = {
  title: "Rastreo Satelital",
  description: "Rastreo Satelital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col w-full min-h-screen bg-blacktransition-colors duration-300">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
