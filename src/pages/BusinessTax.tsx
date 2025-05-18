import ServicePageTemplate from '../components/ServicePageTemplate';
import { Helmet } from 'react-helmet';

export default function BusinessTax() {
  const pageData = {
    title: "Business Tax Issues",
    description: "Comprehensive tax resolution services for Orange County businesses facing payroll tax problems, sales tax audits, and income tax disputes with minimal disruption to operations.",
    benefits: [
      "Protection of your Orange County business assets and operations",
      "Resolution of employment tax liabilities with minimal penalties",
      "Expert representation during sales tax audits with the CDTFA",
      "Prevention of personal liability for business owners (Trust Fund Recovery Penalty)",
      "Strategic tax planning to prevent future compliance issues",
      "Experienced negotiation with IRS and California tax authorities"
    ],
    process: [
      "We conduct a comprehensive review of your business tax compliance issues, identifying exposure areas and immediate priorities for resolution.",
      "Our team develops a strategic plan specific to your business type, industry, and tax situation, with protection of business operations as a primary goal.",
      "We implement immediate protection measures such as collection holds, installment agreements, or Currently Not Collectible status when appropriate.",
      "Our attorneys negotiate directly with IRS Revenue Officers, California tax authorities, and other relevant agencies to secure favorable resolution terms.",
      "After resolving immediate issues, we design ongoing compliance procedures to prevent future tax problems and protect your business's financial health."
    ],
    orangeCountyInfo: "Orange County's diverse business landscape includes everything from small family businesses to tech startups and international corporations. Our local business clients face unique challenges including California's aggressive sales tax enforcement, complex employment tax requirements, and high operational costs that can strain tax compliance. We understand the specific industries prevalent in Irvine's technology corridor, Newport Beach's financial services sector, and Anaheim's tourism and hospitality businesses, providing tailored tax solutions for each industry's specific challenges.",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "As an Orange County business owner, can I be personally liable for company tax debts?",
        answer: "Yes, particularly for employment taxes where the IRS can assess the Trust Fund Recovery Penalty (TFRP) against individuals responsible for collecting and paying payroll taxes. California can also hold responsible individuals personally liable for sales tax. Our attorneys help identify personal liability risks and develop strategies to protect both business owners and their companies."
      },
      {
        question: "How do I handle a California sales tax audit for my Orange County business?",
        answer: "California Department of Tax and Fee Administration (CDTFA) audits require specialized representation familiar with local business practices and specific Orange County industry standards. Our approach includes preparing organized documentation, identifying allowable exemptions specific to your industry, and negotiating directly with CDTFA auditors to minimize assessments."
      },
      {
        question: "What should I do if my Orange County business has fallen behind on payroll taxes?",
        answer: "Immediate action is essential. We help Orange County businesses quickly address payroll tax delinquencies through strategic filing of missing returns, negotiation of installment agreements, and when appropriate, penalty abatement requests. We also implement systems to ensure future compliance, which is critical to successful resolution with the IRS and EDD."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Business Tax Issues in Orange County | Tax Attorney Services</title>
        <meta name="description" content="Expert business tax resolution services in Orange County. Our tax attorneys help resolve payroll tax problems, sales tax audits, and business income tax disputes." />
        <meta name="keywords" content="business tax issues, Orange County business tax, payroll tax problems, sales tax audit, California business tax, IRS business audit, Orange County tax attorney" />
        <meta property="og:title" content="Business Tax Issues in Orange County | Tax Attorney Services" />
        <meta property="og:description" content="Expert business tax resolution services in Orange County. Our tax attorneys help resolve payroll tax problems, sales tax audits, and business income tax disputes." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <ServicePageTemplate {...pageData} />
    </>
  );
}
