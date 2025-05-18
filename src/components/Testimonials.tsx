import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael R.",
    location: "Irvine, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    stars: 5,
    text: "After receiving an IRS notice for $85,000 in back taxes, I was terrified. The Orange County Tax Attorney team negotiated an Offer in Compromise that settled my debt for just $12,000. Their expertise saved me thousands and gave me back my peace of mind."
  },
  {
    name: "Jennifer L.",
    location: "Newport Beach, CA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    stars: 5,
    text: "When my small business faced a payroll tax audit, I was overwhelmed. Their team guided me through every step, organized my documentation, and represented me brilliantly. The result was minimal adjustments and no penalties. I couldn't be more grateful."
  },
  {
    name: "David T.",
    location: "Huntington Beach, CA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    stars: 5,
    text: "I had tax liens affecting my credit and preventing me from refinancing my home. Within 60 days of hiring Orange County Tax Attorney, the liens were released. Their knowledge of IRS procedures and persistent advocacy made all the difference."
  }
];

export default function Testimonials() {
  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} size={18} className="fill-yellow-orange text-yellow-orange" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Client Success Stories</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            Don't just take our word for it—hear from our clients who have successfully resolved their tax issues and regained their financial freedom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-serif font-bold text-dark-brown">{testimonial.name}</h3>
                  <p className="text-dark-brown/60 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
              </div>
              <p className="text-dark-brown/80 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-cream p-8 rounded-lg text-center">
          <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4">Our Results in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-dark-orange text-4xl font-bold mb-2">95%</div>
              <p className="text-dark-brown font-medium">Success Rate</p>
            </div>
            <div className="p-4">
              <div className="text-dark-orange text-4xl font-bold mb-2">$40M+</div>
              <p className="text-dark-brown font-medium">Tax Debt Resolved</p>
            </div>
            <div className="p-4">
              <div className="text-dark-orange text-4xl font-bold mb-2">500+</div>
              <p className="text-dark-brown font-medium">Happy Clients</p>
            </div>
            <div className="p-4">
              <div className="text-dark-orange text-4xl font-bold mb-2">70%</div>
              <p className="text-dark-brown font-medium">Average Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
