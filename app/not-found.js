/* eslint-disable @next/next/no-img-element */

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <img
        src="/background_PROGPS.jpg"
        alt="background"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="relative z-10 container px-4 md:px-20 text-center">
        <div>
          <img
            src="/ProGPS_Logo.png"
            alt="ProGPS"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
