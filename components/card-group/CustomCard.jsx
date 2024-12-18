import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CustomCard({ card }) {
  return (
    <Card className="bg-black border-2 border-[--principal] ">
      <CardHeader className="flex flex-row items-center justify-center gap-4">
        {card.icon}
        <CardTitle className="text-[--principal] ">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-white">{card.description}</p>
      </CardContent>
    </Card>
  );
}
