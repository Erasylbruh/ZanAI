import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Send, Paperclip, Image } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [language, setLanguage] = useState<"KZ" | "RU">("RU");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      content: language === "KZ" 
        ? "Сәлем! Мен ZanAI, сіздің Қазақстан заңы бойынша AI адвокатым. Уақыт жындысының сілтемесін және заңдық мәселесіңіз туралы көмек сұраңыз."
        : "Привет! Я ZanAI, ваш AI-адвокат по казахстанскому праву. Расскажите мне о вашей правовой проблеме, и я помогу вам составить необходимые документы или найти решение.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const translations = {
    KZ: {
      title: "ZanAI - Өтінеңіз",
      inputPlaceholder: "Ваша заңдық сұрау жаз...",
      send: "Жіберу",
      addFile: "Файл қосу",
      addImage: "Сурет қосу",
      connecting: "Байланыстырылуда...",
    },
    RU: {
      title: "ZanAI - Консультация",
      inputPlaceholder: "Опишите вашу правовую проблему...",
      send: "Отправить",
      addFile: "Добавить файл",
      addImage: "Добавить изображение",
      connecting: "Подключение...",
    },
  };

  const t = translations[language];

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        content: language === "KZ"
          ? "Рахмет сіздің сұрау үшін. Мен сіздің мәселеңізді талдаймын және сізге рәсімді құжаттарды ұсынамын."
          : "Спасибо за ваш вопрос. Я анализирую вашу проблему и помогу вам составить необходимые документы в соответствии с казахстанским законодательством.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const message: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: `📎 ${file.name}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, message]);
    }
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const message: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: `🖼️ ${file.name}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, message]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />

      {/* Main Chat Container */}
      <div className="flex-1 flex flex-col mt-16 overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xl px-6 py-4 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white text-primary border border-gray-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed">
                    {message.content}
                  </p>
                  <span className="text-xs mt-2 block opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-primary border border-gray-200 px-6 py-4 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 items-end">
              {/* Text Input */}
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder={t.inputPlaceholder}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                rows={3}
                disabled={isLoading}
              />

              {/* Action Buttons */}
              <div className="flex gap-2 flex-col sm:flex-row">
                {/* Image Upload Button */}
                <button
                  onClick={() => imageInputRef.current?.click()}
                  disabled={isLoading}
                  className="p-3 sm:p-2 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  title={t.addImage}
                  aria-label={t.addImage}
                >
                  <Image className="w-5 h-5" />
                </button>

                {/* File Upload Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading}
                  className="p-3 sm:p-2 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  title={t.addFile}
                  aria-label={t.addFile}
                >
                  <Paperclip className="w-5 h-5" />
                </button>

                {/* Send Button */}
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-6 py-3 sm:px-4 sm:py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
                >
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">{t.send}</span>
                </Button>
              </div>
            </div>

            {/* File Input Elements (Hidden) */}
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileInput}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.xlsx"
              aria-label={t.addFile}
            />
            <input
              ref={imageInputRef}
              type="file"
              onChange={handleImageInput}
              className="hidden"
              accept="image/*"
              aria-label={t.addImage}
            />

            {/* Helper Text */}
            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              {language === "KZ"
                ? "Enter немесе Shift+Enter ұстап, ескертпе жіберу"
                : "Enter или Shift+Enter для отправки сообщения"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
