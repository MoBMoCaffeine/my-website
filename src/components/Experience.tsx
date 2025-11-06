import { Briefcase, Trophy, Calendar } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Experience() {
  const { t, language } = useApp();

  const experiences = [
    {
      title: t.experience.freelance,
      company: 'Self-Initiated',
      period: language === 'en' ? '2023 - Present' : '2023 - حتى الآن',
      location: 'Qena, Egypt',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      achievements: [
        language === 'en'
          ? 'Designed and deployed responsive websites for local businesses'
          : 'صممت ونشرت مواقع ويب متجاوبة للشركات المحلية',
        language === 'en'
          ? 'Built full front-end e-commerce and delivery platforms'
          : 'بنيت منصات تجارة إلكترونية وتوصيل كاملة للواجهة الأمامية',
        language === 'en'
          ? 'Collaborated on university projects applying CS concepts'
          : 'تعاونت في مشاريع جامعية لتطبيق مفاهيم علوم الحاسب',
      ],
    },
    {
      title: t.experience.competitive,
      company: 'Online Platforms',
      period: language === 'en' ? '2023 - Present' : '2023 - حتى الآن',
      location: 'Remote',
      icon: Trophy,
      color: 'from-cyan-500 to-cyan-600',
      achievements: [
        language === 'en'
          ? 'Solved 500+ problems on Codeforces, LeetCode, VJudge'
          : 'حللت أكثر من 500 مسألة على Codeforces و LeetCode و VJudge',
        language === 'en'
          ? 'Implemented custom STL-like containers in C++ using OOP'
          : 'نفذت حاويات مخصصة شبيهة بـ STL في C++ باستخدام البرمجة الكائنية',
        language === 'en'
          ? 'Mastered Data Structures and Algorithms'
          : 'أتقنت هياكل البيانات والخوارزميات',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="group relative p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div
                    className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${exp.color} group-hover:scale-110 transition-transform`}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300 animate-in fade-in"
                          style={{ animationDelay: `${(index * 150) + (i * 100)}ms` }}
                        >
                          <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white text-center animate-in fade-in delay-500">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'NTI Certification in Web Development' : 'شهادة NTI في تطوير الويب'}
          </h3>
          <p className="text-blue-100 mb-2">
            {language === 'en' ? 'National Telecommunications Institute, Qina' : 'المعهد القومي للاتصالات، قنا'}
          </p>
          <p className="text-blue-50">
            {language === 'en' ? 'Completed: 2025 | Rating: soon....' : 'مكتملة: 2025 | التقييم: قريبا...'}
          </p>
        </div>
      </div>
    </section>
  );
}
