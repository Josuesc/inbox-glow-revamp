import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Work from "@/components/Work";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Testimonials />
      <Process />
      <Work />
      <CaseStudy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
