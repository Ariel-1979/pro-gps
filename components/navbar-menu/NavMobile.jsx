import Link from "next/link";

export const NavMobile = ({ setMobileMenuOpen }) => {
  const styles_link =
    "text-sm font-medium text-[--principal] hover:text-white transition-colors";
  return (
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
        href="/login"
        onClick={() => setMobileMenuOpen(false)}
      >
        Iniciar Sesión
      </Link>
    </nav>
  );
};
