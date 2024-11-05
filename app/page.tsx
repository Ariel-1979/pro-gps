"use server";
import {
  ButtonWhatsappFloating,
  CardGroup,
  Contact,
  Footer,
  Hero,
  NavBar,
} from "@/components/index";

export default async function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      <main className="flex-1 pt-16 ">
        <Hero />
        <CardGroup />
        <Contact />
      </main>
      <ButtonWhatsappFloating />
      <Footer />
    </div>
  );
}
