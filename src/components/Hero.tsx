import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Hero() {
  const { t } = useApp();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 animate-in fade-in delay-100">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom delay-200">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-in fade-in delay-300">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 animate-in fade-in delay-400">
            <MapPin className="w-5 h-5" />
            <span>Qena, Egypt</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in delay-500">
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-8 py-3 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t.hero.downloadCV}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-in fade-in delay-600">
            <a
              href="https://github.com/MoBMoCaffeine"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-bakr-6641b1376?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BteWrdxsKRNWgivKMwzCpdg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:bakrm1921@gmail.com"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
