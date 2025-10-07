import Header from "../components/Header";
import BackOfficeSection from "../components/BackOfficeSection";
import BackOfficeDetails from "../components/BackOfficeDetails";
import Footer from "../components/Footer";
import BackOfficeCarousel from "../components/BackOfficeCarousel";

export default function BackOffice() {
  return (
    <>
      <Header />
      <BackOfficeSection />
      <BackOfficeDetails /> 
      <BackOfficeCarousel />
      <Footer />
    </>
  );
}
