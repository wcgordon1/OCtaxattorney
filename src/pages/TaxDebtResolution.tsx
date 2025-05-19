import ServicePageTemplate from '../components/ServicePageTemplate';
import { Helmet } from 'react-helmet';

export default function TaxDebtResolution() {
  const pageData = {
    title: "Tax Debt Resolution",
    description: "Comprehensive tax debt resolution services for Orange County residents and businesses, including Offers in Compromise, Installment Agreements, and Currently Not Collectible status.",
    benefits: [
      "Significant reduction in tax debt through Offer in Compromise when qualified",
      "Affordable monthly payment plans through Installment Agreements",
      "Temporary relief through Currently Not Collectible status",
      "Release of tax liens and levies affecting your assets and credit",
      "Penalty abatement to reduce overall tax liability",
      "Peace of mind and financial fresh start"
    ],
    process: [
      "We begin with a thorough analysis of your tax transcripts, financial situation, and collection status to determine all viable resolution options for your specific circumstances.",
      "Our team develops a customized resolution strategy, whether that's an Offer in Compromise, Installment Agreement, Currently Not Collectible status, or a combination of approaches.",
      "We prepare and submit all necessary forms and documentation to the IRS, ensuring accuracy and strategic presentation of your financial information.",
      "Our attorneys negotiate directly with IRS collection officers to secure the most favorable terms possible for your resolution agreement.",
      "After securing your agreement, we provide ongoing guidance to ensure compliance with all terms and prevent future tax problems."
    ],
    orangeCountyInfo: "Orange County's high cost of living presents unique challenges for residents facing tax debt. With median home prices among the highest in the nation and significant living expenses, Orange County taxpayers require specialized strategies for tax debt resolution. Our attorneys understand the local economic factors that impact your ability to pay and how to effectively present your case to the IRS. We've helped hundreds of clients throughout Irvine, Newport Beach, Santa Ana, Anaheim, and surrounding areas resolve tax debts while maintaining their quality of life.",
    heroImage: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "Can I settle my tax debt for less than I owe?",
        answer: "Yes, through the IRS Offer in Compromise (OIC) program. This program allows qualified taxpayers to settle their tax debt for less than the full amount owed. Qualification is based on your ability to pay, income, expenses, and asset equity. Our Orange County tax attorneys have a high success rate securing favorable settlements for our clients."
      },
      {
        question: "How long does tax debt resolution take in Orange County?",
        answer: "The timeline varies based on the resolution method. Installment Agreements typically take 30-90 days to establish. Offers in Compromise generally take 6-12 months to process. Currently Not Collectible status can often be secured within 30-60 days. Throughout Orange County, we've helped clients resolve tax debts efficiently while navigating local economic considerations."
      },
      {
        question: "Will a tax lien affect my credit in Orange County?",
        answer: "Yes, tax liens can significantly impact your credit and are particularly problematic in Orange County's competitive housing and refinancing market. While the IRS no longer reports tax liens to credit bureaus automatically, liens are public records that can affect your ability to sell property or obtain financing. Our attorneys can help secure lien releases or subordination to minimize these impacts."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tax Debt Resolution in Orange County | Tax Attorney Services</title>
        <meta name="description" content="Expert tax debt resolution services in Orange County. Our tax attorneys help resolve IRS and state tax debt through Offers in Compromise, Installment Agreements, and more." />
        <meta name="keywords" content="tax debt resolution, Orange County tax debt help, IRS Offer in Compromise, tax settlement, tax debt relief, Orange County tax attorney" />
        <meta property="og:title" content="Tax Debt Resolution in Orange County | Tax Attorney Services" />
        <meta property="og:description" content="Expert tax debt resolution services in Orange County. Our tax attorneys help resolve IRS and state tax debt through Offers in Compromise, Installment Agreements, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/octax.png" />
      </Helmet>
      <ServicePageTemplate {...pageData} />
    </>
  );
}
