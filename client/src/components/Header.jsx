import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
    const { t, language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="text-2xl font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                            Zan<span className="text-primary group-hover:text-secondary dark:group-hover:text-white transition-colors">AI</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            {t('nav.capabilities')}
                        </Link>
                        <Link to="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            {t('nav.pricing')}
                        </Link>
                        <Link to="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            {t('nav.support')}
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        {/* Language Switcher */}
                        <div className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
                            {['KZ', 'RU', 'EN'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang.toLowerCase())}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${language.toUpperCase() === lang
                                        ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>

                        {/* Login Button */}
                        <Link to="/login">
                            <Button variant="default" size="sm" className="hidden sm:inline-flex">
                                {t('nav.login')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
