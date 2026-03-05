import { useEffect, useRef, useState } from 'react';
import { 
  Video, 
  Tv, 
  Satellite, 
  Wifi, 
  Store, 
  ShieldCheck,
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
    icon: Video,
    title: 'أنظمة المراقبة (CCTV & IP)',
    description: 'توريد وتركيب أحدث أنظمة الكاميرات مع حلول المراقبة عن بعد للفنادق والشركات لضمان أقصى درجات الأمان.',
    features: [
      'تركيب كاميرات IP و CCTV بدقة عالية',
      'ربط نظام المراقبة بالموبايل للمتابعة عن بعد',
      'برمجة أجهزة التسجيل DVR & NVR',
      'عقود صيانة دورية للمنشآت الكبيرة',
      'حلول تخزين البيانات والنسخ الاحتياطي'
    ],
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Tv,
    title: 'صيانة وبرمجة الشاشات',
    description: 'مركز متخصص لصيانة الشاشات المتقدمة يشمل تغيير البانل وتحديث السوفت وير باستخدام أحدث المبرمجات.',
    features: [
      'تغيير البانل (Panel Replacement) بدقة',
      'شحن الفلاشات وتحديث السوفت وير بالمبرمجة',
      'إصلاح أعطال الباور والإضاءة (Backlight)',
      'تحديث الأنظمة للشاشات السمارت والـ 4K',
      'صيانة شاشات العرض الكبيرة للفنادق'
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Store,
    title: 'أنظمة الكاشير وإدارة المنشآت',
    description: 'حلول متكاملة لإدارة المبيعات والمخازن (POS) مخصصة للكافيتريات والمطاعم والشركات التجارية.',
    features: [
      'تركيب وبرمجة سيستم الكاشير المتكامل',
      'ربط الطابعات والموازين وأجهزة الباركود',
      'تقارير مبيعات وجرد لحظية بدقة عالية',
      'أنظمة إدارة المخازن والموردين',
      'دعم فني سريع لحل مشكلات السيستم'
    ],
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Wifi,
    title: 'شبكات الإنترنت (Hotspot)',
    description: 'تركيب أنظمة كروت الإنترنت وتوزيع الإشارة للمساحات الواسعة في الكافيهات والأماكن العامة.',
    features: [
      'إنشاء سيستم كروت نت (User Manager)',
      'توزيع الإشارة بأقوى أجهزة الـ Access Points',
      'تحديد السرعات ومدة الاستخدام لكل مستخدم',
      'تغطية كاملة للفنادق والمنشآت الكبيرة',
      'حماية الشبكة من الاختراق والاستخدام غير المشروع'
    ],
    color: 'orange',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Satellite,
    title: 'أنظمة الساتالايت المركزية',
    description: 'خدمات احترافية لتركيب الدش المركزي وبرمجة الرسيفرات وتحديث القنوات لجميع الأنواع.',
    features: [
      'تركيب أنظمة الدش المركزي للفنادق والعمارات',
      'برمجة وتحديث جميع أنواع الرسيفرات',
      'تنزيل أحدث ملفات القنوات وترتيبها',
      'تحديث السوفت وير لفتح تطبيقات المشاهدة',
      'صيانة وضبط جودة الإشارة والترددات'
    ],
    color: 'green',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: ShieldCheck,
    title: 'عقود الصيانة السنوية',
    description: 'نقدم حلول الدعم الفني المستمر وعقود الصيانة الدورية للشركات والمنشآت لضمان استمرارية العمل.',
    features: [
      'زيارات دورية لفحص جميع الأنظمة التقنية',
      'أولوية الاستجابة في حالات الطوارئ',
      'توفير قطع الغيار الأصلية والبديلة',
      'تحديث دوري لجميع البرامج والأنظمة',
      'تقارير دورية عن حالة البنية التحتية'
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm text-cyan-400">حلولنا التقنية</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            خدمات <span className="text-gradient">متكاملة</span> لمنشأتك
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نوفر مجموعة واسعة من الحلول التقنية المصممة خصيصاً للفنادق والشركات والكافيتريات بأعلى معايير الجودة
          </p>
        </div>

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
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span>اكتشف التفاصيل</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                </div>
                <div className={`absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-500`} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">هل تحتاج إلى حل تقني مخصص؟</p>
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
          >
            اطلب استشارة مجانية
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>

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
            <h4 className="text-white font-semibold mb-4">ماذا نقدم في هذه الخدمة:</h4>
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
