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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(115, 144, 200, 0.9) 0%, rgba(230, 160, 196, 0.8) 50%, rgba(199, 206, 246, 0.9) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Mail className="w-12 h-12 text-white/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <TrendingUp className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float delay-2000">
          <Mail className="w-10 h-10 text-white/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-white">We Help </span>
            <span className="text-accent">7-Figure Ecom Brands</span>
            <span className="text-white"> Scale Their Profits</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-fade-in text-white/90 delay-300">
            By Predictably Grossing{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              20%-41%
            </span>{" "}
            Of Their Monthly Revenue
          </h2>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 animate-fade-in text-muted delay-500">
            Just From Email Marketing
          </h3>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-slide-up delay-700">
            Without them having to spend more on ads or acquire new customers to make it work
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-1000">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-white/30 text-lg px-8 py-4 h-auto font-semibold"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('process')}
              className="glass-effect border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-1200">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">20-41%</div>
              <div className="text-white/80">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">90 Days</div>
              <div className="text-white/80">Or Less</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">10+</div>
              <div className="text-white/80">Brands Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;