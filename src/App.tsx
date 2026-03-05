import { Toaster } from '@/components/ui/sonner';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
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
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
