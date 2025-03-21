import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SmartTrading from "@/components/SmartTrading";
import TaskProgressBar from "@/components/TaskProgressBar";
import PoweredFeatures from "@/components/PoweredFeatures";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SmartTrading />
      <TaskProgressBar />
      <PoweredFeatures />
    </>
  );
}
