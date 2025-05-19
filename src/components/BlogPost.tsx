import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import SeoMeta from './SeoMeta';

// Import blog posts data (this would typically come from an API)
import { blogPosts } from './Blog';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [tableOfContents, setTableOfContents] = useState<TocItem[]>([]);
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // If post not found, redirect to blog page
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  // Generate table of contents from blog post content
  useEffect(() => {
    if (post) {
      // Parse content to find headings
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content, 'text/html');
      const headings = Array.from(doc.querySelectorAll('h2, h3, h4'));
      
      const toc = headings.map((heading, index) => {
        // Create unique ID for each heading if it doesn't exist
        const id = heading.id || `heading-${index}`;
        heading.id = id;
        
        return {
          id,
          text: heading.textContent || '',
          level: Number.parseInt(heading.tagName.substring(1)) // Get heading level (2 for h2, 3 for h3, etc.)
        };
      });
      
      setTableOfContents(toc);
      
      // Update the post content with IDs for the headings
      const updatedContent = doc.body.innerHTML;
      if (post.content !== updatedContent) {
        post.content = updatedContent;
      }
    }
  }, [post]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll to element with offset for the sticky navbar
      const navbarHeight = 120; // Approximate navbar + banner height
      const position = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  if (!post) {
    return null;
  }

  // Calculate reading time (average reading speed: 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="font-sans text-dark-brown">
      <SeoMeta
        title={`${post.title} | Orange County Tax Attorney Blog`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, Orange County, California tax law`}
        canonicalUrl={`https://orangecountytaxattorney.com/blog/${post.slug}`}
        ogImage={post.image}
        breadcrumbs={[
          { name: "Home", item: "https://orangecountytaxattorney.com/" },
          { name: "Blog", item: "https://orangecountytaxattorney.com/blog" },
          { name: post.title, item: `https://orangecountytaxattorney.com/blog/${post.slug}` }
        ]}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "datePublished": new Date(post.date).toISOString(),
          "dateModified": new Date(post.date).toISOString(),
          "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://orangecountytaxattorney.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Orange County Tax Attorney",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mocha-cdn.com/og.png"
            },
            "url": "https://orangecountytaxattorney.com"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://orangecountytaxattorney.com/blog/${post.slug}`
          },
          "articleBody": post.content.replace(/<[^>]*>/g, ''),
          "keywords": post.tags.join(", "),
          "wordCount": wordCount,
          "timeRequired": `PT${readingTime}M`,
          "articleSection": post.category,
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["article h2", "article h3", "article p"]
          }
        }}
      />
      
      <Helmet>
        <style>
          {`
            .prose h2 {
              font-size: 2.5rem !important;
              font-weight: 700 !important;
              margin-top: 2.5rem !important;
              margin-bottom: 1.5rem !important;
              color: #1a1a1a !important;
              line-height: 1.2 !important;
              font-family: serif !important;
            }
            .prose h3 {
              font-size: 1.875rem !important;
              font-weight: 600 !important;
              margin-top: 2rem !important;
              margin-bottom: 1rem !important;
              color: #2a2a2a !important;
              line-height: 1.3 !important;
              font-family: serif !important;
            }
            .prose h4 {
              font-size: 1.5rem !important;
              font-weight: 600 !important;
              margin-top: 1.75rem !important;
              margin-bottom: 0.75rem !important;
              color: #2a2a2a !important;
              line-height: 1.4 !important;
              font-family: serif !important;
            }
            .prose p {
              font-size: 1.125rem !important;
              line-height: 1.7 !important;
              margin-bottom: 1.5rem !important;
              color: #333 !important;
            }
            .prose ul, .prose ol {
              margin: 1.5rem 0 !important;
              padding-left: 2rem !important;
            }
            .prose li {
              margin-bottom: 0.75rem !important;
              font-size: 1.125rem !important;
              line-height: 1.7 !important;
            }
            .prose strong {
              font-weight: 600 !important;
            }
          `}
        </style>
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 relative">
        <div className="absolute inset-0 bg-dark-brown/70 z-0" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ backgroundImage: `url(${post.image})` }}
        />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-yellow-orange mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-white/80 mb-6 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                {post.category}
              </div>
              <div className="flex items-center">
                <span className="text-yellow-orange">{readingTime} min read</span>
              </div>
            </div>
            
            <p className="text-white/90 text-xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-cream rounded-lg p-6 mb-10 shadow-md">
                <h2 className="text-xl font-serif font-bold text-dark-brown mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="w-full text-left cursor-pointer hover:text-dark-orange transition-colors"
                        style={{ marginLeft: `${(item.level - 2) * 20}px` }}
                        onClick={() => scrollToHeading(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            scrollToHeading(item.id);
                          }
                        }}
                      >
                        <span className="border-b border-dark-brown/20 hover:border-dark-orange pb-1">
                          {item.text}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-dark-brown prose-h2:text-4xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-4 prose-p:text-dark-brown/80 prose-p:my-4 prose-a:text-dark-orange prose-a:no-underline hover:prose-a:underline prose-strong:text-dark-brown prose-strong:font-semibold prose-ul:my-4 prose-ul:pl-5 prose-li:my-2 prose-ol:my-4 prose-ol:pl-5 max-w-none">
              {/* Using a div with dangerouslySetInnerHTML is necessary here as we're rendering HTML content from our CMS */}
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-cream">
              <h3 className="text-lg font-serif font-bold text-dark-brown mb-4">Related Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-4 py-2 bg-cream text-dark-brown/80 rounded-full text-sm hover:bg-dark-orange/10 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-serif font-bold text-dark-brown mb-6">You Might Also Like</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col"
                    >
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-serif font-bold text-dark-brown mb-2 group-hover:text-dark-orange transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-dark-brown/70 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-brown mb-4">
              Need Professional Help with Your Tax Issues?
            </h2>
            <p className="text-dark-brown/80 mb-6">
              Our Orange County tax attorneys provide expert representation for all tax matters, including the issues discussed in this article.
            </p>
            <Link to="/#contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
