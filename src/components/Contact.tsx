import { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useApp } from '../contexts/AppContext';

export default function Contact() {
  const { t, language } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'bakrm1921@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError(language === 'en' ? 'Failed to send message. Please try again.' : 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-in fade-in slide-in-from-left delay-200">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Let\'s Connect' : 'دعنا نتواصل'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {language === 'en'
                  ? 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!'
                  : 'أنا دائمًا منفتح لمناقشة مشاريع جديدة أو أفكار إبداعية أو فرص للمشاركة في رؤيتك. لا تتردد في التواصل!'}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:bakrm1921@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-all hover:scale-105 group"
                >
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      bakrm1921@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-bakr-6641b1376?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BteWrdxsKRNWgivKMwzCpdg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-all hover:scale-105 group"
                >
                  <div className="p-3 bg-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      Mohamed Bakr
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/MoBMoCaffeine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-all hover:scale-105 group"
                >
                  <div className="p-3 bg-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                    <div className="text-gray-900 dark:text-white font-medium">Mohamed Bakr</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'en' ? 'Location' : 'الموقع'}
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">Qena, Egypt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.send}
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-300 text-center animate-in fade-in slide-in-from-bottom">
                  {language === 'en'
                    ? 'Message sent successfully! I\'ll get back to you soon.'
                    : 'تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.'}
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-300 text-center animate-in fade-in slide-in-from-bottom">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
