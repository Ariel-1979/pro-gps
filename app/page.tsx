"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ButtonFloating,
  CardGroup,
  Footer,
  Hero,
  NavBar,
  Prices,
} from "@/components/index";

export default function LandingPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const footerTop =
        document.getElementById("footer")?.offsetTop || Infinity;
      const scrollPosition = window.scrollY + window.innerHeight;
      setShowFloatingButton(
        window.scrollY > 300 && scrollPosition < footerTop - 100
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className=" flex flex-col w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      <main className="flex-1 pt-16 ">
        <Hero />
        <CardGroup />
        <Prices />
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"
          style={{
            backgroundImage: `url(/contacto.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div
              className="flex flex-col items-center space-y-4 text-center
            "
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[--dark-principal] sm:text-4xl md:text-5xl">
                  Solicitá tu cotización
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl dark:text-white">
                  Contáctanos hoy mismo para que un asesor dialogue con vos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86  0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contactar por WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Floating WhatsApp Button */}
      {showFloatingButton && <ButtonFloating />}
      <Footer />
    </div>
  );
}
