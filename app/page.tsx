import Image from "next/image";
import Hero from "../components/hero"
import TickerBar from "../components/tickerbar"
import AnimalCategories from "../components/animalcatagory"
import Introduction from "../components/introduction"
import WhyTrustUs from "../components/trustus"
import CTASection from "../components/ctasection"


export default function Home() {
  return (
    <>
       <Hero />
       <TickerBar />
       <AnimalCategories />
       <Introduction />
       <WhyTrustUs />
       <CTASection />
      
    </>
  );
}
