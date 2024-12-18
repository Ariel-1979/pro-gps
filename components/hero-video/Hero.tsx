/* eslint-disable @next/next/no-img-element */
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
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="relative z-10 container px-4 md:px-20 text-center">
        <div>
          <img
            src="/ProGPS_Logo.png"
            alt="ProGPS"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h1
            className="text-3xl font-bold tracking-tighter text-[--principal] 
            sm:text-4xl md:text-5xl lg:text-6xl/none text-center shadow-text"
          >
            Logística y Recupero Vehicular
          </h1>
          <p className="mx-auto max-w-[700px] text-white text-bold md:text-xl">
            Soluciones profesionales de rastreo satelital para tu flota
            vehicular con tecnología de última generación.
          </p>
        </div>
      </div>
    </section>
  );
}
