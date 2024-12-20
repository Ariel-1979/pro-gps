import Logo from "../ui/Logo";
import RedesSociales from "./RedesSociales";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-black ">
      <div className="mx-auto flex flex-col gap-4 py-4 px-4 md:px-16 min-h-16">
        <div
          className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between
          lg:px-16 "
        >
          <Logo />
          <RedesSociales />
          <p className="text-xs text-[--principal] sm:order-none order-last sm:mt-0">
            © {new Date().getFullYear()} ProGPS. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
