import Ads from "./_components/Ads";
import ClientsComments from "./sections/ClientsComments";
import ContactUs from "./sections/ContactUs";
import HeroSection from "./sections/HeroSection";
import Insights from "./sections/Insights";
import Services from "./sections/Services";
import SuccessStories from "./sections/SuccessStories";
import Technologies from "./sections/Technologies";

export default function Home() {
  return (
    <div className="h-[10000vh]">
      <HeroSection />
      <Ads />
      <Services />
      <ClientsComments />
      <SuccessStories />
      <Technologies />
      <Insights />
      <ContactUs />
    </div>
  );
}
