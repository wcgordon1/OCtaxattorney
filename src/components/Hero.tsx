import { ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 md:pt-24 lg:pt-28 hero-pattern">
      <div className="container mx-auto px-4 py-10 md:py-32">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-brown mb-4">
              Orange County <span className="text-dark-orange">Tax Attorney</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-brown/80 mb-8 max-w-xl">
              Facing tax problems? Our specialized attorneys have helped hundreds of Orange County residents and businesses resolve complex tax issues with the IRS and state. This domain name is for sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="contact" smooth={true} duration={500} className="btn-primary flex items-center justify-center whitespace-nowrap">
                Free Consultation <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link to="services" smooth={true} duration={500} className="btn-secondary flex items-center justify-center whitespace-nowrap">
                Our Services <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-cream flex items-center justify-center text-dark-brown font-semibold text-xs transform transition-transform duration-300 hover:scale-110 hover:z-10 hover:rotate-12 hover:border-yellow-orange"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-dark-brown font-medium">Trusted by 500+ clients in Orange County</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative md:h-[500px] bg-gradient-to-br from-dark-orange/20 to-cream border-0 md:border md:border-yellow-orange/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-dark-orange mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">99%</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-dark-brown mb-2">Success Rate</h3>
                  <p className="text-dark-brown/80">
                    Our tax resolution specialists have successfully resolved 95% of cases with significant savings for our clients. 
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    {['IRS Settlements', 'Tax Liens Removed', 'Penalties Waived'].map((item) => (
                      <div key={item} className="flex items-center bg-white/80 p-3 rounded-md">
                        <div className="w-4 h-4 rounded-full bg-dark-orange mr-3" />
                        <span className="font-medium text-dark-brown">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
