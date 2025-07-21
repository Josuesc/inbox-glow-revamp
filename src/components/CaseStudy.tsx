import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Mail, DollarSign, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="cases" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real clients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Case Study */}
        <Card className="max-w-5xl mx-auto border-0 shadow-card bg-gradient-to-br from-card to-muted/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Case Study Image/Visual */}
            <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                  <Mail className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">The Wrap Life</h3>
                <Badge className="bg-white/20 text-white border-white/30">
                  Hair & Beauty
                </Badge>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 animate-float">
                <DollarSign className="w-8 h-8 text-white/30" />
              </div>
              <div className="absolute bottom-8 right-8 animate-float delay-1000">
                <TrendingUp className="w-10 h-10 text-white/30" />
              </div>
            </div>

            {/* Case Study Content */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  From $7k/month to $30k/month in 90 days!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A hair accessories brand struggling with email performance transformed their revenue 
                  stream through strategic email marketing optimization.
                </p>
              </div>

              {/* Before & After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Before */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-destructive flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Before Inbox Cash Flow
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Flows Revenue:</span>
                      <span className="font-semibold">$0/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Campaigns:</span>
                      <span className="font-semibold">$6k-$7k/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Klaviyo:</span>
                      <span className="font-semibold">$7k/month</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Their setup was completely wrong
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    After Inbox Cash Flow
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Flows Revenue:</span>
                      <span className="font-semibold text-green-600">$7k/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Campaigns:</span>
                      <span className="font-semibold text-green-600">$23k/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Klaviyo:</span>
                      <span className="font-semibold text-green-600">$30k/month</span>
                    </div>
                    <p className="text-xs text-green-600 mt-2">
                      328% increase in 90 days
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">+328%</div>
                  <div className="text-xs text-green-700">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">90</div>
                  <div className="text-xs text-blue-700">Days to Results</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">$23k</div>
                  <div className="text-xs text-purple-700">Monthly Increase</div>
                </div>
              </div>

              {/* CTA */}
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 hover:shadow-glow transition-all duration-300"
              >
                Get Similar Results for Your Brand
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Additional Case Study Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 text-center border-0 shadow-soft bg-gradient-to-br from-card to-muted/10">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Average ROI</h3>
            <div className="text-3xl font-black text-gradient mb-2">1,200%</div>
            <p className="text-sm text-muted-foreground">
              Return on investment within 90 days
            </p>
          </Card>

          <Card className="p-6 text-center border-0 shadow-soft bg-gradient-to-br from-card to-muted/10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Revenue %</h3>
            <div className="text-3xl font-black text-gradient mb-2">20-41%</div>
            <p className="text-sm text-muted-foreground">
              Of total monthly revenue from email
            </p>
          </Card>

          <Card className="p-6 text-center border-0 shadow-soft bg-gradient-to-br from-card to-muted/10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Time to Results</h3>
            <div className="text-3xl font-black text-gradient mb-2">90</div>
            <p className="text-sm text-muted-foreground">
              Days or less to see significant improvement
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;