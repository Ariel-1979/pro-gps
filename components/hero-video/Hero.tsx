import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative z-10 container px-4 md:px-20 text-center">
        <div /* className=" bg-black bg-opacity-25 pt-4 pb-4 rounded-2xl backdrop-blur-sm" */
        >
          <Image
            src="/ProGPS_Logo.png"
            alt="ProGPS"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold tracking-tighter text-[--dark-principal] sm:text-4xl md:text-5xl lg:text-6xl/none text-center shadow-text">
            Logística y Recupero Vehicular
          </h1>
          <p className="mx-auto max-w-[700px] text-bold md:text-xl shadow-text">
            Soluciones profesionales de rastreo GPS para tu flota vehicular con
            tecnología de última generación.
          </p>
          {/*   <div className="space-x-4">
            <Link href="#contacto">
              <Button className="bg-[--dark-principal] hover:bg-yellow-600 text-black font-bold">
                Quiero recibir más información
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
