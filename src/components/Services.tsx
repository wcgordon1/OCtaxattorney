import { Briefcase, Building, ChartBar, ChevronRight, CircleAlert, FileText, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield size={36} className="text-dark-orange animate-pulse-slow" />,
    title: "IRS Audit Defense",
    description: "Professional representation during IRS audits, ensuring your rights are protected and minimizing financial impact."
  },
  {
    icon: <FileText size={36} className="text-dark-orange" />,
    title: "Tax Debt Resolution",
    description: "Negotiate favorable settlements through Offers in Compromise, Installment Agreements, and Currently Not Collectible status."
  },
  {
    icon: <CircleAlert size={36} className="text-dark-orange" />,
    title: "Tax Lien & Levy Relief",
    description: "Swift action to remove tax liens and stop wage garnishments, bank levies, and property seizures."
  },
  {
    icon: <Building size={36} className="text-dark-orange" />,
    title: "Business Tax Issues",
    description: "Complete resolution services for payroll tax problems, sales tax issues, and business income tax concerns."
  },
  {
    icon: <ChartBar size={36} className="text-dark-orange" />,
    title: "Tax Planning",
    description: "Strategic tax planning to minimize future tax liability for individuals and businesses in Orange County."
  },
  {
    icon: <Briefcase size={36} className="text-dark-orange" />,
    title: "Tax Court Representation",
    description: "Experienced litigation in U.S. Tax Court, handling complex disputes with skilled advocacy."
  }
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fadeIn');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Our Tax Resolution Services</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            We provide comprehensive tax resolution services to individuals and businesses throughout Orange County, helping you navigate complex tax issues.
          </p>
        </div>
        
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card opacity-0" style={{animationDelay: `${index * 150}ms`}}>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold text-dark-brown mb-2">{service.title}</h3>
              <p className="text-dark-brown/80">{service.description}</p>
              {index === 0 && (
                <Link to="/services/irs-audit-defense" className="text-dark-orange hover:text-dark-orange/80 font-medium mt-3 inline-flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              )}
              {index === 1 && (
                <Link to="/services/tax-debt-resolution" className="text-dark-orange hover:text-dark-orange/80 font-medium mt-3 inline-flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
