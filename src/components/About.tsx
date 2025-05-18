export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px] bg-white border border-yellow-orange/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 md:p-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dark-orange mx-auto mb-4 md:mb-6 flex items-center justify-center">
                      <span className="text-white text-3xl md:text-4xl font-serif font-bold">25+</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-brown mb-3 md:mb-4">Years of Experience</h3>
                    <p className="text-dark-brown/80 mb-4 md:mb-6 text-sm md:text-base">
                      Our team brings over 25 years of specialized tax law experience to every case we handle.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                      <div className="bg-cream p-3 md:p-4 rounded-md text-center">
                        <div className="text-dark-orange text-xl md:text-2xl font-bold">500+</div>
                        <div className="text-dark-brown text-xs md:text-sm">Satisfied Clients</div>
                      </div>
                      <div className="bg-cream p-3 md:p-4 rounded-md text-center">
                        <div className="text-dark-orange text-xl md:text-2xl font-bold">$40M+</div>
                        <div className="text-dark-brown text-xs md:text-sm">Tax Debt Resolved</div>
                      </div>
                      <div className="bg-cream p-3 md:p-4 rounded-md text-center">
                        <div className="text-dark-orange text-xl md:text-2xl font-bold">95%</div>
                        <div className="text-dark-brown text-xs md:text-sm">Success Rate</div>
                      </div>
                      <div className="bg-cream p-3 md:p-4 rounded-md text-center">
                        <div className="text-dark-orange text-xl md:text-2xl font-bold">100%</div>
                        <div className="text-dark-brown text-xs md:text-sm">Commitment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-brown mb-4 md:mb-6">About Our Tax Law Firm</h2>
            <p className="text-dark-brown/80 mb-4 md:mb-6 text-sm md:text-base">
              At Orange County Tax Attorney, we're dedicated to providing exceptional tax resolution services to individuals and businesses throughout Orange County. Our practice combines expertise in tax law with personalized attention to deliver optimal results for our clients.
            </p>
            <p className="text-dark-brown/80 mb-4 md:mb-6 text-sm md:text-base">
              Our team consists of experienced tax attorneys, CPAs, and former IRS agents who understand the complexities of tax law from all perspectives. This unique combination of expertise allows us to develop effective strategies that protect our clients' interests while resolving their tax issues efficiently.
            </p>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-dark-orange mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-serif font-bold text-dark-brown mb-2">Our Mission</h3>
              <p className="text-dark-brown/80 text-sm md:text-base">
                To provide honest, effective, and affordable tax resolution services that help our clients achieve financial freedom from tax problems and establish sound tax practices for the future.
              </p>
            </div>
            <p className="text-dark-brown/80 text-sm md:text-base">
              Based in Orange County, we're familiar with local tax issues affecting California residents and businesses, while also handling federal tax matters nationwide. We pride ourselves on our accessibility, transparency, and the lasting relationships we build with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
