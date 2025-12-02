import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, FileText, Zap } from "lucide-react";

export default function Index() {
  const [language, setLanguage] = useState<"KZ" | "RU">("RU");

  const content = {
    KZ: {
      hero: {
        headline: "Қазақстан заңы үшін өткір AI адвокат",
        subheading: "Adilet.zan.kz құрамында екі тілді келісімдерді (ҚЗ/РУ) лезде жасаңыз.",
        cta: "Тегін бастау",
      },
      features: {
        title: "Неліктің ZanAI?",
        items: [
          {
            title: "Жергілік сарапшы",
            description:
              "ҚР заңнамасы мен сотқа ісін біліктіліге арнайтын машина оқытылатын",
          },
          {
            title: "Екі тілді өндіктігі",
            description:
              "Қазақ және орыс тілінде автоматты түрде құжаттарды дайындау",
          },
          {
            title: "ІС Шешімдер",
            description: "Бизнес үшін ішінара заңдық қорғау",
          },
        ],
      },
      pricing: {
        title: "Бағалау",
        items: [
          {
            name: "Бастау",
            price: "Тегін",
            description: "Шаблондарды тегін",
            features: [
              "Шаблон кітабы",
              "Нормативтік аудандар",
            ],
          },
          {
            name: "Про",
            price: "20,000 ₸",
            period: "/ай",
            description: "Автокөлік үшін",
            features: [
              "Шаблон кітабы",
              "Автоматты жасау",
              "Екі тілді түрлендіреуі",
              "Технициялық қолдау",
            ],
          },
          {
            name: "Ұйым",
            price: "Ізі",
            description: "Банктер үшін API",
            features: [
              "API қосымшасы",
              "Ерекше интеграция",
              "Адал технициялық қолдау",
            ],
          },
        ],
      },
    },
    RU: {
      hero: {
        headline: "Ваш AI-адвокат по казахстанскому праву",
        subheading:
          "Создавайте двуязычные контракты (КЗ/РУ), соответствующие Adilet.zan.kz мгновенно.",
        cta: "Начать бесплатно",
      },
      features: {
        title: "Почему ZanAI?",
        items: [
          {
            title: "Локальный эксперт",
            description:
              "Обучена специально на законодательстве РК и судебных прецедентах",
          },
          {
            title: "Двуязычный двигатель",
            description:
              "Автоматически создает документы на казахском и русском языках",
          },
          {
            title: "Решение для МСП",
            description: "Доступная правовая защита для бизнеса",
          },
        ],
      },
      pricing: {
        title: "Цены",
        items: [
          {
            name: "Старт",
            price: "Бесплатно",
            description: "Бесплатные шаблоны",
            features: [
              "Библиотека шаблонов",
              "Базовая поддержка",
            ],
          },
          {
            name: "Pro",
            price: "20,000 ₸",
            period: "/мес",
            description: "Автогенерация контрактов",
            features: [
              "Библиотека шаблонов",
              "Автоматическое создание",
              "Двуязычная трансляция",
              "Приоритетная поддержка",
            ],
          },
          {
            name: "Предприятие",
            price: "По запросу",
            description: "API для банков",
            features: [
              "API интеграция",
              "Кастомизация",
              "Выделенная поддержка",
            ],
          },
        ],
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="section-padding pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="heading-lg text-primary mb-6">
                {currentContent.hero.headline}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                {currentContent.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-fit">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 text-base font-semibold"
                >
                  {currentContent.hero.cta}
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm h-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-100">
                    <Scale className="w-24 h-24 text-secondary mx-auto mb-4" />
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary mb-2">
                        Adilet.zan.kz
                      </div>
                      <div className="text-xs text-gray-500">
                        Соответствие гарантировано
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
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-md text-primary mb-4">
              {currentContent.features.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ZanAI предоставляет все инструменты, необходимые для создания юридически безопасных документов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  {index === 0 && (
                    <FileText className="w-6 h-6 text-secondary" />
                  )}
                  {index === 1 && (
                    <Zap className="w-6 h-6 text-secondary" />
                  )}
                  {index === 2 && (
                    <Scale className="w-6 h-6 text-secondary" />
                  )}
                </div>
                <h3 className="heading-sm text-primary mb-3">
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
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-md text-primary mb-4">
              {currentContent.pricing.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите план, который подходит вашему бизнесу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.pricing.items.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col ${
                  index === 1
                    ? "border-secondary bg-white shadow-2xl scale-105 md:scale-100"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный выбор
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                <Button
                  className={`w-full mb-8 rounded-lg py-6 text-base font-semibold ${
                    index === 1
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-primary"
                  }`}
                >
                  {language === "KZ" ? "Таңдау" : "Выбрать план"}
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-secondary"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
