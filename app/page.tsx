import AboutSection from "@/components/organisms/AboutSection";
import Header from "@/components/organisms/header";
import HowItWorks from "@/components/organisms/HowItWorks";
import InfoCards from "@/components/organisms/InfoCards";
import MenuSection from "@/components/organisms/MenuSection";
import WelcomeSection from "@/components/organisms/WelcomeSection";

const Home: React.FC = () => {
  return (
    <div className="bg-amber-500">
      <Header />
      <WelcomeSection />
      <InfoCards />
      <AboutSection />
      <HowItWorks />
      <MenuSection />
    </div>
  );
};

export default Home;
