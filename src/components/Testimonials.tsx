import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eduardo Neves & Mariana Rabelo",
    title: "Owners of Embuarama Craft Beer",
    content: "Man, you're a genius! Working with you guys brought us security, tranquility, and confidence that we were on the right path. Most importantly: you brought us RESULTS!",
    rating: 5,
    image: "/lovable-uploads/ae6b6cf1-bbcb-4564-beac-641756d115e5.png"
  },
  {
    name: "Matt Lloyd",
    title: "Owner of Moving To Costa Rica",
    content: "Over the past decade, I have invested several hundred thousand dollars into copy. Over that period of time, there were just a few copywriters I consistently went back to. JC is one of the rare ones, where I'd bring him an offer, and we were able to craft compelling copy every single time.",
    rating: 5,
    image: "/lovable-uploads/9ed4b69d-e9bf-4445-aa1b-373453ba86d9.png"
  },
  {
    name: "Lisa Ormenyessy",
    title: "Owner of OMGhee",
    content: "Working with JC was a breeze. Often when you hire consultants it's a frustrating process with the transfer of knowledge required for good copy, but JC did his research and just 'got it'. I'm already seeing results in my account.",
    rating: 5,
    image: "/lovable-uploads/56e57e3d-0ad4-4f15-9b0b-8520ba92303c.png"
  },
  {
    name: "Sanmeet Walia",
    title: "Owner of DataVinci",
    content: "Anything but a disappointment. Their professional and efficient work style, knowledge, and experience in email marketing (especially JC's) make them an asset to any brand.",
    rating: 5,
    image: "/lovable-uploads/456823e5-d575-40b2-aba6-f4969a11cc65.png"
  },
  {
    name: "Fernando Ziemmer",
    title: "Owner of GenioDesk",
    content: "My favorite parts about working with Inbox Cash Flow: Creativity, Punctuality, Reliability, Methodology, Results.",
    rating: 5,
    image: "/lovable-uploads/5638bf3b-4f5c-4c6b-a353-d4bd441bdd2b.png"
  },
  {
    name: "Victor Abreu",
    title: "Owner of VC Institute",
    content: "Surprisingly entertaining and persuasive sales letter. J.C. and his team delivered it in only 10 days! And their copy converted more sales than my previous one.",
    rating: 5,
    image: "/lovable-uploads/2348a6d8-938e-415e-b162-921a36798bd4.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gradient">
            Don't Trust Us. Trust Them Instead...
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-gradient-to-br from-card to-muted/20"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
