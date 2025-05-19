import { ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
}

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How the New Tax Laws Affect Orange County Property Owners',
    excerpt: 'Recent changes to federal and California tax laws have significant implications for Orange County homeowners and real estate investors.',
    content: `
      <h2>Understanding the Impact of New Tax Laws on Orange County Property</h2>
      
      <p>Orange County homeowners and real estate investors face unique challenges with the recent changes to federal and California tax laws. With property values among the highest in the nation, the limitations on state and local tax (SALT) deductions particularly affect our community.</p>
      
      <h3>Key Changes Affecting Orange County Residents</h3>
      
      <p>The $10,000 cap on SALT deductions has disproportionately impacted high-value areas like Newport Beach, Irvine, and Laguna Beach. Many Orange County homeowners have property tax bills that exceed this cap alone, not including state income taxes.</p>
      
      <p>Additionally, the mortgage interest deduction limitation (reduced to interest on $750,000 of acquisition debt) affects a significant percentage of Orange County homeowners where the median home price exceeds $1 million in many neighborhoods.</p>
      
      <h3>Strategic Planning Opportunities</h3>
      
      <p>Despite these challenges, Orange County property owners have several strategic planning opportunities:</p>
      
      <ul>
        <li>Strategic timing of property tax payments between tax years</li>
        <li>Entity structuring for investment properties</li>
        <li>Cost segregation studies to accelerate depreciation deductions</li>
        <li>1031 exchanges to defer capital gains on investment properties</li>
      </ul>
      
      <h3>California-Specific Considerations</h3>
      
      <p>While federal tax laws have changed, California has not conformed to many of these changes. This creates planning opportunities at the state level, where Orange County property owners can still benefit from uncapped SALT deductions and other provisions.</p>
      
      <h3>Planning for the Future</h3>
      
      <p>Orange County property owners should work with experienced tax professionals who understand both the local real estate market and the specific tax issues affecting our community. With proper planning, the impact of these tax law changes can be managed effectively.</p>
    `,
    date: 'May 12, 2025',
    author: 'Jennifer Martinez, CPA',
    category: 'Tax Planning',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Property Tax', 'Orange County Real Estate', 'SALT Deduction', 'Tax Planning'],
    slug: 'how-new-tax-laws-affect-orange-county-property-owners'
  },
  {
    id: '2',
    title: 'IRS Audit Rates Increasing in Orange County: What You Need to Know',
    excerpt: 'Recent data shows that IRS audit rates in Orange County are increasing. Learn why local residents are being targeted and how to protect yourself.',
    content: `
      <h2>Understanding the Rise in IRS Audits in Orange County</h2>
      
      <p>Recent IRS data reveals a concerning trend for Orange County taxpayers: audit rates are increasing in our region at a pace faster than the national average. This targeted approach affects residents across Newport Beach, Irvine, Anaheim, and other local communities.</p>
      
      <h3>Why Orange County Residents Face Higher Audit Risk</h3>
      
      <p>Several factors contribute to Orange County's higher audit rates:</p>
      
      <ul>
        <li><strong>Higher Income Levels:</strong> With median household incomes well above national averages, Orange County residents fall into income brackets that receive more IRS scrutiny.</li>
        <li><strong>Real Estate Transactions:</strong> The active and high-value Orange County real estate market triggers increased review of property-related tax positions.</li>
        <li><strong>Business Ownership:</strong> The entrepreneurial nature of Orange County means more Schedule C filings and business returns, which face higher audit rates.</li>
        <li><strong>Investment Activity:</strong> Significant investment income reported by local residents attracts additional IRS attention.</li>
      </ul>
      
      <h3>Common Audit Triggers for Orange County Taxpayers</h3>
      
      <p>The most frequent audit triggers we're seeing among Orange County clients include:</p>
      
      <ol>
        <li>Large charitable contributions relative to income</li>
        <li>Home office deductions for high-income earners</li>
        <li>Rental property losses, particularly for real estate professionals</li>
        <li>Business use of vehicles in expensive automobile categories</li>
        <li>Unreported foreign accounts or investments</li>
      </ol>
      
      <h3>Protecting Yourself from IRS Scrutiny</h3>
      
      <p>While no strategy guarantees audit-proof returns, Orange County residents can take proactive steps to minimize risk:</p>
      
      <ul>
        <li>Maintain meticulous documentation for all deductions and credits</li>
        <li>Consider a professional tax preparer familiar with Orange County-specific issues</li>
        <li>Report all income, including 1099s, K-1s, and other third-party reporting</li>
        <li>Be especially careful with high-risk deductions like home office, vehicle use, and travel</li>
        <li>Consider a tax return review by a qualified tax attorney if your situation includes high-risk elements</li>
      </ul>
      
      <h3>What To Do If You're Audited</h3>
      
      <p>If you receive an audit notice, don't panic. Orange County residents have rights during the audit process, and proper representation can significantly improve outcomes. The key is responding promptly while ensuring your interests are protected by qualified representation.</p>
    `,
    date: 'April 28, 2025',
    author: 'Michael Chen, Tax Attorney',
    category: 'Tax Audits',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['IRS Audit', 'Tax Defense', 'Orange County Taxes', 'Audit Protection'],
    slug: 'irs-audit-rates-increasing-orange-county'
  },
  {
    id: '3',
    title: 'Small Business Tax Strategies for Orange County Entrepreneurs',
    excerpt: 'Specialized tax planning strategies for Orange County\'s thriving small business community to maximize deductions and minimize tax liability.',
    content: `
      <h2>Tax Strategies Tailored for Orange County Small Businesses</h2>
      
      <p>Orange County's dynamic business environment creates unique opportunities and challenges for local entrepreneurs. With over 90,000 small businesses operating across Irvine, Newport Beach, Santa Ana, and surrounding communities, understanding the specific tax strategies that work in our local economy is essential.</p>
      
      <h3>Entity Selection: Critical for Orange County Businesses</h3>
      
      <p>The business entity you select has significant tax implications, especially in California's high-tax environment:</p>
      
      <ul>
        <li><strong>S-Corporations:</strong> Particularly beneficial for many Orange County service businesses to minimize self-employment taxes while balancing reasonable compensation requirements.</li>
        <li><strong>LLCs:</strong> Offering flexibility for real estate investors and multi-owner businesses while navigating California's LLC fee structure.</li>
        <li><strong>C-Corporations:</strong> Worth considering for certain growth-focused Orange County startups, especially with recent federal rate reductions.</li>
      </ul>
      
      <h3>California-Specific Tax Considerations</h3>
      
      <p>Orange County businesses must navigate both federal and California tax requirements:</p>
      
      <ul>
        <li>California's high personal income tax rates (up to 13.3%) significantly impact pass-through business owners</li>
        <li>The California Franchise Tax Board's aggressive enforcement requires meticulous compliance</li>
        <li>City-specific business license requirements and taxes vary across Orange County municipalities</li>
      </ul>
      
      <h3>Industry-Specific Strategies for Orange County Businesses</h3>
      
      <p>Different industries dominate in different parts of Orange County, each with specialized tax strategies:</p>
      
      <ul>
        <li><strong>Technology (Irvine):</strong> R&D credits, stock compensation planning, and IP structuring</li>
        <li><strong>Professional Services (Newport Beach):</strong> Retirement plan optimization and expense management</li>
        <li><strong>Real Estate (countywide):</strong> Cost segregation, 1031 exchanges, and opportunity zone investments</li>
        <li><strong>Retail/Restaurant (Santa Ana, Orange):</strong> FICA tip credits, accelerated depreciation, and inventory management</li>
      </ul>
      
      <h3>Retirement Planning: Building Wealth Beyond the Business</h3>
      
      <p>Orange County's high cost of living makes effective retirement planning crucial:</p>
      
      <ul>
        <li>Solo 401(k)s allowing contributions up to $69,000 for owner-only businesses</li>
        <li>Defined benefit plans for high-income professionals looking to accelerate retirement savings</li>
        <li>SEP IRAs for simplicity with substantial contribution limits</li>
      </ul>
      
      <h3>Year-End Planning Essentials</h3>
      
      <p>With proper year-end planning, Orange County businesses can significantly reduce their tax burden through timing strategies, equipment purchases, expense management, and retirement contributions.</p>
    `,
    date: 'April 14, 2025',
    author: 'Sarah Rodriguez, Tax Strategist',
    category: 'Business Tax',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Small Business', 'Orange County Business', 'Tax Strategy', 'Business Deductions'],
    slug: 'small-business-tax-strategies-orange-county'
  },
  {
    id: '4',
    title: 'Resolving Tax Debt in Orange County: Options and Strategies',
    excerpt: 'A comprehensive guide to tax debt resolution options available to Orange County residents facing IRS and California tax liabilities.',
    content: `
      <h2>Resolving Tax Debt: Solutions for Orange County Residents</h2>
      
      <p>Tax debt can be particularly challenging for Orange County residents due to the high cost of living, substantial state tax obligations, and complex financial situations common in our community. Whether you're facing federal IRS debt or California Franchise Tax Board liabilities, understanding your resolution options is critical.</p>
      
      <h3>Understanding the Scope of Your Tax Debt</h3>
      
      <p>Before pursuing any resolution, Orange County taxpayers should obtain a complete accounting of their tax liabilities:</p>
      
      <ul>
        <li>Request tax transcripts from the IRS for all relevant years</li>
        <li>Obtain account status information from the California Franchise Tax Board</li>
        <li>Identify all tax types owed (income, payroll, sales)</li>
        <li>Determine which years remain collectible under statute of limitations rules</li>
      </ul>
      
      <h3>IRS Resolution Options for Orange County Taxpayers</h3>
      
      <p>Several programs are available to resolve federal tax debt:</p>
      
      <h4>Offer in Compromise</h4>
      <p>This program allows qualifying taxpayers to settle tax debt for less than the full amount. Orange County's high cost of living can actually help in the qualification process by reducing your "reasonable collection potential" in the IRS calculation.</p>
      
      <h4>Installment Agreements</h4>
      <p>Monthly payment plans allow you to resolve tax debt over time. Various types are available based on the amount owed and your financial situation. For Orange County residents with high housing costs, the IRS allows higher expense allowances that can reduce monthly payment requirements.</p>
      
      <h4>Currently Not Collectible Status</h4>
      <p>If paying your tax debt would create a financial hardship, you may qualify for temporary collection relief. This can be particularly relevant for Orange County residents facing housing insecurity or extraordinary medical expenses.</p>
      
      <h3>California-Specific Resolution Options</h3>
      
      <p>The California Franchise Tax Board offers similar resolution options but with different qualification criteria and processes:</p>
      
      <ul>
        <li>California Offer in Compromise program</li>
        <li>FTB installment agreements</li>
        <li>Temporary hardship status</li>
        <li>California taxpayer advocate assistance</li>
      </ul>
      
      <h3>Special Considerations for Orange County Residents</h3>
      
      <p>Several factors specific to Orange County affect tax resolution strategies:</p>
      
      <ul>
        <li>High real estate values may impact asset calculations</li>
        <li>California's community property laws affect liability for married taxpayers</li>
        <li>Local bankruptcy courts have specific precedents regarding tax debt discharge</li>
      </ul>
      
      <h3>Taking the First Step</h3>
      
      <p>For Orange County residents facing tax debt, the first step is a thorough evaluation of your specific situation with a tax resolution specialist familiar with both federal and California tax resolution options. This allows development of a strategy that addresses your complete tax situation while considering the unique economic factors affecting Orange County taxpayers.</p>
    `,
    date: 'March 30, 2025',
    author: 'David Thompson, Tax Resolution Specialist',
    category: 'Tax Debt',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Tax Debt', 'IRS Resolution', 'Offer in Compromise', 'Orange County Taxes'],
    slug: 'resolving-tax-debt-orange-county-options-strategies'
  },
  {
    id: '5',
    title: 'New California Tax Credits for Orange County Green Energy Investments',
    excerpt: 'Recent California legislation introduces significant tax incentives for Orange County businesses and homeowners investing in renewable energy and sustainable practices.',
    content: `
      <h2>California's Green Energy Tax Incentives: Opportunities for Orange County</h2>
      
      <p>California's latest environmental initiatives have introduced substantial tax benefits for Orange County residents and businesses investing in green energy solutions. These incentives are particularly relevant for our region's tech companies, real estate developers, and environmentally conscious homeowners.</p>
      
      <h3>Key Tax Credits Available in 2025</h3>
      
      <p>Orange County taxpayers can now benefit from several new and enhanced tax credits:</p>
      
      <ul>
        <li><strong>Commercial Solar Investment Credit:</strong> Up to 30% credit for businesses installing solar systems, with additional incentives for energy storage solutions</li>
        <li><strong>EV Infrastructure Deduction:</strong> Enhanced deductions for commercial properties installing electric vehicle charging stations</li>
        <li><strong>Green Building Certification Credit:</strong> Tax credits for achieving LEED or similar certifications in new construction or major renovations</li>
        <li><strong>Residential Energy Efficiency Credit:</strong> Expanded credits for homeowners implementing energy-saving improvements</li>
      </ul>
      
      <h3>Orange County-Specific Considerations</h3>
      
      <p>The new incentives are particularly valuable in Orange County due to:</p>
      
      <ul>
        <li>High energy costs in coastal communities</li>
        <li>Strong tech sector presence in Irvine and surrounding areas</li>
        <li>Growing demand for sustainable commercial properties</li>
        <li>Increasing focus on environmental responsibility in local business communities</li>
      </ul>
      
      <h3>Implementation Strategies</h3>
      
      <p>To maximize these tax benefits, Orange County businesses and homeowners should consider:</p>
      
      <ul>
        <li>Strategic timing of green energy investments</li>
        <li>Combining state and federal incentives</li>
        <li>Proper documentation and certification requirements</li>
        <li>Long-term planning for phased implementation</li>
      </ul>
      
      <h3>Future Outlook</h3>
      
      <p>These tax incentives are part of California's broader commitment to environmental sustainability. Orange County taxpayers should stay informed about potential extensions or enhancements to these programs, as they may evolve based on environmental goals and economic conditions.</p>
    `,
    date: 'March 15, 2025',
    author: 'Emily Chen, Environmental Tax Specialist',
    category: 'Tax Planning',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Green Energy', 'Tax Credits', 'Environmental Tax', 'Orange County Business'],
    slug: 'california-tax-credits-orange-county-green-energy'
  },
  {
    id: '6',
    title: 'Digital Asset Taxation: What Orange County Crypto Investors Need to Know',
    excerpt: 'A comprehensive guide to cryptocurrency and digital asset taxation for Orange County investors, including recent regulatory changes and reporting requirements.',
    content: `
      <h2>Navigating Digital Asset Taxation in Orange County</h2>
      
      <p>As Orange County continues to be a hub for technology and investment innovation, the taxation of digital assets has become increasingly important. Recent IRS guidance and California-specific regulations have created new compliance requirements for local investors and businesses.</p>
      
      <h3>Key Tax Considerations for Digital Assets</h3>
      
      <p>Orange County taxpayers dealing with digital assets need to understand several critical aspects:</p>
      
      <ul>
        <li><strong>Capital Gains Treatment:</strong> How different types of digital asset transactions are classified</li>
        <li><strong>Mining and Staking Income:</strong> Tax implications of earning digital assets through various methods</li>
        <li><strong>NFT Transactions:</strong> Special considerations for non-fungible token investments</li>
        <li><strong>DeFi Activities:</strong> Taxation of decentralized finance operations</li>
      </ul>
      
      <h3>California-Specific Requirements</h3>
      
      <p>Beyond federal requirements, Orange County residents must consider:</p>
      
      <ul>
        <li>California's treatment of digital asset income</li>
        <li>State-specific reporting requirements</li>
        <li>Local business considerations for crypto-related activities</li>
        <li>Property tax implications for mining operations</li>
      </ul>
      
      <h3>Compliance Strategies</h3>
      
      <p>To maintain compliance while optimizing tax positions, consider:</p>
      
      <ul>
        <li>Proper record-keeping for all digital asset transactions</li>
        <li>Strategic timing of gains and losses</li>
        <li>Entity structuring for digital asset businesses</li>
        <li>Integration with existing investment portfolios</li>
      </ul>
      
      <h3>Recent Regulatory Updates</h3>
      
      <p>The IRS and California tax authorities have recently implemented several important changes affecting digital asset taxation:</p>
      
      <ul>
        <li>New reporting requirements for digital asset exchanges</li>
        <li>Updated guidance on hard forks and airdrops</li>
        <li>Clarification on staking rewards taxation</li>
        <li>Enhanced enforcement focus on digital asset transactions</li>
      </ul>
      
      <h3>Planning for the Future</h3>
      
      <p>As digital asset taxation continues to evolve, Orange County investors should stay informed about regulatory changes and maintain flexible strategies that can adapt to new requirements and opportunities.</p>
    `,
    date: 'March 1, 2025',
    author: 'Michael Rodriguez, Digital Asset Tax Specialist',
    category: 'Digital Assets',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Cryptocurrency', 'Digital Assets', 'Tax Planning', 'Orange County Investment'],
    slug: 'digital-asset-taxation-orange-county-crypto-investors'
  },
  {
    id: '7',
    title: 'Estate Planning Updates: New Tax Implications for Orange County High-Value Properties',
    excerpt: "Recent changes to estate tax laws and their impact on Orange County's luxury real estate market, including new strategies for high-net-worth individuals.",
    content: `
      <h2>Estate Tax Planning in Orange County's Luxury Real Estate Market</h2>
      
      <p>Orange County's high-value properties, particularly in coastal communities like Newport Beach and Laguna Beach, face unique estate planning challenges under recent tax law changes. With median home values exceeding $1 million in many neighborhoods, proper estate planning has become increasingly crucial.</p>
      
      <h3>Key Changes Affecting Orange County Estates</h3>
      
      <p>Recent legislative updates have introduced several important considerations:</p>
      
      <ul>
        <li><strong>Increased Estate Tax Exemption:</strong> Understanding the new thresholds and their impact on Orange County properties</li>
        <li><strong>Step-Up Basis Rules:</strong> How recent changes affect inherited properties in high-value areas</li>
        <li><strong>Trust Modifications:</strong> New opportunities for existing trust structures</li>
        <li><strong>Property Tax Transfers:</strong> Special considerations for Proposition 19 compliance</li>
      </ul>
      
      <h3>Orange County-Specific Planning Strategies</h3>
      
      <p>Local estate planning requires special attention to:</p>
      
      <ul>
        <li>Coastal property valuation challenges</li>
        <li>Multi-generational property transfers</li>
        <li>Business succession planning in family-owned enterprises</li>
        <li>International asset considerations for global families</li>
      </ul>
      
      <h3>Implementation Considerations</h3>
      
      <p>Effective estate planning in Orange County should address:</p>
      
      <ul>
        <li>Timing of property transfers</li>
        <li>Trust structure optimization</li>
        <li>Family limited partnerships</li>
        <li>Charitable giving strategies</li>
      </ul>
      
      <h3>Future Planning Opportunities</h3>
      
      <p>As tax laws continue to evolve, Orange County residents should consider:</p>
      
      <ul>
        <li>Regular trust reviews and updates</li>
        <li>Integration of digital assets into estate plans</li>
        <li>International tax compliance</li>
        <li>Healthcare directive updates</li>
      </ul>
    `,
    date: 'February 15, 2025',
    author: 'Sarah Anderson, Estate Planning Attorney',
    category: 'Estate Planning',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Estate Planning', 'Property Tax', 'Trust Planning', 'Orange County Real Estate'],
    slug: 'estate-planning-updates-orange-county-high-value-properties'
  },
  {
    id: '8',
    title: 'Remote Work Tax Implications for Orange County Tech Companies',
    excerpt: "Understanding the tax consequences of remote work arrangements for Orange County technology companies and their employees in the post-pandemic era.",
    content: `
      <h2>Remote Work Taxation: Challenges for Orange County's Tech Sector</h2>
      
      <p>Orange County's technology sector, particularly in Irvine's tech corridor, faces unique tax challenges with the rise of remote work. Companies must navigate complex tax implications while maintaining compliance with both California and other states' regulations.</p>
      
      <h3>Key Tax Considerations for Remote Work</h3>
      
      <p>Orange County employers need to address several critical areas:</p>
      
      <ul>
        <li><strong>State Tax Nexus:</strong> How remote work affects company tax obligations</li>
        <li><strong>Employee Withholding:</strong> Managing tax withholding for remote workers</li>
        <li><strong>Home Office Deductions:</strong> New rules for employee reimbursements</li>
        <li><strong>International Remote Work:</strong> Cross-border tax implications</li>
      </ul>
      
      <h3>Orange County-Specific Challenges</h3>
      
      <p>Local tech companies face unique considerations:</p>
      
      <ul>
        <li>High cost of living affecting remote work policies</li>
        <li>Competition with Silicon Valley for talent</li>
        <li>Local business license requirements</li>
        <li>Property tax implications for reduced office space</li>
      </ul>
      
      <h3>Compliance Strategies</h3>
      
      <p>Effective management of remote work tax issues requires:</p>
      
      <ul>
        <li>Clear remote work policies</li>
        <li>Accurate tracking of employee locations</li>
        <li>Updated expense reimbursement programs</li>
        <li>Regular tax compliance reviews</li>
      </ul>
      
      <h3>Future Outlook</h3>
      
      <p>As remote work becomes permanent, Orange County tech companies should prepare for:</p>
      
      <ul>
        <li>Evolving state tax regulations</li>
        <li>Changing employee expectations</li>
        <li>New compliance requirements</li>
        <li>Updated workspace strategies</li>
      </ul>
    `,
    date: 'February 8, 2025',
    author: 'James Wilson, Tech Industry Tax Specialist',
    category: 'Business Tax',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Remote Work', 'Tech Industry', 'Business Tax', 'Orange County Business'],
    slug: 'remote-work-tax-implications-orange-county-tech-companies'
  },
  {
    id: '9',
    title: 'Proposition 19: Impact on Orange County Property Tax Transfers',
    excerpt: "A detailed analysis of Proposition 19's effects on property tax transfers in Orange County, including new rules for inherited properties and parent-child transfers.",
    content: `
      <h2>Understanding Proposition 19's Impact on Orange County Property Taxes</h2>
      
      <p>Proposition 19 has significantly changed how property taxes are handled in inheritance and transfer situations throughout Orange County. These changes particularly affect high-value properties in coastal communities and family-owned businesses.</p>
      
      <h3>Key Changes Under Proposition 19</h3>
      
      <p>The new rules introduce several important modifications:</p>
      
      <ul>
        <li><strong>Parent-Child Transfers:</strong> New limitations on tax basis transfers</li>
        <li><strong>Grandparent-Grandchild Transfers:</strong> Updated eligibility requirements</li>
        <li><strong>Primary Residence Rules:</strong> Changes to property value limits</li>
        <li><strong>Reassessment Triggers:</strong> New events that trigger property tax reassessment</li>
      </ul>
      
      <h3>Orange County-Specific Considerations</h3>
      
      <p>Local property owners face unique challenges:</p>
      
      <ul>
        <li>High property values in coastal communities</li>
        <li>Family business succession planning</li>
        <li>Investment property transfers</li>
        <li>Mixed-use property considerations</li>
      </ul>
      
      <h3>Planning Strategies</h3>
      
      <p>Effective property tax planning now requires:</p>
      
      <ul>
        <li>Early transfer planning</li>
        <li>Trust structure optimization</li>
        <li>Property use documentation</li>
        <li>Value assessment preparation</li>
      </ul>
      
      <h3>Implementation Timeline</h3>
      
      <p>Property owners should be aware of key dates and deadlines:</p>
      
      <ul>
        <li>Transfer filing requirements</li>
        <li>Appeal deadlines</li>
        <li>Documentation submission timelines</li>
        <li>Planning opportunity windows</li>
      </ul>
      
      <h3>Future Considerations</h3>
      
      <p>As Proposition 19 continues to be implemented, Orange County property owners should:</p>
      
      <ul>
        <li>Monitor regulatory updates</li>
        <li>Review existing transfer plans</li>
        <li>Update estate planning documents</li>
        <li>Consider alternative strategies</li>
      </ul>
    `,
    date: 'February 1, 2025',
    author: 'Robert Martinez, Property Tax Specialist',
    category: 'Property Tax',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Proposition 19', 'Property Tax', 'Orange County Real Estate', 'Tax Planning'],
    slug: 'proposition-19-impact-orange-county-property-tax-transfers'
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get unique categories and tags
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts based on search term, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="font-sans text-dark-brown">
      <Helmet>
        <title>Blog | Orange County Tax Attorney</title>
        <meta name="description" content="Expert insights on tax law, IRS defense, and tax planning strategies for Orange County residents and businesses." />
        <meta property="og:image" content="/octax.png" />
        <style>
          {`
            .blog-content h2 {
              font-size: 2.5rem !important;
              font-weight: 700 !important;
              margin: 2rem 0 1rem !important;
              color: #1a1a1a !important;
              line-height: 1.2 !important;
            }
            .blog-content h3 {
              font-size: 1.75rem !important;
              font-weight: 600 !important;
              margin: 1.5rem 0 1rem !important;
              color: #2a2a2a !important;
              line-height: 1.3 !important;
            }
            .blog-content p {
              font-size: 1.125rem !important;
              line-height: 1.7 !important;
              margin-bottom: 1.5rem !important;
              color: #333 !important;
            }
            .blog-content ul, .blog-content ol {
              margin: 1.5rem 0 !important;
              padding-left: 2rem !important;
            }
            .blog-content li {
              margin-bottom: 0.75rem !important;
              font-size: 1.125rem !important;
              line-height: 1.7 !important;
            }
            .blog-content strong {
              font-weight: 600 !important;
            }
          `}
        </style>
      </Helmet>

      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark-brown text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Tax Law Blog</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Expert insights on tax law, IRS defense, and tax planning strategies for Orange County residents and businesses.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-dark-brown/20 focus:border-dark-orange focus:ring-2 focus:ring-dark-orange/20 outline-none transition-all"
                  />
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-brown/40" />
                </div>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-dark-brown/20 focus:border-dark-orange focus:ring-2 focus:ring-dark-orange/20 outline-none transition-all"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-3 rounded-lg border border-dark-brown/20 focus:border-dark-orange focus:ring-2 focus:ring-dark-orange/20 outline-none transition-all"
              >
                <option value="">All Tags</option>
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cream text-dark-brown/80 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-dark-brown/60 text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-dark-brown mb-3 group-hover:text-dark-orange transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-dark-brown/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-dark-orange group-hover:translate-x-2 transition-transform">
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4">No articles found</h3>
              <p className="text-dark-brown/70 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSelectedTag('');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
