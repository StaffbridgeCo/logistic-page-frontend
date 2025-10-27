import Header from "../components/Header";
import LogisticsSection from "../components/LogisticsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import LogisticsNearshoreDetails from "../components/LogisticsNearshoreDetails";
import EmpowerSection from "../components/EmpowerSection";


export default function Logistics() {
  return (
    <>
      <Header />
      <LogisticsSection />
      <LogisticsNearshoreDetails /> {/* 👈 insertado aquí */}
      <FeaturesSection />
      <EmpowerSection />
      <Footer />
    </>
  );
}
