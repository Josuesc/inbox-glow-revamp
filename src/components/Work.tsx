import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Mail, Users, DollarSign } from "lucide-react";

const workExamples = [
  {
    category: "Beauty & Skincare",
    description: "Luxury skincare brand targeting millennial women",
    metrics: [
      { label: "Revenue Increase", value: "+340%", icon: DollarSign },
      { label: "Email CTR", value: "8.2%", icon: Mail },
      { label: "List Growth", value: "+185%", icon: Users }
    ],
    color: "from-pink-500 to-rose-400"
  },
  {
    category: "Food & Beverage",
    description: "Craft beer brewery with national distribution",
    metrics: [
      { label: "Monthly Revenue", value: "$45K", icon: DollarSign },
      { label: "Open Rate", value: "42%", icon: Mail },
      { label: "Conversion Rate", value: "12.8%", icon: TrendingUp }
    ],
    color: "from-amber-500 to-orange-400"
  },
  {
    category: "Fashion & Apparel",
    description: "Sustainable fashion brand for conscious consumers",
    metrics: [
      { label: "Email Revenue", value: "31%", icon: DollarSign },
      { label: "Engagement", value: "+250%", icon: Users },
      { label: "ROI", value: "1,200%", icon: TrendingUp }
    ],
    color: "from-emerald-500 to-teal-400"
  },
  {
    category: "Health & Wellness",
    description: "Supplement company targeting fitness enthusiasts",
    metrics: [
      { label: "Revenue Growth", value: "+290%", icon: DollarSign },
      { label: "Email Revenue", value: "38%", icon: Mail },
      { label: "Customer LTV", value: "+180%", icon: Users }
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Home & Garden",
    description: "Premium home decor and furniture retailer",
    metrics: [
      { label: "Monthly Email Rev", value: "$52K", icon: DollarSign },
      { label: "Click Rate", value: "9.4%", icon: Mail },
      { label: "List Engagement", value: "+320%", icon: TrendingUp }
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    category: "Technology",
    description: "SaaS platform for e-commerce optimization",
    metrics: [
      { label: "Trial Conversions", value: "+420%", icon: TrendingUp },
      { label: "Email CTR", value: "11.2%", icon: Mail },
      { label: "Revenue Share", value: "29%", icon: DollarSign }
    ],
    color: "from-indigo-500 to-purple-400"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            A Bit Of The <span className="text-gradient">Work We've Done</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            So far, we've handled the email marketing operations of over 10 brands in a variety of DTC niches.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workExamples.map((work, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-card to-muted/10"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${work.color}`}></div>
              
              <div className="p-6">
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="mb-4 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20"
                >
                  {work.category}
                </Badge>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Metrics */}
                <div className="space-y-4">
                  {work.metrics.map((metric, metricIndex) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={metricIndex} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                        </div>
                        <span className="font-bold text-foreground">{metric.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-gradient mb-2">10+</div>
            <div className="text-muted-foreground">Brands Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-gradient mb-2">$2M+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-gradient mb-2">6</div>
            <div className="text-muted-foreground">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-gradient mb-2">90%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;