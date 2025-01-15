/* eslint-disable @next/next/no-img-element */
import { X } from "lucide-react";
import Link from "next/link";

export const NavMobile = ({ setMobileMenuOpen }) => {
  const styles_link = "text-sm font-medium text-[--principal] ";
  return (
    <>
      <section className="flex items-center justify-center">
        <img src="../ProGPS_Logo.png" alt="logo" height={200} width={200} />
      </section>
      <nav className="flex flex-col items-center gap-4 p-4 bg-black">
        <Link
          className={styles_link}
          href="/#servicios"
          onClick={() => setMobileMenuOpen(false)}
        >
          Características
        </Link>
        <Link
          className={styles_link}
          href="/#contacto"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contacto
        </Link>

        <Link
          className={styles_link}
          href="https://rastreo.progps.com.ar"
          onClick={() => setMobileMenuOpen(false)}
        >
          Iniciar Sesión
        </Link>
        <Link
          className={styles_link}
          href="/"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8 text-red-500" />
        </Link>
      </nav>
    </>
  );
};
