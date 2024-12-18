export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img src="/ProGPS_Logo.png" alt="ProGPS Logo" width={50} height={50} />
      <span className="font-bold  text-[--principal] text-xs">
        Logística y Recupero Vehícular
      </span>
    </div>
  );
}
