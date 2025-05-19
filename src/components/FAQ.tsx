import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "When should I hire a tax attorney instead of a CPA in Orange County?",
    answer: "Orange County residents should consider hiring a tax attorney when facing IRS audits, tax fraud allegations, significant tax debt, or potential criminal charges. Unlike CPAs, our Orange County tax attorneys offer attorney-client privilege, can represent you in Tax Court, and have extensive experience with local tax issues and IRS negotiations specific to our region."
  },
  {
    question: "How much does it cost to hire a tax attorney in Orange County?",
    answer: "Our Orange County tax resolution services typically range from $2,500 to $7,500, depending on the complexity of your case. We offer transparent flat-fee pricing structures, so you'll know exactly what to expect before engaging our services. Our payment plans are designed to accommodate Orange County's cost of living while providing access to expert tax representation."
  },
  {
    question: "How long does it take to resolve tax problems in Orange County?",
    answer: "Most tax resolution cases in Orange County take between 3-9 months to fully resolve. Simple penalty abatement requests may resolve in 30-60 days, while complex Offers in Compromise or Tax Court litigation can take 12+ months. Our local experience with the IRS and California tax authorities allows us to provide accurate timelines based on your specific situation in Orange County."
  },
  {
    question: "Can you stop the IRS from garnishing my wages or levying my accounts in Orange County?",
    answer: "Yes. As experienced Orange County tax attorneys, we can immediately file a Power of Attorney (Form 2848) and request collection holds while we work on a resolution. In many cases, we can get levies and garnishments released within 24-72 hours, even before the underlying tax issue is resolved. We've successfully helped numerous Orange County residents protect their income and assets from IRS collection actions."
  },
  {
    question: "Do I qualify for an Offer in Compromise to settle my tax debt in Orange County?",
    answer: "Eligibility for an Offer in Compromise depends on your financial situation, ability to pay, income, expenses, asset equity, and other factors. The IRS accepts offers when the amount proposed represents the most they can reasonably collect. Our Orange County tax attorneys understand how local factors like high property values and cost of living affect these calculations, and we'll evaluate your specific circumstances to determine if you're a good candidate."
  },
  {
    question: "What happens if I haven't filed tax returns for several years in Orange County?",
    answer: "If you haven't filed returns for multiple years, we recommend addressing this immediately. Our Orange County tax attorneys can help prepare and file your delinquent returns, often negotiating to minimize penalties. Voluntary disclosure before the IRS contacts you typically results in better outcomes. Non-filing can lead to serious consequences including substantial penalties, criminal charges, and inability to discharge tax debt in bankruptcy. We've helped numerous Orange County residents resolve their unfiled tax returns successfully."
  },
  {
    question: "How do Orange County's high property values affect tax resolution options?",
    answer: "Orange County's high property values can significantly impact tax resolution strategies. While they may increase your asset value in IRS calculations, our attorneys are experienced in navigating these challenges. We can help structure payment plans that account for Orange County's high cost of living and explore options like installment agreements that consider local housing costs."
  },
  {
    question: "What are the most common tax issues for Orange County business owners?",
    answer: "Orange County business owners commonly face issues with payroll taxes, sales tax compliance, and business entity selection. Our attorneys specialize in helping local businesses navigate California's complex tax environment, including the Franchise Tax Board requirements and local business license taxes. We've helped numerous businesses in Irvine, Newport Beach, and throughout Orange County resolve these issues."
  },
  {
    question: "How does Proposition 19 affect tax planning for Orange County homeowners?",
    answer: "Proposition 19 significantly impacts property tax transfers in Orange County. Our tax attorneys help homeowners navigate these changes, particularly for parent-child transfers and inherited properties. We can assist with proper documentation, timing of transfers, and exploring alternative strategies to minimize tax implications while complying with California's new property tax rules."
  },
  {
    question: "What tax relief options are available for Orange County residents affected by natural disasters?",
    answer: "Orange County residents affected by natural disasters may qualify for special tax relief programs. This includes extended filing deadlines, penalty abatement, and casualty loss deductions. Our attorneys stay current with all disaster-related tax provisions and can help you maximize available relief options while ensuring proper documentation for your claims."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Create structured data for FAQs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-cream">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta property="og:image" content="/octax.png" />
      </Helmet>

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
              key={`faq-${index}`} 
              className="mb-4 border border-yellow-orange/30 rounded-lg overflow-hidden bg-white"
            >
              <button
                type="button"
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
          <button type="button" className="btn-primary">
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  );
}
