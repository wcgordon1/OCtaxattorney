import { ChevronRight, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { locationData } from '../data/locationData';

export default function LocationLinks() {
  const navigate = useNavigate();
  
  const navigateToLocation = (locationId: string) => {
    navigate(`/locations/${locationId}`);
    window.scrollTo(0, 0);
  };
  
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Serving All of Orange County</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            We provide specialized tax resolution services throughout Orange County. Select your city below to learn more about our local tax expertise.
          </p>
          <Link 
            to="/locations" 
            className="mt-4 text-dark-orange hover:text-dark-orange/80 font-medium inline-flex items-center"
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
          >
            View All Locations <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {locationData.map((location) => (
            <div 
              key={location.id}
              onClick={() => navigateToLocation(location.id)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-3 border-dark-orange transform hover:-translate-y-1 duration-300 flex items-start cursor-pointer"
            >
              <MapPin className="text-dark-orange mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-dark-brown text-lg">{location.name}</h3>
                <p className="text-dark-brown/70 text-sm mt-1">{location.keyIndustries.slice(0, 2).join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-dark-brown/80 italic mb-4">
            Don't see your city? We serve all Orange County locations.
          </p>
          <Link to="/#contact" className="btn-secondary inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
