import { Check, ChevronRight, Mail, MapPin, Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SeoMeta from './SeoMeta';
import { useEffect } from 'react';

interface ServicePageProps {
  title: string;
  description: string;
  benefits: string[];
  process: string[];
  orangeCountyInfo: string;
  heroImage: string;
  faqs: {question: string; answer: string}[];
}

export default function ServicePageTemplate({
  title,
  description,
  benefits,
  process,
  orangeCountyInfo,
  heroImage,
  faqs
}: ServicePageProps) {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-dark-brown">
      <Navbar />
      <div className="h-[72px]"></div>
      
      {/* Hero Section */}
      <section className="pt-16 relative" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              {title} in <span className="text-yellow-orange">Orange County</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="btn-primary flex items-center justify-center">
                Get a Free Consultation <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link to="/#services" className="btn-secondary flex items-center justify-center bg-white text-dark-orange">
                Explore All Services <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="section-title">About Our {title} Services</h2>
              <p className="text-dark-brown/80 mb-8">
                {description} Our specialized tax attorneys have extensive experience helping Orange County residents
                and businesses with all aspects of {title.toLowerCase()}.
              </p>
              
              <div className="bg-cream p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4">{title} in Orange County</h3>
                <p className="text-dark-brown/80 mb-6">{orangeCountyInfo}</p>
                
                <div className="p-4 bg-white/70 rounded-md border-l-4 border-dark-orange">
                  <h4 className="font-medium text-dark-brown mb-2">Why Local Expertise Matters</h4>
                  <p className="text-dark-brown/80 text-sm">
                    Orange County's unique economic landscape creates specific tax challenges and opportunities. 
                    Our attorneys combine knowledge of federal tax law with deep understanding of local factors
                    affecting Orange County taxpayers.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-dark-brown mb-6">Our {title} Process</h3>
              <div className="space-y-6 mb-12">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-dark-orange text-white flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="bg-cream p-5 rounded-lg flex-grow">
                      <p className="text-dark-brown/80">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-dark-brown mb-6">
                Frequently Asked Questions About {title}
              </h3>
              <div className="space-y-4 mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-cream p-6 rounded-lg">
                    <h4 className="text-lg font-serif font-bold text-dark-brown mb-2">{faq.question}</h4>
                    <p className="text-dark-brown/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-cream p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-serif font-bold text-dark-brown mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-dark-orange mr-2 mt-1 flex-shrink-0" />
                      <span className="text-dark-brown/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/#contact" className="btn-primary w-full flex items-center justify-center mb-4">
                  Free Consultation
                </Link>
                
                <div className="bg-dark-brown/5 p-4 rounded-md">
                  <h4 className="font-medium text-dark-brown mb-2 flex items-center">
                    <Users size={18} className="text-dark-orange mr-2" />
                    Service Areas
                  </h4>
                  <p className="text-dark-brown/70 text-sm">
                    We serve clients throughout Orange County, including Irvine, Newport Beach, 
                    Santa Ana, Anaheim, Tustin, and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4">
              Ready to Resolve Your Tax Issues?
            </h3>
            <p className="text-dark-brown/80 mb-6 max-w-2xl mx-auto">
              Our experienced tax attorneys are here to help you navigate the complexities of {title.toLowerCase()}.
              Schedule a consultation today to discuss your specific situation.
            </p>
            <Link to="/#contact" className="btn-primary inline-flex items-center">
              Contact Us Today <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
