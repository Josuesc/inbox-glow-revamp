import { Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:jc@inboxcashflow.com";
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="font-display font-bold text-2xl">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Inbox Cash Flow
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              We help 7-figure ecom brands scale their profits by predictably grossing 20%-41% 
              of their monthly revenue just from email marketing.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-secondary" />
              <button 
                onClick={handleEmailClick}
                className="text-background/80 hover:text-secondary transition-colors"
              >
                jc@inboxcashflow.com
              </button>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background">Our Services</h3>
            <ul className="space-y-3 text-background/80">
              <li>Email Marketing Strategy</li>
              <li>Email Flow Development</li>
              <li>List Segmentation</li>
              <li>A/B Testing & Optimization</li>
              <li>Performance Analytics</li>
              <li>Deliverability Consulting</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background">Quick Links</h3>
            <ul className="space-y-3 text-background/80">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('process');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('cases');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © {currentYear} Inbox Cash Flow. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <span>Specialized in 7-Figure Ecom Email Marketing</span>
              <div className="flex items-center space-x-1">
                <span>Powered by Results</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-8 text-background/40 text-sm">
            <span>✓ 90% Client Retention Rate</span>
            <span>✓ $2M+ Revenue Generated</span>
            <span>✓ 10+ Brands Served</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;