import { CARDS_DATA } from "./CARD_DATA";
import CustomCard from "./CustomCard";

export default function CardGroup() {
  return (
    <section
      id="servicios"
      className="min-h-screen flex items-center justify-center 
              bg-gray-600 text-[--principal] bg-servicios"
    >
      <div className="container px-4 sm:px-6 py-12 ">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-10">
          Nuestros Servicios
        </h2>
        <div className="container grid gap-6 grid-cols-1 md:grid-cols-3 md:px-12">
          {CARDS_DATA.map((card) => (
            <CustomCard card={card} key={card.key} />
          ))}
        </div>
      </div>
    </section>
  );
}
