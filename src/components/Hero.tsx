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
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-16 py-6 h-auto font-light border-0"
              >
                Apply For Your Free Audit
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Right Column - Dynamic Email Showcase */}
          <div className="lg:col-span-1 relative flex justify-center items-center animate-fade-in delay-500">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              
              {/* Phone 1 - Center, cycles through emails slowly */}
              <div className="absolute z-40 animate-[float_8s_ease-in-out_infinite] transform hover:scale-105 transition-transform duration-300">
                <div className="w-52 h-[400px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-2xl border border-slate-600">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="w-full h-8 bg-black rounded-t-[2rem] flex items-center justify-center">
                      <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="p-4 h-full bg-gradient-to-br from-rose-50 to-pink-50 animate-[fade-in_4s_ease-in-out_infinite]">
                      <div className="text-sm font-semibold mb-3 text-slate-700">Weekly Newsletter</div>
                      <div className="w-full h-20 bg-gradient-to-r from-rose-200 to-pink-200 rounded-lg mb-3 shadow-sm"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                        <div className="h-2 bg-slate-200 rounded w-3/5"></div>
                        <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Left, appears periodically */}
              <div className="absolute -left-16 top-12 z-30 animate-[float_6s_ease-in-out_infinite_1.5s] opacity-90">
                <div className="w-44 h-[340px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2rem] p-2 shadow-xl transform rotate-[15deg]">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-6 bg-black rounded-t-[1.5rem] flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="p-3 h-full bg-gradient-to-br from-blue-50 to-indigo-50 animate-[fade-in_3s_ease-in-out_infinite_2s]">
                      <div className="text-xs font-semibold mb-2 text-slate-700">Flash Sale Alert</div>
                      <div className="w-full h-14 bg-gradient-to-r from-blue-200 to-indigo-200 rounded mb-2 shadow-sm"></div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 bg-slate-200 rounded"></div>
                        <div className="h-1.5 bg-slate-200 rounded w-3/4"></div>
                        <div className="h-1.5 bg-slate-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 - Right, slides in and out */}
              <div className="absolute -right-14 -top-8 z-30 animate-[float_7s_ease-in-out_infinite_3s] opacity-85">
                <div className="w-42 h-[330px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2rem] p-1.5 shadow-xl transform -rotate-[18deg]">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-6 bg-black rounded-t-[1.5rem]"></div>
                    <div className="p-2.5 h-full bg-gradient-to-br from-emerald-50 to-teal-50 animate-[fade-in_5s_ease-in-out_infinite_1s]">
                      <div className="text-xs font-semibold mb-2 text-slate-700">Cart Recovery</div>
                      <div className="w-full h-12 bg-gradient-to-r from-emerald-200 to-teal-200 rounded mb-2 shadow-sm"></div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-slate-200 rounded"></div>
                        <div className="h-1.5 bg-slate-200 rounded w-4/5"></div>
                        <div className="h-1.5 bg-slate-200 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 4 - Background left, subtle presence */}
              <div className="absolute -left-8 bottom-16 z-20 animate-[float_9s_ease-in-out_infinite_4s] opacity-70">
                <div className="w-36 h-[280px] bg-gradient-to-b from-slate-600 to-slate-700 rounded-[1.5rem] p-1.5 shadow-lg transform rotate-[25deg]">
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden">
                    <div className="w-full h-5 bg-black rounded-t-[1rem]"></div>
                    <div className="p-2 h-full bg-gradient-to-br from-orange-50 to-amber-50 animate-[fade-in_6s_ease-in-out_infinite_3s]">
                      <div className="text-[10px] font-semibold mb-1 text-slate-700">Product Launch</div>
                      <div className="w-full h-10 bg-gradient-to-r from-orange-200 to-amber-200 rounded mb-1 shadow-sm"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-slate-200 rounded"></div>
                        <div className="h-1 bg-slate-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 5 - Background right, creates depth */}
              <div className="absolute -right-6 bottom-20 z-20 animate-[float_8s_ease-in-out_infinite_5s] opacity-65">
                <div className="w-38 h-[290px] bg-gradient-to-b from-slate-600 to-slate-700 rounded-[1.5rem] p-1.5 shadow-lg transform -rotate-[22deg]">
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden">
                    <div className="w-full h-5 bg-black rounded-t-[1rem]"></div>
                    <div className="p-2 h-full bg-gradient-to-br from-purple-50 to-violet-50 animate-[fade-in_7s_ease-in-out_infinite_2.5s]">
                      <div className="text-[10px] font-semibold mb-1 text-slate-700">VIP Offer</div>
                      <div className="w-full h-11 bg-gradient-to-r from-purple-200 to-violet-200 rounded mb-1 shadow-sm"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-slate-200 rounded"></div>
                        <div className="h-1 bg-slate-200 rounded w-3/4"></div>
                        <div className="h-1 bg-slate-200 rounded w-1/2"></div>
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