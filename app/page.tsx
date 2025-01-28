import Ads from "./_components/Ads";
import ClientsComments from "./sections/ClientsComments";
import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";

export default function Home() {
  return (
    <div className="h-[10000vh]">
      <HeroSection />
      <Ads />
      <Services />
      <ClientsComments />
    </div>
  );
}
