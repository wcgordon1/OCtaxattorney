import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "When should I hire a tax attorney instead of a CPA?",
    answer: "You should consider hiring a tax attorney when facing IRS audits, tax fraud allegations, significant tax debt, or potential criminal charges. Unlike CPAs, tax attorneys offer attorney-client privilege, can represent you in Tax Court, and typically have more expertise in tax dispute resolution and negotiation."
  },
  {
    question: "How much does it cost to hire a tax attorney?",
    answer: "Our tax resolution services typically range from $2,500 to $7,500, depending on the complexity of your case. We offer transparent flat-fee pricing structures, so you'll know exactly what to expect before engaging our services. We provide payment plans to help make our services more accessible."
  },
  {
    question: "How long does it take to resolve tax problems?",
    answer: "Most tax resolution cases take between 3-9 months to fully resolve. Simple penalty abatement requests may resolve in 30-60 days, while complex Offers in Compromise or Tax Court litigation can take 12+ months. During your consultation, we'll provide a realistic timeline based on your specific situation."
  },
  {
    question: "Can you stop the IRS from garnishing my wages or levying my accounts?",
    answer: "Yes. Upon engagement, we can immediately file a Power of Attorney (Form 2848) and request collection holds while we work on a resolution. In many cases, we can get levies and garnishments released within 24-72 hours, even before the underlying tax issue is resolved."
  },
  {
    question: "Do I qualify for an Offer in Compromise to settle my tax debt?",
    answer: "Eligibility for an Offer in Compromise depends on your financial situation, ability to pay, income, expenses, asset equity, and other factors. The IRS accepts offers when the amount proposed represents the most they can reasonably collect. During your consultation, we'll evaluate your specific circumstances to determine if you're a good candidate."
  },
  {
    question: "What happens if I haven't filed tax returns for several years?",
    answer: "If you haven't filed returns for multiple years, we recommend addressing this immediately. We can help prepare and file your delinquent returns, often negotiating to minimize penalties. Voluntary disclosure before the IRS contacts you typically results in better outcomes. Non-filing can lead to serious consequences including substantial penalties, criminal charges, and inability to discharge tax debt in bankruptcy."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            Get answers to common questions about tax problems, IRS procedures, and how our tax attorneys can help resolve your specific situation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-yellow-orange/30 rounded-lg overflow-hidden bg-white"
            >
              <button
                className="w-full text-left p-5 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-serif font-semibold text-dark-brown">{faq.question}</h3>
                {activeIndex === index ? 
                  <ChevronUp className="text-dark-orange flex-shrink-0" /> : 
                  <ChevronDown className="text-dark-orange flex-shrink-0" />
                }
              </button>
              <div 
                className={`px-5 transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-dark-brown/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-dark-brown/80 mb-6">
            Have a question that's not answered here? Contact us for a personalized response.
          </p>
          <button className="btn-primary">
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  );
}
