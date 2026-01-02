import React, { useState } from 'react';
import { Menu, X, ChevronRight, HeartHandshake, ShieldCheck, Home, Users, Phone, Mail, MapPin, CheckCircle2, Globe, Shield, Smile, Building, UserCog, ClipboardList, UserCheck, CreditCard, MessageSquare, BarChart2, FolderKanban, PlusCircle, MinusCircle, BookLock, ShieldAlert, FileText, BookOpen, SmilePlus, Siren, ReceiptText, Truck } from 'lucide-react';
import { TeamCard } from './components/TeamCard';
import { ChatWidget } from './components/ChatWidget';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { TEAM_DATA, SERVICES_DATA, TAGLINE_SUB, TARGET_AUDIENCE_DATA, FOUNDER_MESSAGE, FAQ_DATA, USER_ROLES_DATA, INTEGRATIONS_DATA, PRIVACY_POLICY_TEXT, MISSION_AND_VALUES, VISION, CORE_VALUES  } from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const navLinks = ['About', 'Services', 'Team', 'FAQ', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const iconMap: Record<string, React.ComponentType<any>> = {
    HeartHandshake,
    ShieldCheck,
    Home,
    Users,
    Globe,
    Shield,
    Smile,
    Building,
    UserCog,
    ClipboardList,
    UserCheck,
    CreditCard,
    MessageSquare,
    BarChart2,
    FolderKanban,
    ShieldAlert,
    FileText,
    BookOpen,
    SmilePlus,
    Siren,
    ReceiptText,
    Truck
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
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

            {/* Desktop Menu */}
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

            {/* Mobile Menu Button */}
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

      {/* Hero Section */}
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

      {/* About Section */}
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
      
      {/* Founder's Message Section */}
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

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-20 bg-white">
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

      {/* Services Section */}
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
                    <div className="mb-4 bg-brand-light w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors border border-brand-green/20">
                    {IconComponent && <IconComponent size={32} className="text-brand-green group-hover:text-white transition-colors" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                    </p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>
      
      {/* Platform Features Section */}
      <section id="platform-features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">A Platform Built for Trust</h2>
                    <p className="text-xl text-brand-brown mb-8">Our upcoming digital platform is designed with clear roles to ensure security, transparency, and ease of use for everyone involved.</p>
                    <div className="space-y-6">
                        {USER_ROLES_DATA.map((role, idx) => {
                            const IconComponent = iconMap[role.icon];
                            return (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="bg-brand-light p-4 rounded-lg">
                                        {IconComponent && <IconComponent className="w-8 h-8 text-brand-orange" />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-brand-dark">{role.title}</h3>
                                        <p className="text-gray-600">{role.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-brand-green mb-6">Future-Ready Integrations</h3>
                     <div className="grid grid-cols-2 gap-6">
                        {INTEGRATIONS_DATA.map((integration, idx) => {
                            const IconComponent = iconMap[integration.icon];
                            return(
                                <div key={idx} className="bg-brand-light p-6 rounded-lg flex flex-col items-center justify-center border border-gray-200 hover:border-brand-gold transition-colors">
                                    {IconComponent && <IconComponent className="w-10 h-10 text-brand-brown mb-3" />}
                                    <span className="font-semibold text-gray-700">{integration.name}</span>
                                </div>
                            );
                        })}
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by integrity, driven by compassion. Meet the team protecting your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Answers to common questions about our services and process.</p>
            </div>
            <div className="space-y-4">
                {FAQ_DATA.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <button 
                            className="w-full flex justify-between items-center text-left py-4"
                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        >
                            <h3 className="text-lg font-semibold text-brand-dark">{faq.question}</h3>
                            {openFaqIndex === idx ? <MinusCircle className="text-brand-orange"/> : <PlusCircle className="text-brand-green"/>}
                        </button>
                        {openFaqIndex === idx && (
                            <div className="pt-2 pr-8 pl-2">
                                <p className="text-gray-700 leading-relaxed animate-fade-in-up">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
        <section id="privacy" className="py-20 bg-brand-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-6">
                    <BookLock className="w-16 h-16 text-brand-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">Privacy & Security Commitment</h2>
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
                    <p className="text-gray-700 leading-relaxed text-left">{PRIVACY_POLICY_TEXT}</p>
                    
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">MISSION AND VISION</h2>
                    <p><strong>Mission</strong></p>
                    <p className="text-gray-700 leading-relaxed text-left">{MISSION_AND_VALUES}</p>
                    <p><strong>Vision</strong></p>
                    <p className="text-gray-700 leading-relaxed text-left">{VISION}</p>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">CORE VALUES</h2>
                <p><strong>Core values</strong></p>
                <ul className="space-y-4 text-left">
  {CORE_VALUES.map((value, index) => (
    <li key={index} className="flex gap-2">
      <span className="font-bold text-brand-green">{index + 1}.</span>
      <span className="text-gray-700">{value}</span>
    </li>
  ))}
</ul>
                
                    
                    
            </div>
        </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-green text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold blur-3xl"></div>
           <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-orange blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Reconnect Your Family</h2>
              <p className="text-green-100 text-lg mb-8">
                If you're ready to ensure your children are getting the care they deserve. Contact us today for a confidential consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <h3 className="font-bold text-lg">USA:+1 (903) 990-9760</h3>
                    <p className="text-green-50">Zimbabwe: To be provided ASAP</p>
                    <p className="text-green-200 text-sm">Mon-Fri, 8am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-green-50">info@homeconnect.org</p>
                    <p className="text-green-200 text-sm">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Our Office</h3>
                    <p className="text-green-50">Zimbabwean Office:</p>
                    <p className="text-green-50">10 Aberdeen Road, Avondale, Harare</p>
                    <p className="text-green-50">USA Office</p>
                    <p className="text-green-50">6665 Santa Cristina, Dallas, TX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 border-t-8 border-brand-gold">
              <h3 className="text-2xl font-bold mb-6 text-brand-green">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none bg-gray-50" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none bg-gray-50" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none bg-gray-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none bg-gray-50">
                    <option>Welfare Monitoring</option>
                    <option>Financial Verification</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none bg-gray-50" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                 <img 
                    src="/logo.png" 
                    alt="Home Connect Logo" 
                    className="h-8 w-auto"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                <span className="text-xl font-serif font-bold">Home Connect</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-green-100">
                Connecting Children, Strengthening Families, Building Futures. Empowering diaspora families with trust, transparency, and care.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 {navLinks.map(link => (
                    <li key={link}><button onClick={() => scrollToSection(link.toLowerCase())} className="hover:text-white transition-colors">{link}</button></li>
                 ))}
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-900 pt-8 text-center text-xs text-green-200 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Home Connect. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Proudly Zimbabwean <span className="text-brand-red">♥</span></p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
