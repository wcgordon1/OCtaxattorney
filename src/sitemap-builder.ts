// This file contains the structure for the sitemap.xml generation
// In a production environment, this would be used to dynamically generate the sitemap

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://orangecountytaxattorney.com';
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
  const urls: SitemapUrl[] = [
    // Main Pages
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'weekly', priority: 1.0 },
    
    // Service Pages
    { loc: `${baseUrl}/services/irs-audit-defense`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/services/tax-debt-resolution`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/services/tax-lien-levy`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/services/business-tax`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/services/tax-planning`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/services/tax-court`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    
    // Location Pages
    { loc: `${baseUrl}/locations`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/locations/irvine`, lastmod: today, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/locations/newport-beach`, lastmod: today, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/locations/santa-ana`, lastmod: today, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/locations/anaheim`, lastmod: today, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/locations/tustin`, lastmod: today, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/locations/coto-de-caza`, lastmod: today, changefreq: 'monthly', priority: 0.6 },
    
    // Blog Pages
    { loc: `${baseUrl}/blog`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { loc: `${baseUrl}/blog/how-new-tax-laws-affect-orange-county-property-owners`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/irs-audit-rates-increasing-orange-county`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/small-business-tax-strategies-orange-county`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/resolving-tax-debt-orange-county-options-strategies`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
  ];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';
  
  const urlsXml = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n\n');
  
  return `${xmlHeader}${urlsetOpen}${urlsXml}\n${urlsetClose}`;
};
