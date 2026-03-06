import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Users, Award, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'التركيز على الجودة',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه'
  },
  {
    icon: Lightbulb,
    title: 'الابتكار المستمر',
    description: 'نسعى دائماً لتبني أحدث التقنيات والحلول المبتكرة'
  },
  {
    icon: Users,
    title: 'الشراكة الحقيقية',
    description: 'نعمل كشريك حقيقي لعملائنا وليس مجرد مزود خدمة'
  },
  {
    icon: Award,
    title: 'التميز في الأداء',
    description: 'نطمح للتميز في كل ما نقدمه من حلول وخدمات'
  }
];

const features = [
  'فريق متخصص ذو خبرة واسعة',
  'دعم فني على مدار الساعة',
  'أسعار تنافسية وشفافة',
  'التزام تام بالمواعيد',
  'ضمان الجودة على جميع المشاريع'
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-[#0a0f1c] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
              <span className="text-sm text-orange-400">من نحن</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              شريكك الموثوق في
              <span className="text-gradient block mt-2">التحول الرقمي</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              سيرا للحلول التقنية هي شركة متخصصة في تقديم الحلول التقنية المتكاملة. 
              نجمع بين الخبرة العميقة والشغف بالتقنية لنقدم حلولاً مبتكرة تساعد عملائنا 
              على تحقيق أهدافهم وتحويل أفكارهم إلى واقع رقمي متميز.
            </p>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              منذ تأسيسنا، عملنا مع العديد من الشركات والمؤسسات في مختلف القطاعات، 
              وساعدناهم في بناء حضور رقمي قوي يدعم نمو أعمالهم ويحقق تطلعاتهم.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
