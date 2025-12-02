import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, FileText, Zap } from "lucide-react";

export default function Mobile() {
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

      {/* Mobile Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="flex flex-col items-center text-center">
          {/* Visual Element - Top on Mobile */}
          <div className="relative w-full max-w-xs h-64 mb-8 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="p-6 bg-white rounded-3xl shadow-2xl border border-gray-100">
                <Scale className="w-20 h-20 text-secondary mx-auto mb-3" />
                <div className="text-center">
                  <div className="text-xs font-semibold text-primary mb-1">
                    Adilet.zan.kz
                  </div>
                  <div className="text-xs text-gray-500">
                    Соответствие гарантировано
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
            {currentContent.hero.headline}
          </h1>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            {currentContent.hero.subheading}
          </p>
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-6 text-base font-semibold"
          >
            {currentContent.hero.cta}
          </Button>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3">
              {currentContent.features.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              ZanAI предоставляет все инструменты, необходимые для создания юридически безопасных документов
            </p>
          </div>

          <div className="space-y-4">
            {currentContent.features.items.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  {index === 0 && (
                    <FileText className="w-5 h-5 text-secondary" />
                  )}
                  {index === 1 && (
                    <Zap className="w-5 h-5 text-secondary" />
                  )}
                  {index === 2 && (
                    <Scale className="w-5 h-5 text-secondary" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Pricing Section */}
      <section className="px-4 py-12">
        <div className="flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3">
              {currentContent.pricing.title}
            </h2>
            <p className="text-sm text-gray-600">
              Выберите план, который подходит вашему бизнесу
            </p>
          </div>

          <div className="space-y-6">
            {currentContent.pricing.items.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border transition-all duration-300 ${
                  index === 1
                    ? "border-secondary bg-white shadow-lg relative"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Популярный выбор
                    </span>
                  </div>
                )}

                <div className={index === 1 ? "mt-2" : ""}>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-sm text-gray-600">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <Button
                    className={`w-full mb-6 rounded-lg py-5 text-base font-semibold ${
                      index === 1
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-primary"
                    }`}
                  >
                    {language === "KZ" ? "Таңдау" : "Выбрать план"}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-2.5 h-2.5 text-secondary"
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
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
