import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Contact Us</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            Ready to resolve your tax issues? Schedule a confidential consultation with our experienced tax attorneys.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-cream p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-serif font-bold text-dark-brown mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="text-dark-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-brown">Phone</h4>
                    <p className="text-dark-brown/80">(714) 555-5555</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-dark-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-brown">Email</h4>
                    <p className="text-dark-brown/80">sales@orangecountytaxattorney.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-dark-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-brown">Office</h4>
                    <p className="text-dark-brown/80">
                      555 Fake Street<br />
                      Newport Beach, CA 92660
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-dark-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-brown">Hours</h4>
                    <p className="text-dark-brown/80">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-dark-brown/5 rounded-md">
                <h4 className="font-semibold text-dark-brown mb-2">Service Areas</h4>
                <p className="text-dark-brown/80 text-sm">
                  We serve clients throughout Orange County, including Anaheim, Costa Mesa, Dana Point, Fullerton, 
                  Huntington Beach, Irvine, Laguna Beach, Mission Viejo, Newport Beach, Orange, San Clemente, 
                  Santa Ana, and Yorba Linda.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-md border border-yellow-orange/20">
              <h3 className="text-2xl font-serif font-bold text-dark-brown mb-6">**NOT A REAL FORM</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-dark-brown mb-1">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full p-3 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-dark-brown mb-1">Last Name*</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full p-3 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange/50"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-dark-brown mb-1">Email Address*</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange/50"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-dark-brown mb-1">Phone Number*</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange/50"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-dark-brown mb-1">Service Needed*</label>
                <select 
                  id="service"
                  className="w-full p-3 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange/50"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="audit">IRS Audit Defense</option>
                  <option value="debt">Tax Debt Resolution</option>
                  <option value="lien">Tax Lien & Levy Relief</option>
                  <option value="business">Business Tax Issues</option>
                  <option value="planning">Tax Planning</option>
                  <option value="court">Tax Court Representation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-brown mb-1">How Can We Help You?*</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-3 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange/50"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Not a Real Form
              </button>
              
              <p className="text-dark-brown/60 text-sm mt-4 text-center">
                This form does not work. We do not save your information nor send it anywhere. Your information is confidential because it doesn't work.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
