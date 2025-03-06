import { Navbar } from "../components/Navbar";
import { MainSection } from "../components/MainSection";
import { ProductsSection } from "../components/ProductsSection";
import { ConfidenceQualitySection } from "../components/ConfidenceQualitySection";
import { ContactForMe } from "../components/ContactForMe";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="">
        <MainSection />

        <ConfidenceQualitySection />

        <ProductsSection />

        <ContactForMe />

        <Footer />
      </main>
    </>
  );
};
