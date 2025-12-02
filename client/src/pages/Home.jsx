import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Scale, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t, language } = useLanguage();

    // Content mapping based on language for dynamic rendering
    // Note: In a real app, this structure might be in the translations file itself,
    // but here we map it to match the structure of the provided Index.tsx
    const content = {
        hero: {
            headline: t('hero.title'),
            subheading: t('hero.subtitle'),
            cta: t('hero.cta'),
        },
        features: {
            title: t('features.why'),
            items: [
                { title: t('features.local.title'), description: t('features.local.desc'), icon: FileText },
                { title: t('features.bilingual.title'), description: t('features.bilingual.desc'), icon: Zap },
                { title: t('features.sme.title'), description: t('features.sme.desc'), icon: Scale },
            ],
        },
        pricing: {
            title: t('pricing.title'),
            items: [
                {
                    name: t('pricing.start'),
                    price: t('pricing.free'),
                    description: t('pricing.free'), // Using same key for desc as placeholder
                    features: [t('pricing.features.template'), t('pricing.features.basic')],
                },
                {
                    name: t('pricing.pro'),
                    price: '20,000 ₸',
                    period: t('pricing.month'),
                    description: t('pricing.features.auto'),
                    features: [
                        t('pricing.features.template'),
                        t('pricing.features.auto'),
                        t('pricing.features.bilingual'),
                        t('pricing.features.dedicated'), // Added extra to match design count
                    ],
                    popular: true,
                },
                {
                    name: t('pricing.enterprise'),
                    price: t('pricing.onrequest'),
                    description: t('pricing.features.api'),
                    features: [
                        t('pricing.features.api'),
                        t('pricing.features.custom'),
                        t('pricing.features.dedicated'),
                    ],
                },
            ],
        },
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                                {content.hero.headline}
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {content.hero.subheading}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                                <Link to="/chat">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        {content.hero.cta}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                            <div className="relative w-full max-w-sm h-80 lg:h-96">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl animate-pulse" />
                                <div className="relative h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                    <div className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 w-64 h-64 flex flex-col items-center justify-center">
                                        <Scale className="w-20 h-20 text-secondary mb-4" />
                                        <div className="text-center">
                                            <div className="text-sm font-bold text-primary mb-1">
                                                Adilet.zan.kz
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">
                                                {t('hero.compliance')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            {content.features.title}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            ZanAI предоставляет все инструменты, необходимые для создания юридически безопасных документов
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.features.items.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                                    <feature.icon className="w-7 h-7 text-secondary group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            {content.pricing.title}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Выберите план, который подходит вашему бизнесу
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.pricing.items.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col relative ${plan.popular
                                        ? "border-secondary bg-white shadow-2xl scale-105 md:scale-100 z-10"
                                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                                            {t('pricing.popular')}
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-primary mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-primary">
                                            {plan.price}
                                        </span>
                                        {plan.period && (
                                            <span className="text-gray-600 ml-1 font-medium">{plan.period}</span>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    className={`w-full mb-8 rounded-lg py-6 text-base font-semibold shadow-md transition-transform active:scale-95 ${plan.popular
                                            ? "bg-primary hover:bg-primary/90 text-white"
                                            : "bg-gray-100 hover:bg-gray-200 text-primary"
                                        }`}
                                >
                                    {t('pricing.select')}
                                </Button>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <svg
                                                    className="w-3 h-3 text-green-600"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
