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
    title: 'أنظمة المراقبة الذكية',
    description: 'تركيب سيستم كاميرات مراقبة كامل يتيح لك المتابعة المباشرة من هاتفك المحمول 📱 في أي وقت ومن أي مكان بوضوح عالٍ.',
    features: [
      'ربط نظام المراقبة بالموبايل للمتابعة عن بعد',
      'تركيب كاميرات IP و CCTV بدقة 4K و Full HD',
      'برمجة أجهزة التسجيل DVR & NVR وتجهيز الهاردات',
      'دعم فني وصيانة في السيوف وكافة مناطق الإسكندرية',
      'حلول تأمين الفنادق والشركات والكافيهات'
    ],
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Tv,
    title: 'صيانة وبرمجة الشاشات',
    description: 'مركز متخصص في دوران السيوف لصيانة الشاشات (LED, LCD) باستخدام أحدث المبرمجات وقطع الغيار الأصلية 🛠️.',
    features: [
      'شحن فلاشات وبرمجة السوفت وير بالمبرمجة',
      'فك وتركيب قطع الغيار الأصلية وتغيير الليدات',
      'إصلاح أعطال الباور والبيانات (Panel Repair)',
      'تحديث أنظمة الشاشات السمارت وتطبيقاتها',
      'صيانة فورية مع ضمان على قطع الغيار'
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Wifi,
    title: 'سيستم كروت النت (Hotspot)',
    description: 'تجهيز كافيهات ومطاعم الإسكندرية بسيستم كروت نت متكامل. أداء سريع واستقرار تام.. والسعر مفاجأة! 🎁',
    features: [
      'إنشاء سيستم كروت (User Manager) احترافي',
      'توزيع الإشارة بأقوى أجهزة الـ Access Points',
      'تحديد السرعات والتحكم الكامل في المستخدمين',
      'حماية الشبكة من الاختراق والبرامج الضارة',
      'دعم فني مخصص للكافيهات لضمان عدم الانقطاع'
    ],
    color: 'orange',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Store,
    title: 'أنظمة الكاشير (POS)',
    description: 'حلول متكاملة لإدارة المبيعات والمخازن مخصصة للكافيتريات والمطاعم والشركات في الإسكندرية 💰.',
    features: [
      'تركيب وبرمجة أجهزة الكاشير والباركود',
      'سيستم مبيعات وجرد لحظي بدقة عالية',
      'ربط طابعات الفواتير والموازين الإلكترونية',
      'تدريب الموظفين على استخدام نظام الإدارة',
      'تقارير دورية للأرباح والمخزون'
    ],
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Satellite,
    title: 'الساتالايت والدش المركزي',
    description: 'تركيب وصيانة أنظمة الدش المركزي وبرمجة الرسيفرات بأحدث ملفات القنوات والترددات 📡.',
    features: [
      'تركيب دش مركزي للفنادق والعمارات السكنية',
      'برمجة وتحديث جميع أنواع الرسيفرات (HD/4K)',
      'تنزيل أحدث ملفات القنوات المرتبة',
      'تحديث السوفت وير لفتح تطبيقات المشاهدة',
      'ضبط الإشارة لضمان جودة بث عالية'
    ],
    color: 'green',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: ShieldCheck,
    title: 'عقود الصيانة والتركيبات',
    description: 'نلتزم بتقديم أفضل خدمة تركيب وصيانة دورية لضمان عمل كافة أنظمتك التقنية بكفاءة 🛡️.',
    features: [
      'زيارات صيانة دورية لمنطقة السيوف وكافة الإسكندرية',
      'استجابة سريعة للأعطال الطارئة في الكافيهات والشركات',
      'توفير قطع الغيار بأسعار تنافسية',
      'تحديث دوري لكافة الأنظمة والبرامج',
      'تقارير فنية عن حالة الأجهزة والشبكات'
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
      { threshold: 0.1 }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm text-cyan-400">سيرا للحلول التقنية - الإسكندرية</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            حلول <span className="text-gradient">أمان وإدارة</span> متكاملة
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            متخصصون في تجهيز الكافيهات والشركات بأحدث الأنظمة من دوران السيوف إلى كافة أرجاء الإسكندرية
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
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-[#0d1424] border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-white/60 text-right">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 text-right">
            <h4 className="text-white font-semibold mb-4">مميزات الخدمة:</h4>
            <ul className="space-y-3">
              {selectedService?.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-end gap-3 text-white/70">
                  <span>{feature}</span>
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
              اطلب السعر المفاجأة الآن 🎁
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
