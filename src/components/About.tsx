import { GraduationCap, MapPin, Award } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left delay-200">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.description}
            </p>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all">
              <div className="p-3 bg-blue-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.about.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.about.university}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t.about.gpa}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                <span className="text-gray-700 dark:text-gray-300">{t.about.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-gray-700 dark:text-gray-300">500+ Problems Solved</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right delay-300">
            <div className="relative z-10 aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-1 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    3.6
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">GPA / 4.0</div>
                  <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Excellent
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
