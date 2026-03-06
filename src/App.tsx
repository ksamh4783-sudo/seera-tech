import { Toaster } from '@/components/ui/sonner';
import { FaWhatsapp } from 'react-icons/fa'; // إضافة أيقونة واتساب
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/MyServices';
import About from './sections/About';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WhatsAppWidget from './sections/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]" dir="rtl">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        
        {/* قسم العرض الخاص - الإسكندرية */}
        <section className="py-16 bg-[#0f172a] border-t border-blue-900/30 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              سيرا للحلول التقنية في دوران السيوف 📍
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              تجهيز كافيهات (سيستم كروت نت) بأداء عالٍ و <span className="text-green-400 font-bold underline">سعر مفاجأة</span>! 
              بالإضافة لأنظمة كاميرات مراقبة كاملة تعمل على هاتفك.
            </p>
            <a 
              href="https://wa.me/201065063147?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%B3%D9%8A%D8%B1%D8%A7%20%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84%20%D8%A7%D9%84%D8%AA%D9%82%D9%8ني%D8%A9%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B3%D8%B1%20%D8%A7%D9%84%D9%85%D9%81%D8%A7%D8%AC%D8%A3%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <FaWhatsapp size={28} />
              اسأل عن السعر المفاجأة الآن 🎁
            </a>
            <p className="mt-6 text-sm text-gray-400">
              نخدمكم في: رشدي | سان ستيفانو | كفر عبده | السيوف | ميامي | المندرة وكافة مناطق الإسكندرية.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
