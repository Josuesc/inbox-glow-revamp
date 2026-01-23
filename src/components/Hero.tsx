import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  // Portfolio images
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
      "/lovable-uploads/0f9e15be-b7d1-4e7e-af3d-48aa3434019c.png", // Northern Fir
      "/lovable-uploads/3a01ab99-d23f-41bd-a815-0bab6c9dfda2.png", // IOKA Eye Care
      "/lovable-uploads/c4a143a4-2f5c-48f4-bb1c-f1eadfddc878.png", // SBTRCT Skincare
      "/lovable-uploads/97b63913-15bc-408f-adb0-8b89835ea177.png"  // Terra & Co
    ]
  };

  // Create an alternating DE-PT sequence
  const allImages = [];
  const maxLength = Math.max(portfolioImages.designed.length, portfolioImages.plainText.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < portfolioImages.designed.length) {
      allImages.push({ src: portfolioImages.designed[i], type: "designed" });
    }
    if (i < portfolioImages.plainText.length) {
      allImages.push({ src: portfolioImages.plainText[i], type: "plainText" });
    }
  }

  // State for cycling images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle images every 0.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 600);
    return () => clearInterval(interval);
  }, [allImages.length]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-secondary/30 to-accent/50 pt-20 md:pt-24"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Text */}
          <div className="lg:col-span-2 text-left lg:pr-16">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 animate-fade-in leading-tight">
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

            <div className="animate-scale-in delay-1000 flex justify-center lg:justify-start">
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

          {/* Right Column - Single Smartphone Mockup */}
          <div className="lg:col-span-1 relative flex justify-center items-center animate-fade-in delay-500">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              
              {/* Left Phone (kept exactly as before) */}
              <div className="relative z-20 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-64 h-[520px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl transform rotate-6">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    <div className="w-full h-7 bg-black rounded-t-[2rem] flex items-center justify-center">
                      <div className="w-14 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="h-full bg-white relative overflow-hidden">
                      <img 
                        src={allImages[currentIndex]?.src}
                        alt={`${allImages[currentIndex]?.type === 'designed' ? 'Professional designed' : 'High-converting plain text'} email`}
                        className="w-full h-full object-cover object-top transition-all duration-500"
                      />
                      <div className={`absolute bottom-3 left-3 text-white text-[10px] px-3 py-1.5 rounded-full font-medium ${
                        allImages[currentIndex]?.type === 'designed' 
                          ? 'bg-primary/90' 
                          : 'bg-secondary/90'
                      }`}>
                        {allImages[currentIndex]?.type === 'designed' ? 'DESIGNED EMAIL' : 'PLAIN TEXT'}
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
