import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '201065063147'; // Egypt number format without +
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleSendMessage = () => {
    const text = encodeURIComponent(message || 'مرحباً، أريد التواصل معكم');
    window.open(`${whatsappLink}?text=${text}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-[#1f2937] rounded-2xl shadow-2xl overflow-hidden animate-slide-up border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">الدعم الفني</h4>
                <p className="text-white/70 text-xs">سامح كامل - متصل الآن</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#1f2937]">
            <div className="bg-[#374151] rounded-lg rounded-tr-none p-3 mb-4 max-w-[85%]">
              <p className="text-white/90 text-sm">
                مرحباً! 👋 أنا سامح كامل، كيف يمكنني مساعدتك اليوم؟
              </p>
              <span className="text-white/40 text-xs mt-1 block">
                {new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            {/* Quick Replies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['استفسار عن خدمة', 'طلب عرض سعر', 'دعم فني'].map((reply) => (
                <button
                  key={reply}
                  onClick={() => setMessage(reply)}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/70 hover:text-white text-xs transition-all"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="اكتب رسالتك..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white hover:from-emerald-400 hover:to-green-500 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-500'
            : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 shadow-emerald-500/30'
        }`}
        aria-label={isOpen ? 'إغلاق الدردشة' : 'فتح دردشة واتساب'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
