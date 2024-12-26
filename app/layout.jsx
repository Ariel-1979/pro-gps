import "./globals.css";
import "./styles.css";

export const metadata = {
  metadataBase: new URL("https://progps.com.ar"),
  title: "Rastreo Satelital",
  description: "Rastreo Satelital",
  keywords: "rastreo, satelital, gps, seguimiento, camiones, flota",
  openGraph: {
    title: "Rastreo Satelital",
    description: "Seguimiento GPS en tiempo real para su flota",
    url: "https://progps.com.ar",
    siteName: "Rastreo Satelital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rastreo Satelital ProGPS",
        type: "image/png",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rastreo Satelital",
    description: "Seguimiento GPS en tiempo real para su flota",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col w-full min-h-screen bg-blacktransition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
