import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const Header = () => {
    const { t, language, setLanguage } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                            Zan<span className="text-primary group-hover:text-secondary transition-colors">AI</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t('nav.capabilities')}
                        </Link>
                        <Link to="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t('nav.pricing')}
                        </Link>
                        <Link to="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t('nav.support')}
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            {['KZ', 'RU', 'EN'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang.toLowerCase())}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${language.toUpperCase() === lang
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
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
