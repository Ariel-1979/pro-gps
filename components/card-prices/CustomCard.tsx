import Link from "next/link";
import { ButtonWhatsapp } from "../index";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardProps {
  key: string;
  title: string;
  price: string;
  description: CardDescription;
}

type CardDescription = {
  features: string[];
  contact: {
    button: string;
    link: string;
  };
};

export default function CustomCard({ card }: { card: CardProps }) {
  return (
    <Card className="text-center">
      <CardHeader className="flex flex-row items-center justify-center gap-4">
        <CardTitle className="text-2xl dark:text-[--dark-principal]">
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{card.price}</p>
        <ul className="mt-4 space-y-2">
          {card.description.features.map((feature) => (
            <li key={card.key}>{feature}</li>
          ))}
        </ul>
        <Link
          href={card.description.contact.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonWhatsapp
            title={card.description.contact.button}
            customType="mt-4"
          />
        </Link>
      </CardContent>
    </Card>
  );
}
