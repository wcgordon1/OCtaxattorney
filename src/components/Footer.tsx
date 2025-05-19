import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-brown text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-yellow-orange mb-6">Orange County Tax Attorney</h3>
            <p className="text-white/80 mb-6">
              Professional tax resolution services for individuals and businesses throughout Orange County. We help resolve IRS and state tax issues with expertise and dedication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-dark-orange/20 hover:bg-dark-orange/40 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-dark-orange/20 hover:bg-dark-orange/40 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-dark-orange/20 hover:bg-dark-orange/40 p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-dark-orange/20 hover:bg-dark-orange/40 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-yellow-orange mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <RouterLink to="/services" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Our Services
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/irs-audit-defense" className="text-white/80 hover:text-yellow-orange transition-colors">
                  IRS Audit Defense
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/tax-debt-resolution" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Tax Debt Resolution
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/locations" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Locations
                </RouterLink>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-white/80 hover:text-yellow-orange transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={500} className="text-white/80 hover:text-yellow-orange transition-colors cursor-pointer">
                  Client Results
                </Link>
              </li>
              <li>
                <Link to="faq" smooth={true} duration={500} className="text-white/80 hover:text-yellow-orange transition-colors cursor-pointer">
                  FAQ
                </Link>
              </li>
              <li>
                <RouterLink to="/blog" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Blog
                </RouterLink>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-white/80 hover:text-yellow-orange transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-yellow-orange mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <RouterLink to="/services/irs-audit-defense" className="text-white/80 hover:text-yellow-orange transition-colors">
                  IRS Audit Defense
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/tax-debt-resolution" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Tax Debt Resolution
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/tax-lien-levy" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Tax Lien & Levy Relief
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/business-tax" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Business Tax Issues
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/tax-planning" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Tax Planning
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services/tax-court" className="text-white/80 hover:text-yellow-orange transition-colors">
                  Tax Court Representation
                </RouterLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-yellow-orange mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={18} className="text-dark-orange mr-3 flex-shrink-0" />
                <span className="text-white/80">(714) 555-5555</span>
              </li>
              <li className="flex">
                <Mail size={18} className="text-dark-orange mr-3 flex-shrink-0" />
                <span className="text-white/80">sales@orangecountytaxattorney.com</span>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-dark-orange mr-3 flex-shrink-0" />
                <span className="text-white/80">
                  555 Fake Street<br />
                  Newport Beach, CA 92660
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Orange County Tax Attorney. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-white/60 hover:text-yellow-orange text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-white/60 hover:text-yellow-orange text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap.xml" className="text-white/60 hover:text-yellow-orange text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
        <a
          href="https://www.irvinetaxlawyer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-orange font-serif font-semibold text-base underline hover:text-white transition-colors"
        >
          Part of Irvine Tax Lawyer
        </a>
      </div>
    </footer>
  );
}
