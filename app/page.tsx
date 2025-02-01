import Ads from "./_components/Ads";
import ClientsComments from "./_sections/ClientsComments";
import ContactUs from "./_sections/ContactUs";
import HeroSection from "./_sections/HeroSection";
import ExploreAI from "./_sections/ExploreAI";
import Products from "./_sections/Products";
import Blogs from "./_sections/Blogs";
import Services from "./_sections/Services";

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
