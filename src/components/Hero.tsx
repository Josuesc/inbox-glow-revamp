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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 animate-fade-in">
              <span className="text-foreground">Helping </span>
              <span className="text-primary font-medium">DTC Brands</span>
              <span className="text-foreground"> Scale Through </span>
              <span className="text-foreground italic underline decoration-1 underline-offset-4">Cold Traffic Copy</span>
              <span className="text-foreground"> & </span>
              <span className="text-foreground italic underline decoration-1 underline-offset-4">Email Marketing</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-light mb-8 animate-fade-in text-muted-foreground delay-300 leading-relaxed">
              Acquire New Customers <span className="text-secondary font-medium">PROFITABLY</span> Upfront... Then Keep Them Spending (Not Just One Purchase and Done) With Our <span className="text-accent font-medium">'Anti-Playbook'</span> Email Marketing&nbsp;System.
            </h2>

            {/* CTA Button */}
            <div className="animate-scale-in delay-1000">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-4 h-auto font-light border-0"
              >
                Apply For Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in delay-1200">
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-light text-primary mb-2">20-41%</div>
                <div className="text-muted-foreground text-sm">Monthly Revenue</div>
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-light text-secondary mb-2">90 Days</div>
                <div className="text-muted-foreground text-sm">Or Less</div>
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-light text-accent mb-2">10+</div>
                <div className="text-muted-foreground text-sm">Brands Served</div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Smartphone Mockups */}
          <div className="relative flex justify-center items-center animate-fade-in delay-500">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Phone 1 - Front Center */}
              <div className="absolute z-30 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-64 h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="w-full h-8 bg-black rounded-t-[2rem] flex items-center justify-center">
                      <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="p-4 h-full bg-gradient-to-br from-pink-100 to-purple-100">
                      <div className="text-xs font-semibold mb-2">Email Campaign</div>
                      <div className="w-full h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg mb-2"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Left Back */}
              <div className="absolute -left-16 z-20 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="w-56 h-[440px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2rem] p-2 shadow-xl transform rotate-12">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-6 bg-black rounded-t-[1.5rem]"></div>
                    <div className="p-3 h-full bg-gradient-to-br from-blue-100 to-indigo-100">
                      <div className="text-xs font-semibold mb-2">Newsletter</div>
                      <div className="w-full h-20 bg-gradient-to-r from-blue-200 to-indigo-200 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-gray-200 rounded"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 - Right Back */}
              <div className="absolute -right-16 z-20 animate-[float_6s_ease-in-out_infinite_2s]">
                <div className="w-56 h-[440px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2rem] p-2 shadow-xl transform -rotate-12">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-6 bg-black rounded-t-[1.5rem]"></div>
                    <div className="p-3 h-full bg-gradient-to-br from-emerald-100 to-teal-100">
                      <div className="text-xs font-semibold mb-2">Promotion</div>
                      <div className="w-full h-20 bg-gradient-to-r from-emerald-200 to-teal-200 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-gray-200 rounded"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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