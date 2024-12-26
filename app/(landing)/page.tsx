import {
  ButtonWhatsappFloating,
  CardGroup,
  Contact,
  Hero,
  Siniestro,
} from "@/components/index";

export default async function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900 transition-colors duration-300">
      <Hero />
      <CardGroup />
      <Contact />
      <Siniestro />
      <ButtonWhatsappFloating />
    </div>
  );
}
