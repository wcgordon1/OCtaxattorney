import { Helmet } from 'react-helmet-async';
import { BreadcrumbList, WithContext } from 'schema-dts';

interface SeoMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{name: string; item: string}>;
  schemaData?: any;
}

export default function SeoMeta({
  title,
  description,
  keywords = "Orange County tax attorney, tax resolution, IRS audit defense, tax debt relief, California tax law, Orange County",
  canonicalUrl = "https://orangecountytaxattorney.com",
  ogImage = "https://mocha-cdn.com/og.png",
  breadcrumbs,
  schemaData
}: SeoMetaProps) {
  // Generate breadcrumb schema
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs?.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    })) || []
  };

  // Default business schema (will be overridden if schemaData is provided)
  const defaultBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Orange County Tax Attorney",
    "description": description,
    "url": canonicalUrl,
    "logo": "https://mocha-cdn.com/og.png",
    "image": ogImage,
    "telephone": "(714) 555-1234",
    "email": "sales@orangecountytaxattorney.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Main Street, Suite 500",
      "addressLocality": "Newport Beach",
      "addressRegion": "CA",
      "postalCode": "92660",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6189,
      "longitude": -117.9298
    },
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/orangecountytaxattorney",
      "https://twitter.com/octaxattorney",
      "https://www.linkedin.com/company/orange-county-tax-attorney"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 33.7175,
        "longitude": -117.8311
      },
      "geoRadius": "30000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax Attorney Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IRS Audit Defense"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Debt Resolution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Lien & Levy Relief"
          }
        }
      ]
    }
  };

  const schema = schemaData || defaultBusinessSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Orange County" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Orange County Tax Attorney" />
      
      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
