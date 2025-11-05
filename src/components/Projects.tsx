import { ExternalLink, Github } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Projects() {
  const { t, language } = useApp();

  const projects = [
    {
      title: language === 'en' ? 'Order Delivery Website' : 'موقع توصيل الطلبات',
      description:
        language === 'en'
          ? 'Responsive front-end app for order tracking and delivery management with real-time updates'
          : 'تطبيق واجهة أمامية متجاوب لتتبع الطلبات وإدارة التوصيل مع تحديثات فورية',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      color: 'from-blue-500 to-blue-600',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: language === 'en' ? 'Health Checkup Booking System' : 'نظام حجز الفحوصات الطبية',
      description:
        language === 'en'
          ? 'User-friendly platform for elderly users to book medical appointments with simplified navigation'
          : 'منصة سهلة الاستخدام لكبار السن لحجز المواعيد الطبية مع تنقل مبسط',
      tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      color: 'from-cyan-500 to-cyan-600',
      gradient: 'from-cyan-500/10 to-teal-500/10',
    },
    {
      title: language === 'en' ? 'E-Commerce Website' : 'موقع التجارة الإلكترونية',
      description:
        language === 'en'
          ? 'Food product sales page with cart functionality and checkout simulation for small businesses'
          : 'صفحة بيع منتجات غذائية مع عربة تسوق ومحاكاة الدفع للشركات الصغيرة',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      color: 'from-teal-500 to-teal-600',
      gradient: 'from-teal-500/10 to-emerald-500/10',

       codeLink: 'https://github.com/MoBMoCaffeine/EcommerceWebPage',
      demoLink: 'https://rad-moonbeam-5a4db6.netlify.app/'
    },
    {
      title: language === 'en' ? 'Custom C++ Container (STL Simulation)' : 'حاوية C++ مخصصة (محاكاة STL)',
      description:
        language === 'en'
          ? 'Hand-built dynamic array with STL-like functionality using OOP principles and templates'
          : 'مصفوفة ديناميكية مبنية يدويًا مع وظائف شبيهة بـ STL باستخدام مبادئ البرمجة الكائنية',
      tech: ['C++', 'OOP', 'Templates', 'Data Structures'],
      color: 'from-emerald-500 to-emerald-600',
      gradient: 'from-emerald-500/10 to-green-500/10',

      codeLink: 'https://github.com/MoBMoCaffeine/handMadeVector',
      demoLink: 'https://github.com/MoBMoCaffeine/handMadeVector/blob/main/Vec.h'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full border border-blue-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={Projects.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>{language === 'en' ? 'Code' : 'الكود'}</span>
                    </a>
                    <a
                      href={Projects.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{language === 'en' ? 'Demo' : 'عرض'}</span>
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-in fade-in delay-600">
          <a
            href="https://github.com/MoBMoCaffeine?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            {language === 'en' ? 'View All Projects on GitHub' : 'عرض جميع المشاريع على GitHub'}
          </a>
        </div>
      </div>
    </section>
  );
}
