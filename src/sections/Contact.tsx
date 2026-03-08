import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'samh_rizk2007@yahoo.com',
    href: 'mailto:samh_rizk2007@yahoo.com'
  },
  {
    icon: Phone,
    label: 'الدعم الفني والواتساب',
    value: 'سامح كامل: 01065063147',
    href: 'tel:+201065063147'
  },
  {
    icon: MapPin,
    label: 'الموقع',
    value: 'الإسكندرية، مصر',
    href: '#'
  }
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success('تم إرسال رسالتك بنجاح!', {
      description: 'سنقوم بالتواصل معك في أقرب وقت ممكن',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-32 bg-[#0a0f1c] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm text-cyan-400">تواصل معنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            لنبدأ <span className="text-gradient">مشروعك</span> اليوم
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي. تواصل معنا الآن واحصل على استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">ساعات العمل</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/60">السبت - الخميس</span>
                  <span className="text-white">9:00 ص - 9:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">الجمعة</span>
                  <span className="text-cyan-400">مغلق</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">أرسل رسالتك</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">الاسم الكامل</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="سامج"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">البريد الإلكتروني</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">رقم الهاتف</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01065063147"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">الرسالة</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    إرسال الرسالة
                    <Send className="w-5 h-5 mr-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
