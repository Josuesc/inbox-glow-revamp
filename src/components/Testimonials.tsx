import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eduardo Neves",
    title: "Owner of Embuarama Craft Beer",
    content: "Working with you brought me security, tranquility, and confidence I was on the right path. Most importantly: you brought me RESULTS!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Matt Lloyd",
    title: "Serial entrepreneur, owner of movingtocostarica.com",
    content: "Over the past decade, I have invested several hundred thousand dollars into copy. JC is one of the rare ones, where I'd bring him an offer, and we were able to craft compelling copy every single time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mariana Rabelo",
    title: "Owner of Embu Consulting",
    content: "Man, you're a genius! I really want to keep you on my team. I have no doubt that we can make a lot of money together.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b129?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sanmeet Walia",
    title: "Owner of DataVinci",
    content: "JC is anything but a disappointment. His professional and efficient work style, knowledge and experience in email marketing make him an asset to any team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Aakash Gandhi",
    title: "Owner of Workik",
    content: "JC has a very methodical approach to his work. He calmly listens, understands, and suggests high-value pointers. Communication is top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Victor Abreu",
    title: "Personal brand owner",
    content: "Surprisingly entertaining and persuasive email funnel — J.C. and his team delivered it in only 10 days! Their copy converted more sales than my previous one.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gradient">
            Hear what our clients have to say about us
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