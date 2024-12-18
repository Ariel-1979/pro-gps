import { CustomLink } from "./CustomLinks";
import { LINKS } from "./LINKS";

export const NavDesktop = () => {
  return (
    <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
      {LINKS.map((link) => (
        <CustomLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
};
