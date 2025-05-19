import { ArrowRight, Map, MapPin, Navigation } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { locationData } from '../data/locationData';
import Navbar from './Navbar';
import Footer from './Footer';
import DisclaimerBanner from './DisclaimerBanner';
import { useEffect } from 'react';

export default function LocationsHub() {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-dark-brown">
      <Navbar />
      <DisclaimerBanner />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-dark-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-orange/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-brown mb-6">
              Our <span className="text-dark-orange">Orange County</span> Locations
            </h1>
            <p className="text-xl text-dark-brown/80 mb-8">
              We provide specialized tax resolution services throughout Orange County, with deep local knowledge of each community's unique tax situations and business environment.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Map className="text-dark-orange" size={24} />
              <span className="text-dark-brown/80">6 locations serving all of Orange County</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationData.map((location) => (
              <Link
                key={location.id}
                to={`/locations/${location.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: location.heroImage ? `url(${location.heroImage})` : 'linear-gradient(to bottom right, #f5f5f5, #e0e0e0)' }}
                >
                  <div className="w-full h-full bg-dark-brown/30 flex items-center justify-center transition-all group-hover:bg-dark-brown/20">
                    <h2 className="text-white text-3xl font-serif font-bold drop-shadow-lg">{location.name}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-dark-orange mr-2" size={18} />
                    <span className="text-dark-brown/70">{location.county}</span>
                  </div>
                  
                  <p className="text-dark-brown/80 mb-4 line-clamp-3">
                    {location.description}
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-dark-brown mb-2">Key Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {location.keyIndustries.slice(0, 3).map((industry, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-cream text-dark-brown/80 text-xs rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                      {location.keyIndustries.length > 3 && (
                        <span className="px-3 py-1 bg-cream text-dark-brown/80 text-xs rounded-full">
                          +{location.keyIndustries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-cream">
                    <div>
                      <span className="text-dark-brown/60 text-sm">Population</span>
                      <p className="text-dark-brown font-medium">{location.population}</p>
                    </div>
                    <Link
                      to={`/locations/${location.id}`}
                      className="flex items-center text-dark-orange hover:text-dark-orange/80 font-medium transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-cream p-8 rounded-lg max-w-5xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-dark-brown mb-4 text-center">
              Don't See Your City?
            </h2>
            <p className="text-dark-brown/80 text-center mb-6">
              We serve clients throughout all of Orange County, including cities not listed above.
              Our tax attorneys have extensive experience with the unique tax issues facing residents 
              and businesses across the entire region.
            </p>
            <div className="flex justify-center">
              <Link to="/#contact" className="btn-primary flex items-center">
                Contact Us <Navigation className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">
            Our Services Available Across Orange County
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'IRS Audit Defense', url: '/services/irs-audit-defense' },
              { title: 'Tax Debt Resolution', url: '/services/tax-debt-resolution' },
              { title: 'Tax Lien & Levy Relief', url: '/services/tax-lien-levy' },
              { title: 'Business Tax Issues', url: '/services/business-tax' },
              { title: 'Tax Planning', url: '/services/tax-planning' },
              { title: 'Tax Court Representation', url: '/services/tax-court' },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.url}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-dark-orange"
              >
                <h3 className="text-xl font-serif font-bold text-dark-brown mb-2">{service.title}</h3>
                <p className="text-dark-brown/80 mb-4">
                  Our {service.title.toLowerCase()} services are available to clients in all Orange County locations.
                </p>
                <span className="text-dark-orange hover:text-dark-orange/80 font-medium flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
