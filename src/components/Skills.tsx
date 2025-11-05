import { Code2, Globe, Wrench, Users } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Skills() {
  const { t } = useApp();

  const skillCategories = [
    {
      icon: Code2,
      title: t.skills.programming,
      skills: ['C++ (OOP, DS, Algorithms)', 'Python', 'JavaScript (ES6)', 'HTML5 & CSS3'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: t.skills.webDev,
      skills: ['React', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Wrench,
      title: t.skills.tools,
      skills: ['VS Code', 'Git & GitHub', 'Vite', 'WebStorm', 'CLion'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Users,
      title: t.skills.soft,
      skills: ['Problem Solving', 'Team Collaboration', 'Fast Learning', 'Leadership'],
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in delay-500">
          {[
            { label: '500+', sublabel: 'Problems Solved' },
            { label: '3.6', sublabel: 'GPA / 4.0' },
            { label: '2+', sublabel: 'Years Experience' },
            { label: '10+', sublabel: 'Projects Built' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all hover:scale-105"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
