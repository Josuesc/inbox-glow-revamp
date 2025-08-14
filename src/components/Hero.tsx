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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content (2/3 width) */}
          <div className="lg:col-span-2 text-left pr-16">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 animate-fade-in leading-tight">
              <span className="text-foreground">Helping </span>
              <span className="text-primary font-medium">DTC Brands</span>
              <span className="text-foreground"> Scale Through </span>
              <span className="text-foreground italic underline decoration-1 underline-offset-4">Cold Traffic Copy</span>
              <span className="text-foreground"> & </span>
              <span className="text-foreground italic underline decoration-1 underline-offset-4">Email Marketing</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-12 animate-fade-in text-muted-foreground delay-300 leading-relaxed max-w-xl">
              Acquire New Customers <span className="text-secondary font-medium">PROFITABLY</span> Upfront... Then Keep Them Spending (Not Just One Purchase and Done) With Our <span className="text-accent font-medium">'Anti-Playbook'</span> Email Marketing&nbsp;System.
            </h2>

            {/* CTA Button */}
            <div className="animate-scale-in delay-1000">
              <Button 
                size="lg"
                onClick={() => window.open('https://forms.gle/Vtb4Q2EZhBxg8iKC7', '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-16 py-6 h-auto font-light border-0"
              >
                Apply For Your Free Audit
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Right Column - Animated Smartphone Mockups (1/3 width) */}
          <div className="lg:col-span-1 relative flex justify-center items-center animate-fade-in delay-500">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Phone 1 - Front Center */}
              <div className="absolute z-30 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-48 h-[380px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-6 bg-black rounded-t-[1.5rem] flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="h-full bg-black flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjJncWt3dXU4NHI5dm9mbWl1ODQxZmg0NWh2eHN2NzlvbXh1d3pzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/exwJuxCcMu3u51mDNi/giphy.gif" 
                        alt="Email marketing animation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Left Back */}
              <div className="absolute -left-12 z-20 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="w-40 h-[320px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[1.5rem] p-1.5 shadow-xl transform rotate-12">
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden">
                    <div className="w-full h-5 bg-black rounded-t-[1rem]"></div>
                    <div className="p-2 h-full bg-gradient-to-br from-blue-100 to-indigo-100">
                      <div className="text-[10px] font-semibold mb-1">Newsletter</div>
                      <div className="w-full h-12 bg-gradient-to-r from-blue-200 to-indigo-200 rounded mb-1"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 - Right Back */}
              <div className="absolute -right-12 z-20 animate-[float_6s_ease-in-out_infinite_2s]">
                <div className="w-40 h-[320px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[1.5rem] p-1.5 shadow-xl transform -rotate-12">
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden">
                    <div className="w-full h-5 bg-black rounded-t-[1rem]"></div>
                    <div className="p-2 h-full bg-gradient-to-br from-emerald-100 to-teal-100">
                      <div className="text-[10px] font-semibold mb-1">Promotion</div>
                      <div className="w-full h-12 bg-gradient-to-r from-emerald-200 to-teal-200 rounded mb-1"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded w-3/4"></div>
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