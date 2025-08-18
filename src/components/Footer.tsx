import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted via-secondary/20 to-accent/30 py-12">
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
            onClick={() => window.open('https://forms.gle/Vtb4Q2EZhBxg8iKC7', '_blank')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-16 py-6 h-auto font-light border-0"
          >
            Apply For Your Free Audit
          </Button>
          
          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-center pt-4 border-t border-muted-foreground/20 w-full">
            © 2022 Inbox Cash Flow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;