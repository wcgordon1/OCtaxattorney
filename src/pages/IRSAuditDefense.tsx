import ServicePageTemplate from '../components/ServicePageTemplate';
import { Helmet } from 'react-helmet';
import SeoMeta from '../components/SeoMeta';

export default function IRSAuditDefense() {
  const pageData = {
    title: "IRS Audit Defense",
    description: "Professional representation during IRS audits, ensuring your rights are protected and minimizing financial impact on Orange County individuals and businesses.",
    benefits: [
      "Protection from aggressive IRS tactics during the audit process",
      "Strategic preparation and presentation of documentation",
      "Attorney-client privilege protects your sensitive information",
      "Representation by former IRS agents who understand audit procedures",
      "Minimized adjustments and penalties",
      "Clear communication throughout the audit process"
    ],
    process: [
      "We begin with a comprehensive review of your audit notice, tax returns, and supporting documentation to identify potential issues and develop a strategic defense plan.",
      "Our team compiles and organizes all necessary documentation, ensuring it supports your tax positions while protecting you from providing unnecessary information.",
      "We handle all communications with the IRS examiner, including scheduling meetings, responding to information requests, and advocating for your positions.",
      "If we disagree with the examiner's findings, we navigate the appeals process, presenting your case before the IRS Office of Appeals or in Tax Court if necessary.",
      "After resolving the audit, we provide guidance on tax planning strategies to minimize the risk of future audits and ensure ongoing compliance."
    ],
    orangeCountyInfo: "Orange County residents and businesses face unique challenges during IRS audits. With high-income neighborhoods in Newport Beach and Coto De Caza, luxury property ownership in Laguna Beach, and significant business activity in Irvine and Anaheim, local taxpayers often face increased scrutiny. The IRS frequently targets high-income earners, real estate investors, entrepreneurs, and specific industries common in Orange County. Our local expertise allows us to anticipate and address the specific audit triggers and compliance issues relevant to Orange County taxpayers.",
    heroImage: "https://images.unsplash.com/photo-1565602026397-0a70f1a1d6c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "How do I know if I'm being audited by the IRS?",
        answer: "You'll receive an official notification from the IRS by mail. Legitimate IRS audit notices always come through the U.S. Postal Service, not by email, phone, or text. The notice will include specific information about which tax return(s) are being examined and what information the IRS needs."
      },
      {
        question: "What triggers IRS audits in Orange County?",
        answer: "Common audit triggers in Orange County include high income (especially over $200,000), large charitable deductions, real estate transactions, home office deductions, and business expenses. Orange County's affluent areas and active real estate market create unique audit risk factors that our attorneys understand and help mitigate."
      },
      {
        question: "Should I talk to the IRS directly during an audit?",
        answer: "We strongly recommend against communicating directly with the IRS during an audit. Having a tax attorney represent you provides attorney-client privilege protection and ensures experienced navigation of the audit process. Our attorneys understand how to properly respond to IRS inquiries without exposing you to additional scrutiny."
      }
    ]
  };

  const pageTitle = "IRS Audit Defense in Orange County | Tax Attorney Services";
  const pageDescription = "Expert IRS audit defense for Orange County residents and businesses. Our tax attorneys provide professional representation to protect your rights during IRS audits.";
  
  // Create FAQ schema for structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  // Create breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", item: "https://orangecountytaxattorney.com/" },
    { name: "Services", item: "https://orangecountytaxattorney.com/#services" },
    { name: "IRS Audit Defense", item: "https://orangecountytaxattorney.com/services/irs-audit-defense" }
  ];

  return (
    <>
      <SeoMeta 
        title={pageTitle}
        description={pageDescription}
        keywords="IRS audit defense, Orange County tax attorney, IRS audit representation, tax audit help, Orange County IRS defense"
        canonicalUrl="https://orangecountytaxattorney.com/services/irs-audit-defense"
        breadcrumbs={breadcrumbs}
        schemaData={faqSchema}
      />
      <ServicePageTemplate {...pageData} />
    </>
  );
}
