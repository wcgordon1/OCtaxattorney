import { Award, BadgeCheck, BookOpen, Clock, ShieldCheck, Users } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={36} className="text-dark-orange" />,
    title: "Tax Attorney-Client Privilege",
    description: "Unlike CPAs or tax preparers, communications with our tax attorneys are protected by attorney-client privilege."
  },
  {
    icon: <Award size={36} className="text-dark-orange" />,
    title: "Specialized Expertise",
    description: "Our team includes former IRS officers and tax court litigators with insider knowledge of IRS procedures."
  },
  {
    icon: <Clock size={36} className="text-dark-orange" />,
    title: "Immediate Protection",
    description: "We can quickly file Power of Attorney forms to halt aggressive collection actions while we resolve your case."
  },
  {
    icon: <Users size={36} className="text-dark-orange" />,
    title: "Personal Attention",
    description: "You'll work directly with a senior tax attorney, not be passed to junior associates or support staff."
  },
  {
    icon: <BookOpen size={36} className="text-dark-orange" />,
    title: "Educational Approach",
    description: "We explain complex tax matters clearly, ensuring you understand your options and the resolution process."
  },
  {
    icon: <BadgeCheck size={36} className="text-dark-orange" />,
    title: "Transparent Flat-Fee Structure",
    description: "No surprise bills or hidden costs—we provide clear, upfront pricing for our tax resolution services."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Why Choose Us</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            When facing tax problems, having the right representation makes all the difference. Here's why our clients trust us with their most sensitive tax matters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-yellow-orange transform hover:-translate-y-1 duration-300">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-serif font-bold text-dark-brown mb-2">{benefit.title}</h3>
              <p className="text-dark-brown/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
