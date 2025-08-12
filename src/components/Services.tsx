import { Card } from "@/components/ui/card";
import { Mail, Zap } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gradient">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Email + SMS Service */}
          <Card className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-gradient-to-br from-card to-muted/10 group">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Email + SMS
            </h3>

            {/* Services List */}
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Email design and copywriting
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Integration with Funnel softwares
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Segmentation and personalization
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Deliverability optimization
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Compliance management (GDPR, CAN-SPAM, etc.)
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Performance analytics and reporting
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Dedicated account management
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                A/B testing
              </li>
            </ul>

            {/* CTA */}
            <button 
              onClick={() => window.open('https://forms.gle/Vtb4Q2EZhBxg8iKC7', '_blank')}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Apply For Your Free Audit
            </button>
          </Card>

          {/* Cold Traffic/Funnels Service */}
          <Card className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-gradient-to-br from-card to-muted/10 group">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Cold Traffic copy/Funnels
            </h3>

            {/* Services List */}
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                X/Twitter Ads
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Advertorials
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                VSLs
              </li>
              <li className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Sales Pages
              </li>
            </ul>

            {/* CTA */}
            <button 
              onClick={() => window.open('https://forms.gle/Vtb4Q2EZhBxg8iKC7', '_blank')}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Apply For Your Free Audit
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;