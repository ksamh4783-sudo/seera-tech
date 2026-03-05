import { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette, 
  Database,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'تطوير المواقع',
    description: 'نصمم ونطور مواقع ويب احترافية متجاوبة مع جميع الأجهزة، مع التركيز على تجربة المستخدم والأداء العالي',
    features: [
      'تصميم متجاوب مع جميع الأجهزة',
      'تحسين محركات البحث (SEO)',
      'أداء عالي وسرعة تحميل ممتازة',
      'لوحة تحكم سهلة الاستخدام',
      'دعم فني مستمر'
    ],
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Smartphone,
    title: 'تطبيقات الجوال',
    description: 'نطور تطبيقات جوال احترافية لنظامي iOS وAndroid مع واجهات مستخدم سلسة وأداء ممتاز',
    features: [
      'تطبيقات native و cross-platform',
      'واجهة مستخدم سهلة وسلسة',
      'ربط مع APIs والخدمات السحابية',
      'إشعارات فورية',
      'تحديثات مستمرة'
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Cloud,
    title: 'الحلول السحابية',
    description: 'نوفر حلولاً سحابية متكاملة لتحسين البنية التحتية لأعمالك وضمان استمرارية الخدمة',
    features: [
      'استضافة سحابية آمنة',
      'نسخ احتياطي يومي',
      'قابلية التوسع العالية',
      'حماية من الهجمات',
      'مراقبة على مدار الساعة'
    ],
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Brain,
    title: 'الذكاء الاصطناعي',
    description: 'نطور حلول ذكاء اصطناعي مخصصة لأتمتة عملياتك وتحسين اتخاذ القرار في عملك',
    features: [
      'نماذج تعلم آلي مخصصة',
      'معالجة اللغة الطبيعية',
      'تحليل البيانات المتقدم',
      'توقعات وتوصيات ذكية',
      'تكامل مع الأنظمة الحالية'
    ],
    color: 'orange',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Palette,
    title: 'تصميم UI/UX',
    description: 'نصمم واجهات مستخدم جذابة وسهلة الاستخدام مع التركيز على تجربة المستخدم الفريدة',
    features: [
      'دراسة احتياجات المستخدم',
      'نماذج أولية تفاعلية',
      'تصميمات عصرية وجذابة',
      'اختبار تجربة المستخدم',
      'دليل استخدام شامل'
    ],
    color: 'green',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Database,
    title: 'إدارة البيانات',
    description: 'نوفر حلولاً شاملة لإدارة البيانات وتخزينها وتحليلها بكفاءة وأمان',
    features: [
      'تصميم قواعد البيانات',
      'هجرة البيانات',
      'تحليل البيانات',
      'تقارير ذكية',
      'أمان وحماية البيانات'
    ],
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-32 bg-[#0a0f1c]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm text-cyan-400">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            حلول تقنية <span className="text-gradient">متكاملة</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نقدم مجموعة واسعة من الخدمات التقنية المصممة خصيصاً لمساعدة عملك على النمو والتطور في العصر الرقمي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                data-index={index}
                className={`group relative glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service)}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span>اكتشف المزيد</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                </div>

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-500`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">هل تحتاج إلى خدمة مخصصة؟</p>
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
          >
            تواصل معنا
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-[#0d1424] border-white/10 text-white max-w-lg">
          <DialogHeader>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService?.gradient} flex items-center justify-center mb-4`}>
              {selectedService && <selectedService.icon className="w-8 h-8 text-white" />}
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-white/60">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-4">مميزات الخدمة:</h4>
            <ul className="space-y-3">
              {selectedService?.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => {
                setSelectedService(null);
                scrollToContact();
              }}
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-6 rounded-xl font-semibold"
            >
              اطلب الخدمة الآن
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
