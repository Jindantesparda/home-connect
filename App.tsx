import React, { useState } from 'react';
import { 
  Menu, X, ChevronRight, HeartHandshake, ShieldCheck, Home, Users, Phone, Mail, MapPin, 
  CheckCircle2, Globe, Shield, Smile, Building, UserCog, ClipboardList, UserCheck, 
  CreditCard, MessageSquare, BarChart2, FolderKanban, PlusCircle, MinusCircle, 
  BookLock, ShieldAlert, FileText, BookOpen, SmilePlus, Siren, ReceiptText, Truck,
  Target, Eye, Star, Download
} from 'lucide-react';
import { TeamCard } from './components/TeamCard';
import { ChatWidget } from './components/ChatWidget';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { 
  TEAM_DATA, SERVICES_DATA, TAGLINE_SUB, TARGET_AUDIENCE_DATA, FOUNDER_MESSAGE, 
  FAQ_DATA, USER_ROLES_DATA, INTEGRATIONS_DATA, PRIVACY_POLICY_TEXT, 
  MISSION_AND_VALUES, VISION, CORE_VALUES  
} from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const navLinks = ['About', 'Services', 'Team', 'FAQ', 'Resources', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const iconMap: Record<string, React.ComponentType<any>> = {
    HeartHandshake, ShieldCheck, Home, Users, Globe, Shield, Smile, Building, 
    UserCog, ClipboardList, UserCheck, CreditCard, MessageSquare, BarChart2, 
    FolderKanban, ShieldAlert, FileText, BookOpen, SmilePlus, Siren, 
    ReceiptText, Truck
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
              <img 
                src="/images/Logo.png" 
                alt="Home Connect Logo" 
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  target.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
                }}
              />
              <div className="logo-fallback hidden flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-green rounded-lg text-white">
                   <Home size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl font-serif font-bold text-brand-green leading-none">Home Connect</h1>
                  <p className="text-xs text-brand-orange tracking-wider font-bold mt-1">CONNECTING CHILDREN</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-brand-green font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} variant="secondary" size="sm">
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-green hover:text-green-800 p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/KidsBackground.png"
            alt="A happy family in Zimbabwe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-dark/90 to-brand-brown/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/50 bg-brand-gold/20 text-brand-gold mb-6 backdrop-blur-sm">
              <span className="text-sm font-bold uppercase tracking-wider">Redefining Connections</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Your Trusted Partner in Child Welfare
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl border-l-4 border-brand-orange pl-4">
              {TAGLINE_SUB} We provide peace of mind by ensuring your children are safe, their needs are met, and your resources are used as intended.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('contact')} variant="secondary">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white hover:border-white" onClick={() => scrollToSection('services')}>
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-gold to-brand-red"></div>
      </section>

      <Logo />

      {/* 3. About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/30">
                <img src="/images/KidsPlaying.jpg" alt="Children playing" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-brown p-8 rounded-xl shadow-xl hidden lg:block border-l-4 border-brand-orange">
                <p className="text-white font-serif text-2xl font-bold">"Above and beyond,<br/>we redefine connections"</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-green mb-6">Peace of Mind for Diaspora Parents</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Living abroad while your children remain at home is one of the hardest sacrifices a parent can make. The worry about their daily welfare, school attendance, and happiness is constant.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Home Connect bridges that gap. We are a team of dedicated social workers acting as your eyes and ears on the ground. We don't just monitor; we care. We ensure the money you send builds the future you envision.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional Social Worker Consultations",
                  "Transparent Financial Reporting",
                  "Direct Child Welfare Verification"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-green w-6 h-6" />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Founder's Message Section */}
      <section id="founder-message" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <img
                        src="/images/Felix.png"
                        alt="Mr. Felix Ngirazi"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-brand-gold/50 shadow-md"
                    />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-serif font-bold text-brand-green mb-4">A Message from Our Founder</h2>
                    <p className="text-gray-600 italic leading-relaxed mb-6">"{FOUNDER_MESSAGE}"</p>
                    <div>
                        <p className="font-bold text-brand-dark text-lg">Mr. Felix Ngirazi</p>
                        <p className="text-brand-orange font-semibold">Founder & Chairperson</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Mission, Vision & Core Values */}
      <section id="mission-values" className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-brand-green/10 p-3 rounded-xl">
                  <Target className="text-brand-green w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-green">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-brand-green pl-6">
                {MISSION_AND_VALUES}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-xl">
                  <Eye className="text-brand-orange w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-orange">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-brand-orange pl-6">
                {VISION}
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-green mb-4">Core Values</h2>
              <p className="text-brand-brown font-medium">The principles that guide every connection we make.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((value, index) => {
                const [title, desc] = value.split(':');
                return (
                  <div key={index} className="bg-brand-light p-6 rounded-xl border border-brand-green/10 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <Star className="text-brand-gold w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-brand-dark mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who We Serve Section */}
      <section id="who-we-serve" className="py-20 bg-brand-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Who We Serve</h2>
            <p className="text-xl text-brand-brown max-w-3xl mx-auto">
              Home Connect is dedicated to supporting a wide range of individuals and groups committed to the well-being of children.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {TARGET_AUDIENCE_DATA.map((audience, idx) => {
              const IconComponent = iconMap[audience.icon];
              return (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-brand-green group hover:border-brand-orange flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[30%]">
                  <div className="mb-6 bg-brand-light w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors border border-brand-green/20">
                    {IconComponent && <IconComponent size={32} className="text-brand-green group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                      {audience.description}
                  </p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* 7. Services Section */}
      <section id="services" className="py-20 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Our Core Services</h2>
            <p className="text-xl text-brand-brown max-w-2xl mx-auto">
              Comprehensive solutions designed to bridge the distance and ensure the wellbeing of your family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => {
              const IconComponent = iconMap[service.icon];
              return (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group flex flex-col">
                <div className="aspect-w-16 aspect-h-9">
                    <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <div className="
