import { Card } from "@/components/ui/card";
import { Search, Users, Map, PenTool, TestTube, BarChart3 } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Initial Audit",
    description: "Initial audit of email account to check for any deliverability problems and low-hanging fruits.",
    step: "01"
  },
  {
    icon: Users,
    title: "List Segmentation",
    description: "Segment lists into 6 key categories, based on: engagement level, buying frequency, and spending level.",
    step: "02"
  },
  {
    icon: Map,
    title: "Strategy Mapping",
    description: "Map out the priority email flows and campaigns for the 1st month.",
    step: "03"
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Write the new flows and campaigns, get them designed, and build them in your ESP account (Klaviyo, Sendlane...).",
    step: "04"
  },
  {
    icon: TestTube,
    title: "Testing & Optimization",
    description: "Conduct A/B tests, monitor results, and optimize on a weekly basis.",
    step: "05"
  },
  {
    icon: BarChart3,
    title: "Reporting & Analysis",
    description: "Deliver an accurate report every month to evaluate progress and adjust KPIs for the next period.",
    step: "06"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Our Process To Achieve{" "}
            <span className="text-gradient">20%-41%</span>{" "}
            Of Our Clients' Monthly Revenue
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Just From Email Marketing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="relative p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-gradient-to-br from-card to-muted/10 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-4 overflow-x-auto pb-4">
            {processSteps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                {index < processSteps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your email marketing?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;