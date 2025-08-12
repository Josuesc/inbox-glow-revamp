import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="font-display font-bold text-xl">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Inbox Cash Flow
            </span>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 text-lg"
          >
            Apply For Your Free Audit
          </Button>
          
          {/* Copyright */}
          <div className="text-background/60 text-sm text-center pt-4 border-t border-background/20 w-full">
            © 2022 Inbox Cash Flow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;