import { ArrowRight, Briefcase, CheckCircle, ChevronRight, FileText, Gavel, Scale, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const services = [
  {
    id: 'irs-audit-defense',
    title: 'IRS Audit Defense',
    description: 'Expert representation during IRS audits to protect your rights and minimize potential tax liabilities.',
    icon: Shield,
    features: [
      'Professional representation during IRS audits',
      'Strategic response to IRS inquiries',
      'Documentation preparation and review',
      'Negotiation with IRS agents',
      'Appeal rights protection'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tax-debt-resolution',
    title: 'Tax Debt Resolution',
    description: 'Comprehensive solutions for resolving tax debt through various IRS programs and payment options.',
    icon: Scale,
    features: [
      'Offer in Compromise negotiations',
      'Installment agreement setup',
      'Currently Not Collectible status',
      'Penalty abatement requests',
      'Tax debt settlement strategies'
    ],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tax-lien-levy',
    title: 'Tax Lien & Levy Relief',
    description: 'Immediate assistance with IRS levies and liens to protect your assets and income.',
    icon: Gavel,
    features: [
      'Bank levy release',
      'Wage garnishment relief',
      'Property lien removal',
      'Asset protection strategies',
      'Emergency levy release'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'business-tax',
    title: 'Business Tax Issues',
    description: 'Specialized tax solutions for businesses of all sizes in Orange County.',
    icon: Briefcase,
    features: [
      'Business tax compliance',
      'Payroll tax resolution',
      'Sales tax issues',
      'Business entity selection',
      'Tax planning strategies'
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Proactive tax strategies to minimize liabilities and maximize opportunities.',
    icon: FileText,
    features: [
      'Year-round tax planning',
      'Retirement planning',
      'Investment tax strategies',
      'Estate tax planning',
      'Business succession planning'
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tax-court',
    title: 'Tax Court Representation',
    description: 'Expert representation in U.S. Tax Court for complex tax disputes.',
    icon: Gavel,
    features: [
      'Tax Court petition filing',
      'Case preparation and strategy',
      'Settlement negotiations',
      'Trial representation',
      'Appeal representation'
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Services() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-dark-brown">
      <Helmet>
        <title>Tax Services | Orange County Tax Attorney</title>
        <meta name="description" content="Comprehensive tax services for Orange County residents and businesses, including IRS audit defense, tax debt resolution, and tax planning." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-dark-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-orange/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-brown mb-6">
              Our <span className="text-dark-orange">Tax Services</span>
            </h1>
            <p className="text-xl text-dark-brown/80 mb-8">
              Comprehensive tax solutions for Orange County residents and businesses. Our experienced tax attorneys provide expert guidance through complex tax situations.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="text-dark-orange" size={24} />
              <span className="text-dark-brown/80">Trusted by thousands of Orange County clients</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="text-dark-orange" size={24} />
                    <h2 className="text-2xl font-serif font-bold text-dark-brown group-hover:text-dark-orange transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-dark-brown/70 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-dark-brown/80">
                        <CheckCircle size={16} className="text-dark-orange mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-dark-orange group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-brown mb-4">
              Why Choose Our Tax Services?
            </h2>
            <p className="text-dark-brown/80">
              Our team of experienced tax attorneys brings decades of combined experience in tax law and IRS representation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'local-expertise',
                title: 'Local Expertise',
                description: 'Deep understanding of Orange County tax issues and local business environment.'
              },
              {
                id: 'proven-results',
                title: 'Proven Results',
                description: 'Track record of successful tax resolutions for thousands of clients.'
              },
              {
                id: 'personal-attention',
                title: 'Personal Attention',
                description: 'Dedicated attorney assigned to your case with direct communication.'
              },
              {
                id: 'comprehensive-service',
                title: 'Comprehensive Service',
                description: 'Full range of tax services from planning to resolution.'
              }
            ].map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-dark-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-brown/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-dark-brown text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Resolve Your Tax Issues?
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a free consultation with our experienced tax attorneys to discuss your specific situation.
            </p>
            <Link 
              to="/#contact" 
              className="btn-primary bg-white text-dark-orange hover:bg-white/90 inline-flex items-center"
            >
              Get Started <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
