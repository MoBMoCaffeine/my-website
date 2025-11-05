import { Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Footer() {
  const { language } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>
              {language === 'en'
                ? `© ${currentYear} Mohamed Bakr Mohamed. All rights reserved.`
                : `© ${currentYear} محمد بكر محمد. جميع الحقوق محفوظة.`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>
              {language === 'en' ? 'Made with' : 'صنع بـ'}
            </span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>
              {language === 'en' ? 'using React & Tailwind CSS' : 'باستخدام React و Tailwind CSS'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
