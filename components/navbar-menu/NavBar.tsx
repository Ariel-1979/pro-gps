"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { MapPin, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const styles_link =
    "text-sm font-medium text-[--light-secundario] hover:text-white transition-colors";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <Link className="flex items-center justify-center" href="#">
          <div className="flex items-center gap-2 text-black dark:text-white">
            <MapPin className="h-8 w-8 text-[--light-primario] dark:text-[--dark-secundario]" />
            <span className="font-bold text-xl text-[--light-primario] dark:text-[--dark-principal]">
              PRO GPS
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
          <Link className={styles_link} href="#features">
            Características
          </Link>
          <Link className={styles_link} href="#plans">
            Planes
          </Link>
          <Link className={styles_link} href="#contact">
            Contacto
          </Link>
          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button> */}
          <Button
            variant="outline"
            size="sm"
            className="text-[--dark-principal]"
          >
            Iniciar Sesión
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16">
            <nav className="flex flex-col items-center gap-4 p-4">
              <Link
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </Link>
              <Link
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
                href="#plans"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planes
              </Link>
              <Link
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setMobileMenuOpen(false);
                }}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                Cambiar tema
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
