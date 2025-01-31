import Ads from "./_components/Ads";
import ClientsComments from "./sections/ClientsComments";
import ContactUs from "./sections/ContactUs";
import HeroSection from "./sections/HeroSection";
import ExploreAI from "./sections/ExploreAI";
import Products from "./sections/Products";
import Blogs from "./sections/Blogs";
import Services from "./sections/Services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Ads />
      <Products />
      <ClientsComments />
      <Blogs />
      <Services />
      <ExploreAI />
      <ContactUs />
    </div>
  );
}
