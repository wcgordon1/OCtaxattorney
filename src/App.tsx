import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Navbar from './components/Navbar';
import DisclaimerBanner from './components/DisclaimerBanner';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocationPage from './components/LocationPage';
import LocationLinks from './components/LocationLinks';
import LocationsHub from './components/LocationsHub';
import IRSAuditDefense from './pages/IRSAuditDefense';
import TaxDebtResolution from './pages/TaxDebtResolution';
import TaxLienLevy from './pages/TaxLienLevy';
import BusinessTax from './pages/BusinessTax';
import TaxPlanning from './pages/TaxPlanning';
import TaxCourt from './pages/TaxCourt';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

export function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
      <Routes>
        <Route path="/" element={
          <div className="font-sans text-dark-brown">
            <Navbar />
            <DisclaimerBanner />
            <Hero />
            <Services />
            <LocationLinks />
            <About />
            <Process />
            <Benefits />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/locations" element={<LocationsHub />} />
        <Route path="/locations/:locationId" element={<LocationPage />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/irs-audit-defense" element={<IRSAuditDefense />} />
        <Route path="/services/tax-debt-resolution" element={<TaxDebtResolution />} />
        <Route path="/services/tax-lien-levy" element={<TaxLienLevy />} />
        <Route path="/services/business-tax" element={<BusinessTax />} />
        <Route path="/services/tax-planning" element={<TaxPlanning />} />
        <Route path="/services/tax-court" element={<TaxCourt />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
