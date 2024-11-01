import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function CustomCard({ card }: { card: CardProps }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-center gap-4">
        {card.icon}
        <CardTitle className="dark:text-[--dark-principal]">
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">{card.description}</p>
      </CardContent>
    </Card>
  );
}
