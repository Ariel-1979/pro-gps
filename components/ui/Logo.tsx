/* eslint-disable @next/next/no-img-element */
export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/ProGPS_Logo.png"
        alt="ProGPS Logo"
        className="h-[30px] w-[60px] "
      />
      <span className="font-bold  text-[--principal] text-xs">
        {process.env.NEXT_PUBLIC_LOGO_TEXT}
      </span>
    </div>
  );
}
