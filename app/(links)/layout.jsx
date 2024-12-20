import "../../app/globals.css";
import "../../app/styles.css";

export default function StandaloneLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
