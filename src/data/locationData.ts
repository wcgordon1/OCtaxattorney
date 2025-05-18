export interface LocationData {
  id: string;
  name: string;
  county: string;
  population: string;
  medianIncome: string;
  description: string;
  taxInfo: string;
  keyIndustries: string[];
  commonTaxIssues: string[];
  heroImage: string;
}

export const locationData: LocationData[] = [
  {
    id: 'irvine',
    name: 'Irvine',
    county: 'Orange County',
    population: '307,670',
    medianIncome: '$108,000',
    description: 'Irvine is a master-planned city known for its exceptional safety, top-tier education, and thriving tech sector. As a hub for both startups and established corporations, Irvine residents and businesses face unique tax challenges related to high-income brackets and complex corporate structures.',
    taxInfo: 'Irvine residents often face high property tax assessments due to elevated home values. The city\'s business tax structure affects many of the technology and biomedical companies headquartered here.',
    keyIndustries: ['Technology', 'Higher Education', 'Healthcare', 'Research & Development', 'Medical Devices'],
    commonTaxIssues: ['Stock option taxation', 'Property tax assessments', 'Corporate tax compliance', 'R&D tax credits', 'International tax concerns'],
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'newport-beach',
    name: 'Newport Beach',
    county: 'Orange County',
    population: '85,780',
    medianIncome: '$127,000',
    description: 'Newport Beach is an affluent coastal community known for its beautiful harbor and luxury real estate. With a high concentration of wealth management firms and high-net-worth individuals, Newport Beach residents often require sophisticated tax planning and representation.',
    taxInfo: 'Newport Beach has one of the highest concentrations of wealth in Orange County, leading to complex estate planning and capital gains tax issues. Many residents own multiple properties and investment portfolios requiring specialized tax expertise.',
    keyIndustries: ['Real Estate', 'Wealth Management', 'Luxury Retail', 'Tourism', 'Yacht Management'],
    commonTaxIssues: ['Estate and gift tax planning', 'Investment income taxation', 'Luxury property assessments', 'Foreign account compliance', 'Passive income structures'],
    heroImage: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'santa-ana',
    name: 'Santa Ana',
    county: 'Orange County',
    population: '310,227',
    medianIncome: '$72,400',
    description: 'Santa Ana serves as the county seat and is a vibrant hub with rich cultural diversity. As the home of many county government offices, including the Orange County Superior Court and administrative buildings, Santa Ana has a diverse mix of businesses and residents with varied tax concerns.',
    taxInfo: 'As Orange County\'s seat, Santa Ana houses numerous government services including tax agencies. The city has a diverse economy with a mix of small businesses and larger corporations, creating a range of tax compliance needs.',
    keyIndustries: ['Government', 'Legal Services', 'Healthcare', 'Manufacturing', 'Retail'],
    commonTaxIssues: ['Small business taxation', 'Payroll tax compliance', 'Tax court representation', 'IRS audit defense', 'Tax debt resolution'],
    heroImage: 'https://images.unsplash.com/photo-1599408169542-620fc453382c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'anaheim',
    name: 'Anaheim',
    county: 'Orange County',
    population: '346,824',
    medianIncome: '$76,000',
    description: 'Anaheim is home to Disneyland Resort and major sports venues like Angel Stadium and Honda Center. As a tourism hub, many Anaheim businesses operate in hospitality, entertainment, and retail, creating unique seasonal tax considerations and specialized business structures.',
    taxInfo: 'Anaheim\'s tourism-based economy creates unique tax considerations for hospitality businesses, including transient occupancy taxes and specialized deductions. Seasonal employment also creates specific payroll tax challenges.',
    keyIndustries: ['Tourism', 'Entertainment', 'Hospitality', 'Sports', 'Convention Services'],
    commonTaxIssues: ['Sales and use tax compliance', 'Entertainment industry deductions', 'Seasonal business taxation', 'Worker classification', 'International visitor taxation'],
    heroImage: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tustin',
    name: 'Tustin',
    county: 'Orange County',
    population: '80,276',
    medianIncome: '$84,697',
    description: 'Tustin is known as the "City of Trees" and features a mix of historic charm and modern development. The former Marine Corps Air Station Tustin has been redeveloped into a business and residential community, creating unique tax planning opportunities for growing businesses and new residents.',
    taxInfo: 'Tustin features a diverse economic base with small businesses, corporate offices, and growing residential communities. The Tustin Legacy development area offers various tax incentives for businesses relocating to the area.',
    keyIndustries: ['Retail', 'Healthcare', 'Manufacturing', 'Education', 'Professional Services'],
    commonTaxIssues: ['Business tax incentives', 'Property tax reassessments', 'Small business compliance', 'Startup tax planning', 'New development taxation'],
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'coto-de-caza',
    name: 'Coto De Caza',
    county: 'Orange County',
    population: '14,866',
    medianIncome: '$175,000',
    description: 'Coto De Caza is an exclusive gated community in the eastern part of Orange County. With luxury homes, world-class golf courses, and equestrian facilities, residents of this affluent community often require specialized tax services related to high-value assets, investment income, and estate planning.',
    taxInfo: 'As an unincorporated community, Coto De Caza has unique property tax considerations compared to neighboring cities. Many residents have significant investment income and require specialized tax planning services.',
    keyIndustries: ['Real Estate', 'Financial Services', 'Professional Services', 'Golf & Recreation', 'Equestrian'],
    commonTaxIssues: ['High-net-worth tax planning', 'Investment property taxation', 'Trust and estate planning', 'Retirement optimization', 'Alternative minimum tax strategies'],
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  process: string[];
}

export const serviceData: ServiceData[] = [
  {
    id: 'audit-defense',
    title: 'IRS Audit Defense',
    description: 'Our experienced tax attorneys provide complete representation during IRS audits, protecting your rights and minimizing financial exposure. We handle all communication with the IRS, prepare documentation, and develop strategic responses to audit inquiries.',
    benefits: [
      'Attorney-client privilege protects your sensitive information',
      'Experienced representation by former IRS agents and tax attorneys',
      'Strategic preparation of documentation and responses',
      'Reduction of assessment amounts and penalties',
      'Prevention of future audit triggers'
    ],
    process: [
      'Comprehensive review of audit notice and tax returns',
      'Documentation preparation and organization',
      'Development of strategic audit response plan',
      'Direct communication with IRS examiners',
      'Negotiation of favorable settlements when necessary'
    ]
  },
  {
    id: 'debt-resolution',
    title: 'Tax Debt Resolution',
    description: 'We help individuals and businesses resolve tax debt through various IRS programs including Offers in Compromise, Installment Agreements, Currently Not Collectible status, and Penalty Abatement. Our approach focuses on finding the optimal resolution strategy for your specific financial situation.',
    benefits: [
      'Significant reduction of tax debt in many cases',
      'Prevention of aggressive collection actions',
      'Establishment of manageable payment plans',
      'Removal of tax liens affecting credit scores',
      'Fresh start with proper tax compliance'
    ],
    process: [
      'Analysis of your tax transcripts and financial situation',
      'Determination of qualification for various IRS programs',
      'Preparation and submission of resolution proposals',
      'Negotiation with IRS settlement officers',
      'Implementation of resolution agreement and compliance plan'
    ]
  },
  {
    id: 'lien-levy-relief',
    title: 'Tax Lien & Levy Relief',
    description: 'Our tax attorneys can help remove tax liens, stop wage garnishments, prevent bank levies, and protect assets from seizure. We act quickly to resolve the underlying tax issues while securing immediate relief from collection activities.',
    benefits: [
      'Immediate action to stop or prevent collection enforcement',
      'Removal of liens affecting credit and property sales',
      'Release of bank account and wage levies',
      'Protection of business and personal assets',
      'Long-term resolution to prevent future issues'
    ],
    process: [
      'Emergency filing of collection appeals when necessary',
      'Request for Collection Due Process hearings',
      'Negotiation of lien subordination or withdrawal',
      'Implementation of resolution strategy for underlying tax issues',
      'Confirmation of proper credit to all tax accounts'
    ]
  },
  {
    id: 'business-tax',
    title: 'Business Tax Issues',
    description: 'We provide comprehensive solutions for businesses facing employment tax problems, sales tax audits, and corporate income tax disputes. Our team understands the complex tax challenges businesses face and works to minimize disruption while resolving these issues.',
    benefits: [
      'Protection of business operations during resolution',
      'Strategic handling of employment tax liabilities',
      'Representation during sales tax and income tax audits',
      'Prevention of personal liability for business owners',
      'Implementation of compliance systems to prevent future issues'
    ],
    process: [
      'Assessment of business tax compliance and exposure',
      'Development of resolution strategy specific to business type',
      'Implementation of immediate protection measures',
      'Negotiation with relevant tax authorities',
      'Design of ongoing compliance procedures'
    ]
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Our proactive tax planning services help individuals and businesses legally minimize tax liabilities through strategic timing of income and deductions, entity structuring, and investment planning. We develop customized plans aligned with your financial goals.',
    benefits: [
      'Reduction of overall tax liability',
      'Strategic timing of income recognition and deductions',
      'Optimization of business entity structure',
      'Implementation of tax-advantaged investment strategies',
      'Coordination with retirement and estate planning'
    ],
    process: [
      'Comprehensive review of current financial situation',
      'Analysis of income sources and potential deductions',
      'Development of customized tax minimization strategies',
      'Implementation of recommended tax planning vehicles',
      'Ongoing monitoring and adjustment of tax plan'
    ]
  },
  {
    id: 'tax-court',
    title: 'Tax Court Representation',
    description: 'When tax disputes cannot be resolved administratively, our experienced tax litigators provide representation in U.S. Tax Court. We handle all aspects of tax litigation, working to achieve favorable outcomes while managing costs and risks.',
    benefits: [
      'Experienced representation by tax court practitioners',
      'Strategic approach to litigation preparation',
      'Pursuit of pretrial settlements when advantageous',
      'Protection of rights through due process',
      'Potential precedent-setting outcomes for similar situations'
    ],
    process: [
      'Analysis of case strengths and weaknesses',
      'Preparation and filing of Tax Court petition',
      'Development of litigation strategy',
      'Engagement in discovery and pretrial processes',
      'Representation at trial or negotiation of favorable settlement'
    ]
  }
];
