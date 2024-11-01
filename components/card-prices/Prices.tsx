import { CARDS_DATA } from "./CARD_DATA";
import CustomCard from "./CustomCard";

export default function Prices() {
  return (
    <section
      id="plans"
      className=" min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
      style={{
        backgroundImage: `url(/planes.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter dark:text-[--dark-principal] sm:text-4xl md:text-5xl text-center mb-10">
          Planes Comerciales
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS_DATA.map((card) => (
            <CustomCard card={card} key={card.key} />
          ))}
        </div>
      </div>
    </section>
  );
}
