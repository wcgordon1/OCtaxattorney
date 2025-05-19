import { MapPin, ChevronRight } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { locationData, serviceData } from '../data/locationData';
import Footer from './Footer';
import SeoMeta from './SeoMeta';
import { useEffect } from 'react';
import Navbar from './Navbar';

export default function LocationPage() {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();
  
  const location = locationData.find(loc => loc.id === locationId);
  
  // Scroll to top when component mounts or locationId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationId]);
  
  if (!location) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <h2 className="text-2xl font-serif font-bold text-dark-brown mb-4">Location Not Found</h2>
        <p className="text-dark-brown/80 mb-6">The location you're looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate('/')}
          className="btn-primary"
        >
          Return Home
        </button>
      </div>
    );
  }

  // Create location-specific structured data
  const locationSchema = location ? {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `Orange County Tax Attorney - ${location.name}`,
    "description": `Professional tax attorney services in ${location.name}, Orange County. Expert resolution for IRS audits, tax debt, liens, and planning.`,
    "url": `https://orangecountytaxattorney.com/locations/${location.id}`,
    "image": location.heroImage,
    "telephone": "(714) 555-1234",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6189,
      "longitude": -117.9298
    },
    "areaServed": {
      "@type": "City",
      "name": location.name
    }
  } : null;
  
  // Create breadcrumbs for structured data
  const breadcrumbs = location ? [
    { name: "Home", item: "https://orangecountytaxattorney.com/" },
    { name: "Locations", item: "https://orangecountytaxattorney.com/locations" },
    { name: location.name, item: `https://orangecountytaxattorney.com/locations/${location.id}` }
  ] : [];

  return (
    <div className="font-sans text-dark-brown">
      {location && (
        <SeoMeta
          title={`Tax Attorney Services in ${location.name} | Orange County Tax Attorney`}
          description={`Expert tax resolution services for ${location.name} residents and businesses. Our local tax attorneys help with IRS audits, tax debt, and more.`}
          keywords={`${location.name} tax attorney, tax lawyer ${location.name}, IRS help ${location.name}, tax debt resolution ${location.name}, Orange County tax attorney`}
          canonicalUrl={`https://orangecountytaxattorney.com/locations/${location.id}`}
          ogImage={location.heroImage}
          breadcrumbs={breadcrumbs}
          schemaData={locationSchema}
        />
      )}
      {/* Custom Navbar for Location Pages */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 relative" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${location.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Tax Attorney Services in <span className="text-yellow-orange">{location.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Specialized tax resolution services for {location.name} residents and businesses. Our local expertise helps you navigate federal and state tax issues with confidence.
            </p>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-dark-brown mb-4">About {location.name}</h2>
              <p className="text-dark-brown/80 mb-4">{location.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <MapPin className="text-dark-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark-brown">Location</h3>
                    <p className="text-dark-brown/80">{location.county}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-dark-brown">Population</h3>
                    <p className="text-dark-brown/80">{location.population}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-dark-brown">Median Income</h3>
                    <p className="text-dark-brown/80">{location.medianIncome}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-dark-brown">Key Industries</h3>
                    <p className="text-dark-brown/80">{location.keyIndustries.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tax Information Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="section-title">Tax Situation in {location.name}</h2>
            <p className="text-dark-brown/80 mb-6">{location.taxInfo}</p>
            
            <h3 className="text-xl font-serif font-bold text-dark-brown mb-4">Common Tax Issues in {location.name}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {location.commonTaxIssues.map((issue, index) => (
                <div key={index} className="flex items-center bg-cream p-4 rounded-md">
                  <div className="w-3 h-3 rounded-full bg-dark-orange mr-3"></div>
                  <span className="text-dark-brown/80">{issue}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 border-l-4 border-dark-orange bg-cream/50 rounded-r-md">
              <h3 className="text-xl font-serif font-bold text-dark-brown mb-2">Local Tax Expertise</h3>
              <p className="text-dark-brown/80">
                Our tax attorneys understand the unique tax challenges facing {location.name} residents and businesses. 
                We combine our deep knowledge of federal and state tax law with local insights to provide targeted solutions 
                for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">Our Tax Services in {location.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id === 'audit-defense' ? 'irs-audit-defense' : 
                     service.id === 'debt-resolution' ? 'tax-debt-resolution' :
                     service.id === 'lien-levy-relief' ? 'tax-lien-levy' :
                     service.id === 'business-tax' ? 'business-tax' :
                     service.id === 'tax-planning' ? 'tax-planning' : 'tax-court'}`}
                className="service-card group"
              >
                <h3 className="text-xl font-serif font-bold text-dark-brown mb-3 group-hover:text-dark-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-brown/70 mb-4 text-sm">{service.description}</p>
                <span className="text-dark-orange font-medium text-sm inline-flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-dark-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Get Expert Tax Help in {location.name} Today
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our specialized tax attorneys are ready to help you resolve your tax issues. Schedule a confidential consultation to discuss your situation.
          </p>
          <button 
            onClick={() => {
              navigate('/#contact');
              setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
            }}
            className="btn-primary bg-yellow-orange hover:bg-yellow-orange/90 text-dark-brown"
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
