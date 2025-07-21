import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:jc@inboxcashflow.com";
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Book Your Initial <span className="text-gradient">Discovery Chat</span> Today!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your email marketing and generate 20%-41% of your monthly revenue from email? 
            Let's discuss how we can help your brand achieve these results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 border-0 shadow-card bg-gradient-to-br from-card to-muted/10">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <button 
                      onClick={handleEmailClick}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      jc@inboxcashflow.com
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Serving</div>
                    <div className="text-muted-foreground">7-Figure Ecom Brands Worldwide</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* What to Expect */}
            <Card className="p-8 border-0 shadow-soft bg-gradient-to-br from-card to-muted/10">
              <h3 className="text-xl font-bold mb-6">What to Expect:</h3>
              <div className="space-y-4">
                {[
                  "Free 30-minute discovery call",
                  "Email account audit & recommendations", 
                  "Custom strategy overview",
                  "ROI projections for your brand",
                  "No obligation consultation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-card bg-gradient-to-br from-card to-muted/10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <Input 
                    placeholder="Your Company" 
                    required 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Revenue</label>
                  <Input 
                    placeholder="e.g., $100K/month" 
                    required 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Email Platform</label>
                  <Input 
                    placeholder="e.g., Klaviyo, Mailchimp, etc." 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your goals</label>
                  <Textarea 
                    placeholder="What are your main challenges with email marketing? What results are you hoping to achieve?"
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 hover:shadow-glow transition-all duration-300"
                >
                  Send Message & Book Discovery Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest. We'll review your information and get back to you within 24 hours 
                  to schedule your discovery call.
                </p>
                <Button 
                  onClick={handleEmailClick}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us Directly
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-8">
            Join the 10+ brands that trust us with their email marketing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">90+ Days</div>
              <div className="text-sm text-muted-foreground">Average time to results</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">1,200%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Revenue generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;