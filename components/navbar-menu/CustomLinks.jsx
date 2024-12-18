import Link from "next/link";

export const CustomLink = ({ href, label }) => {
  const styles_link =
    "text-sm font-medium text-[--principal] hover:text-white transition-colors";
  return (
    <Link className={styles_link} href={href}>
      {label}
    </Link>
  );
};
