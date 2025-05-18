import { Check } from 'lucide-react';
import { serviceData } from '../data/locationData';

export default function ServiceSection({ locationName }: { locationName: string }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Our Tax Services in {locationName}</h2>
        <p className="text-dark-brown/80 max-w-3xl mx-auto text-center mb-12">
          We provide comprehensive tax resolution services tailored to the specific needs of {locationName} residents and businesses.
        </p>
        
        <div className="space-y-16">
          {serviceData.map((service) => (
            <div key={service.id} className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4 relative">
                  <span className="inline-block pr-3">{service.title}</span>
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-dark-orange"></span>
                </h3>
                <p className="text-dark-brown/80 mb-6">
                  {service.description} Our {locationName} tax attorneys have extensive experience with local tax issues related to this service.
                </p>
                
                <div className="bg-cream p-6 rounded-lg">
                  <h4 className="text-lg font-serif font-semibold text-dark-brown mb-4">Benefits for {locationName} Clients</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-dark-orange mr-2 mt-1 flex-shrink-0" />
                        <span className="text-dark-brown/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white border border-yellow-orange/30 p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-serif font-semibold text-dark-brown mb-4">Our Process</h4>
                  <ol className="space-y-4">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-dark-orange text-white flex items-center justify-center mr-3 flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-dark-brown/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                  
                  <div className="mt-8 p-4 bg-cream/50 rounded-md border-t-2 border-dark-orange">
                    <h5 className="font-medium text-dark-brown mb-2">Why This Matters in {locationName}</h5>
                    <p className="text-dark-brown/80 text-sm">
                      {locationName} residents and businesses face unique challenges related to this service. 
                      Our local expertise ensures you receive targeted solutions that account for specific 
                      {locationName} tax considerations and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
