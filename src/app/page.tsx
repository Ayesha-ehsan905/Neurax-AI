import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SmartTrading from "@/components/SmartTrading";
import TaskProgressBar from "@/components/TaskProgressBar";
import PoweredFeatures from "@/components/PoweredFeatures";
import AIAdvantages from "@/components/AIAdvantages";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import Interface from "@/components/Interface";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SmartTrading />
      <TaskProgressBar />
      <PoweredFeatures />
      <AIAdvantages />
      <Tokenomics />
      <Interface />
      <Footer />
    </>
  );
}
