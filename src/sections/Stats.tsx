import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Clock, Trophy } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Briefcase,
    value: 150,
    suffix: '+',
    label: 'مشروع منجز',
    color: 'cyan'
  },
  {
    icon: Users,
    value: 80,
    suffix: '+',
    label: 'عميل سعيد',
    color: 'purple'
  },
  {
    icon: Clock,
    value: 5,
    suffix: '+',
    label: 'سنوات خبرة',
    color: 'orange'
  },
  {
    icon: Trophy,
    value: 99,
    suffix: '%',
    label: 'نسبة رضا العملاء',
    color: 'green'
  }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((stat) => Math.floor(stat.value * easeOut)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(stats.map((stat) => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'from-cyan-500 to-blue-600',
      purple: 'from-purple-500 to-pink-600',
      orange: 'from-orange-500 to-red-600',
      green: 'from-emerald-500 to-teal-600'
    };
    return colors[color] || colors.cyan;
  };

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      orange: 'text-orange-400',
      green: 'text-emerald-400'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="stats" ref={sectionRef} className="relative py-24 bg-[#0a0f1c] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm text-cyan-400">إنجازاتنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            أرقام تتحدث عن <span className="text-gradient">نجاحنا</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نفخر بما حققناه من إنجازات على مدى سنوات عملنا في مجال الحلول التقنية
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClass(stat.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClass(stat.color)} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="relative mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {counts[index]}
                  </span>
                  <span className={`text-3xl md:text-4xl font-bold ${getIconColor(stat.color)}`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-white/60 text-sm font-medium">{stat.label}</p>

                {/* Border */}
                <div className={`absolute inset-0 rounded-2xl border border-white/10 group-hover:border-${stat.color}-500/30 transition-colors duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
