import { ButtonWhatsApp } from "./ButtonWhatsApp";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center bg-gray-700 bg-contacto"
    >
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold  text-[--principal] sm:text-4xl md:text-5xl">
              Solicitá tu cotización
            </h2>
            <p className="mx-auto max-w-[600px] text-white md:text-xl dark:text-white">
              Contactanos hoy mismo para que un asesor dialogue con vos.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <ButtonWhatsApp />
          </div>
        </div>
      </div>
    </section>
  );
}
