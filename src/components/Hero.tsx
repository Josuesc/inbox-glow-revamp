import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-secondary/30 to-accent/50"
    >

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 animate-fade-in">
            <span className="text-foreground">Helping </span>
            <span className="text-primary font-medium">7 & 8 Figure DTC Brands</span>
            <span className="text-foreground"> Scale Through </span>
            <span className="text-accent font-medium bg-accent/10 px-2 py-1 rounded-lg">Cold Traffic Copy</span>
            <span className="text-foreground"> & </span>
            <span className="text-secondary font-medium bg-secondary/10 px-2 py-1 rounded-lg">Email Marketing</span>
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-12 animate-fade-in text-muted-foreground delay-300 max-w-4xl mx-auto leading-relaxed">
            Acquire New Customers <span className="text-secondary font-medium">PROFITABLY</span> Upfront... Then Keep Them Spending For Years (Not Just One Purchase and Done) With Our <span className="text-accent font-medium">'Anti-Playbook'</span> Email Marketing System.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-1000">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-4 h-auto font-light border-0"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('process')}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-12 py-4 h-auto font-light bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 animate-fade-in delay-1200">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-primary mb-2">20-41%</div>
              <div className="text-muted-foreground">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-secondary mb-2">90 Days</div>
              <div className="text-muted-foreground">Or Less</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Brands Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full p-1">
          <div className="w-1 h-3 bg-primary/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;