import ServicePageTemplate from '../components/ServicePageTemplate';
import { Helmet } from 'react-helmet';

export default function TaxPlanning() {
  const pageData = {
    title: "Tax Planning",
    description: "Strategic tax planning services to legally minimize tax liabilities for Orange County individuals and businesses through entity structuring, timing strategies, and investment planning.",
    benefits: [
      "Legally minimize your annual tax liability",
      "Strategic timing of income recognition and deductions",
      "Optimal business entity structure for tax efficiency",
      "Tax-advantaged investment strategies tailored to Orange County's economy",
      "Integration with retirement and estate planning",
      "Proactive approach to prevent tax problems"
    ],
    process: [
      "We begin with a comprehensive review of your current financial situation, tax history, and future goals to establish a baseline for planning.",
      "Our team analyzes your income sources, deduction opportunities, and timing considerations to identify specific tax reduction strategies applicable to your situation.",
      "We develop a customized tax plan that leverages legal tax reduction vehicles while considering your risk tolerance and liquidity needs.",
      "Our attorneys assist with implementing recommended planning strategies, coordinating with your financial advisors when appropriate.",
      "We provide ongoing monitoring and adjustment of your tax plan as laws change and your financial situation evolves."
    ],
    orangeCountyInfo: "Orange County's high state and local tax burden, combined with elevated income levels, makes strategic tax planning particularly valuable for local residents and businesses. Our planning accounts for California's progressive income tax system and property tax considerations specific to Orange County's real estate market. We help local business owners structure their operations optimally and assist high-net-worth individuals with strategies for investment income, retirement planning, and wealth transfer that address both federal and California tax impacts.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "Is tax planning different from tax preparation?",
        answer: "Yes, tax planning is proactive and forward-looking, focused on structuring your financial affairs to legally minimize future tax liabilities. Tax preparation is reactive, dealing with reporting past transactions. For Orange County residents facing high state and federal tax rates, proactive planning can yield significant savings compared to merely filing accurate returns."
      },
      {
        question: "When is the best time for Orange County residents to engage in tax planning?",
        answer: "While tax planning should be a year-round consideration, most Orange County clients benefit from mid-year planning (June-August) and year-end planning (October-December). Mid-year planning allows time to implement strategies affecting the current year, while year-end planning focuses on last-minute opportunities and setting up strategies for the coming year."
      },
      {
        question: "How can business owners in Orange County reduce their tax liability?",
        answer: "Orange County business owners have multiple potential strategies including entity structure optimization (S-Corporation, LLC, etc.), retirement plan implementation, strategic timing of income and expenses, cost segregation for commercial property, employment tax management, and various industry-specific deductions and credits. Our approach considers both federal and California tax impacts unique to your specific industry and business model."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tax Planning in Orange County | Tax Attorney Services</title>
        <meta name="description" content="Strategic tax planning services in Orange County. Our tax attorneys help individuals and businesses legally minimize tax liability through proactive planning." />
        <meta name="keywords" content="tax planning, Orange County tax strategy, tax minimization, business tax planning, California tax planning, tax efficiency, Orange County tax attorney" />
        <meta property="og:title" content="Tax Planning in Orange County | Tax Attorney Services" />
        <meta property="og:description" content="Strategic tax planning services in Orange County. Our tax attorneys help individuals and businesses legally minimize tax liability through proactive planning." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <ServicePageTemplate {...pageData} />
    </>
  );
}
