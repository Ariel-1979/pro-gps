import "../../app/globals.css";
import "../../app/styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer, NavBar } from "@/components/index";

export const metadata = {
  title: "Rastreo Satelital",
  description: "Rastreo Satelital",
};

export default function LandingLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col w-full min-h-screen bg-blacktransition-colors duration-300">
        <NavBar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-NF1HV68E6B" />
      </body>
    </html>
  );
}
