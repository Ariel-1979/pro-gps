import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <div className="space-y-4 bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl font-bold tracking-tighter text-[--dark-principal] sm:text-4xl md:text-5xl lg:text-6xl/none text-center shadow-text">
            Recupero Satelital Vehicular
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl shadow-text">
            Soluciones profesionales de rastreo GPS para tu flota vehicular con
            tecnología de última generación.
          </p>
          <div className="space-x-4">
            <Link href="#contact">
              <Button className="bg-[--dark-principal] hover:bg-yellow-600 text-black font-bold">
                Quiero recibir más información
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
