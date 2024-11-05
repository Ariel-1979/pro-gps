"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../ui/Logo";

export default function NavBar() {
  /*   const { theme, setTheme } = useTheme(); */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const styles_link =
    "text-sm font-medium text-[--light-secundario] hover:text-white transition-colors";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <Link className="flex items-center justify-center" href="/#">
          <Logo />
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
          <Link className={styles_link} href="/#servicios">
            Características
          </Link>
          <Link className={styles_link} href="/#contacto">
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
          <Link className={styles_link} href="/login">
            Iniciar Sesión
          </Link>
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
            <nav className="flex flex-col items-center gap-4 p-4 dark:bg-gray-900">
              <Link
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
                href="/#servicios"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </Link>
              <Link
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
                href="/#contacto"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              {/* <Button
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
              </Button> */}
              <Link className={styles_link} href="/login">
                Iniciar Sesión
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
