import { ArrowRight, ChevronRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DisclaimerBanner from './DisclaimerBanner';
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
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter posts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts(blogPosts);
    } else {
      const lowercasedSearch = searchTerm.toLowerCase();
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(lowercasedSearch) || 
        post.excerpt.toLowerCase().includes(lowercasedSearch) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercasedSearch))
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="font-sans text-dark-brown">
      <SeoMeta
        title="Tax Law Blog | Orange County Tax Attorney Resources"
        description="Expert tax law insights for Orange County residents and businesses. Stay informed about IRS audits, tax debt resolution, and tax planning strategies specific to Orange County, California."
        keywords="Orange County tax blog, California tax law, IRS audit defense, tax debt resolution, Orange County tax attorney, tax planning strategies"
        canonicalUrl="https://orangecountytaxattorney.com/blog"
        breadcrumbs={[
          { name: "Home", item: "https://orangecountytaxattorney.com/" },
          { name: "Blog", item: "https://orangecountytaxattorney.com/blog" }
        ]}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": "Tax Law Blog | Orange County Tax Attorney Resources",
          "description": "Expert tax law insights for Orange County residents and businesses.",
          "publisher": {
            "@type": "Organization",
            "name": "Orange County Tax Attorney",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mocha-cdn.com/og.png"
            }
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": new Date(post.date).toISOString(),
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Orange County Tax Attorney",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mocha-cdn.com/og.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://orangecountytaxattorney.com/blog/${post.slug}`
            },
            "keywords": post.tags.join(", ")
          }))
        }}
      />
      
      <Navbar />
      <DisclaimerBanner />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-4">
              Tax Insights for <span className="text-dark-orange">Orange County</span>
            </h1>
            <p className="text-xl text-dark-brown/80 mb-8">
              Expert analysis and practical advice on tax issues affecting Orange County residents and businesses.
            </p>
            
            <div className="flex items-center bg-white rounded-lg shadow-md p-2 max-w-xl mx-auto">
              <Search className="text-dark-orange ml-2" size={20} />
              <input
                type="text"
                placeholder="Search articles by keyword or topic..."
                className="w-full p-2 focus:outline-none text-dark-brown/80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-3">
              <Link to={`/blog/${blogPosts[0].slug}`} className="group">
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-yellow-orange text-sm font-medium uppercase mb-2">Featured</span>
                    <h2 className="text-white text-2xl md:text-3xl font-serif font-bold mb-2 group-hover:text-yellow-orange transition-colors">{blogPosts[0].title}</h2>
                    <p className="text-white/90 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{blogPosts[0].date} • {blogPosts[0].author}</span>
                      <span className="text-yellow-orange font-medium flex items-center">
                        Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              {blogPosts.slice(1, 3).map(post => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group block">
                  <div className="bg-cream rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg flex flex-col h-[190px]">
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-dark-brown mb-2 group-hover:text-dark-orange transition-colors">{post.title}</h3>
                        <p className="text-dark-brown/80 text-sm line-clamp-2">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-dark-brown/60 text-xs">{post.date}</span>
                        <span className="text-dark-orange text-sm font-medium flex items-center">
                          Read More <ChevronRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* All Articles */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-dark-orange text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-dark-brown mb-3 group-hover:text-dark-orange transition-colors">{post.title}</h3>
                    <p className="text-dark-brown/80 mb-4 text-sm flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-dark-brown/60 text-xs">{post.date}</span>
                      <span className="text-dark-orange font-medium flex items-center text-sm">
                        Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-serif font-bold text-dark-brown mb-2">No articles found</h3>
              <p className="text-dark-brown/80">Try adjusting your search terms</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 btn-secondary"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-dark-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Need Professional Tax Help in Orange County?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our specialized tax attorneys are ready to help you resolve your tax issues. Schedule a confidential consultation to discuss your situation.
          </p>
          <Link to="/#contact" className="btn-primary bg-yellow-orange hover:bg-yellow-orange/90 text-dark-brown">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
