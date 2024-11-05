import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-black dark:text-white">
      {/* <MapPin className="h-8 w-8 text-[--light-primario] dark:text-[--dark-secundario]" /> */}
      <Image src="/ProGPS_Logo.png" alt="ProGPS" width={45} height={42} />
      <span className="font-bold text-xl text-[--light-primario] dark:text-[--dark-principal]">
        ProGPS
      </span>
    </div>
  );
}
