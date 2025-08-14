import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  // Portfolio images for the smartphone mockups
  const portfolioImages = {
    designed: [
      "/lovable-uploads/9e9e9113-ab3b-4ae3-9c5f-c625939eb71c.png", // IOKA skincare 1
      "/lovable-uploads/cbcb37cf-8cc7-4740-9f5d-7ce2c9378bd1.png", // IOKA skincare 2
      "/lovable-uploads/a982e324-4b12-46cf-9713-e2444ef19667.png", // JYM supplement 1
      "/lovable-uploads/bbb00f58-a653-4d38-ab02-0632a651310d.png", // JYM supplement 2
      "/lovable-uploads/1b09f454-388f-4fd4-a0cf-1adc1fce40f0.png", // WRAP LIFE 1
      "/lovable-uploads/fb68086e-5820-4b6d-81d9-5f04df5d72f1.png", // WRAP LIFE 2
      "/lovable-uploads/78b53fcb-608b-4b6c-8a0f-397af1a78152.png"  // WRAP LIFE 3
    ],
    plainText: [
      "/lovable-uploads/34389f9a-3ca5-41e5-83f8-a1e3ac0f2deb.png", // BEDJET
      "/lovable-uploads/cdd9a44c-8aa4-4a90-b974-6dfe4911ab4c.png", // NB Pure
      "/lovable-uploads/0f9e15be-b7d1-4e7e-af3d-48aa3434019c.png"  // Northern Fir
    ]
  };

  // State for cycling images
  const [currentDesignedIndex, setCurrentDesignedIndex] = useState(0);
  const [currentPlainIndex, setCurrentPlainIndex] = useState(0);
  const [showDesigned, setShowDesigned] = useState(true);

  // Cycle through designed emails
  useEffect(() => {
    const designedInterval = setInterval(() => {
      setCurrentDesignedIndex((prev) => (prev + 1) % portfolioImages.designed.length);
    }, 2500);
    return () => clearInterval(designedInterval);
  }, []);

  // Cycle through plain text emails
  useEffect(() => {
    const plainInterval = setInterval(() => {
      setCurrentPlainIndex((prev) => (prev + 1) % portfolioImages.plainText.length);
    }, 3000);
    return () => clearInterval(plainInterval);
  }, []);

  // Toggle between designed and plain text view
  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setShowDesigned((prev) => !prev);
    }, 4000);
    return () => clearInterval(toggleInterval);
  }, []);

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
              {/* Phone 1 - Center (Main Portfolio) */}
              <div className="absolute z-30 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-48 h-[380px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="w-full h-6 bg-black rounded-t-[1.5rem] flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="h-full bg-white relative overflow-hidden">
                      {/* Designed Email Display */}
                      <div className={`absolute inset-0 transition-opacity duration-1000 ${showDesigned ? 'opacity-100' : 'opacity-0'}`}>
                        <img 
                          src={portfolioImages.designed[currentDesignedIndex]}
                          alt="Professional designed email"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-2 left-2 bg-primary/90 text-white text-[8px] px-2 py-1 rounded-full font-medium">
                          DESIGNED EMAIL
                        </div>
                      </div>
                      
                      {/* Plain Text Email Display */}
                      <div className={`absolute inset-0 transition-opacity duration-1000 ${!showDesigned ? 'opacity-100' : 'opacity-0'}`}>
                        <img 
                          src={portfolioImages.plainText[currentPlainIndex]}
                          alt="High-converting plain text email"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-2 left-2 bg-secondary/90 text-white text-[8px] px-2 py-1 rounded-full font-medium">
                          PLAIN TEXT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Left (Secondary Portfolio) */}
              <div className="absolute -left-12 z-20 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="w-40 h-[320px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[1.5rem] p-1.5 shadow-xl transform rotate-12">
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden relative">
                    <div className="w-full h-5 bg-black rounded-t-[1rem]"></div>
                    <div className="h-full bg-white relative overflow-hidden">
                      <img 
                        src={portfolioImages.designed[(currentDesignedIndex + 2) % portfolioImages.designed.length]}
                        alt="Email marketing portfolio"
                        className="w-full h-full object-cover object-top transition-all duration-1000"
                      />
                      <div className="absolute bottom-1 left-1 bg-accent/80 text-white text-[6px] px-1 py-0.5 rounded font-medium">
                        PORTFOLIO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 - Right (Tertiary Portfolio) */}
              <div className="absolute -right-12 z-20 animate-[float_6s_ease-in-out_infinite_2s]">
                <div className="w-40 h-[320px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[1.5rem] p-1.5 shadow-xl transform -rotate-12">
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden relative">
                    <div className="w-full h-5 bg-black rounded-t-[1rem]"></div>
                    <div className="h-full bg-white relative overflow-hidden">
                      <img 
                        src={showDesigned ? 
                          portfolioImages.designed[(currentDesignedIndex + 4) % portfolioImages.designed.length] :
                          portfolioImages.plainText[(currentPlainIndex + 1) % portfolioImages.plainText.length]
                        }
                        alt="Email marketing showcase"
                        className="w-full h-full object-cover object-top transition-all duration-1000"
                      />
                      <div className="absolute bottom-1 right-1 bg-muted-foreground/80 text-white text-[6px] px-1 py-0.5 rounded font-medium">
                        RESULTS
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