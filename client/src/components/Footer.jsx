import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-secondary text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold mb-4">
                            Zan<span className="text-primary">AI</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            {t('footer.desc')}
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">{t('footer.product')}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.capabilities')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.pricing')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('footer.reviews')}</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">{t('footer.company')}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('footer.about')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('footer.blog')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('footer.careers')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © 2025 ZanAI. {t('footer.rights')}
                    </p>
                    <div className="flex gap-6">
                        {/* Social icons placeholder */}
                        <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer" />
                        <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer" />
                        <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
