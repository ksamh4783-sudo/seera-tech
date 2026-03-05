import { Code2, Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'من نحن', href: '#about' },
  { name: 'تواصل معنا', href: '#contact' }
];

const services = [
  'تطوير المواقع',
  'تطبيقات الجوال',
  'الحلول السحابية',
  'الذكاء الاصطناعي',
  'تصميم UI/UX',
  'إدارة البيانات'
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070b14] pt-20 pb-8 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full"></div>
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">سيرا</span>
                <span className="text-xs text-cyan-400">للحلول التقنية</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              نقدم حلولاً تقنية مبتكرة ومتكاملة لتطوير أعمالك وتحقيق أهدافك في العصر الرقمي
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">النشرة البريدية</h4>
            <p className="text-white/60 text-sm mb-4">
              اشترك في نشرتنا البريدية ليصلك أحدث أخبارنا وعروضنا
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 سيرا للحلول التقنية. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              سياسة الخصوصية
            </button>
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              شروط الاستخدام
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-110 transition-all duration-300 z-50"
        aria-label="العودة للأعلى"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
