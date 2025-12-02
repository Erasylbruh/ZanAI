import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Chat() {
    const { language, t } = useLanguage();

    // Initial message based on language
    const getInitialMessage = (lang) => {
        return lang === 'kz'
            ? "Сәлем! Мен ZanAI, сіздің Қазақстан заңы бойынша AI адвокатым. Заңдық мәселеңіз туралы айтып беріңіз, мен сізге көмектесемін."
            : lang === 'en'
                ? "Hello! I am ZanAI, your AI lawyer for Kazakhstan law. Tell me about your legal issue, and I will help you."
                : "Привет! Я ZanAI, ваш AI-адвокат по казахстанскому праву. Расскажите мне о вашей правовой проблеме, и я помогу вам.";
    };

    const [messages, setMessages] = useState([
        {
            id: "1",
            sender: "ai",
            content: getInitialMessage(language),
            timestamp: new Date(),
        },
    ]);

    // Update initial message when language changes (only if it's the only message)
    useEffect(() => {
        if (messages.length === 1 && messages[0].sender === 'ai') {
            setMessages([{ ...messages[0], content: getInitialMessage(language) }]);
        }
    }, [language]);

    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);

    // Auto-scroll to latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = {
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
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                sender: "ai",
                content: language === "kz"
                    ? "Рахмет сіздің сұрау үшін. Мен сіздің мәселеңізді талдаймын және сізге рәсімді құжаттарды ұсынамын."
                    : language === "en"
                        ? "Thank you for your query. I am analyzing your issue and will provide the necessary documents."
                        : "Спасибо за ваш вопрос. Я анализирую вашу проблему и помогу вам составить необходимые документы в соответствии с казахстанским законодательством.",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
            setIsLoading(false);
        }, 1000);
    };

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const message = {
                id: Date.now().toString(),
                sender: "user",
                content: `📎 ${file.name}`,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, message]);
        }
    };

    const handleImageInput = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const message = {
                id: Date.now().toString(),
                sender: "user",
                content: `🖼️ ${file.name}`,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, message]);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-white pt-16 sm:pt-20">
            {/* Main Chat Container */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-xl px-6 py-4 rounded-2xl shadow-sm ${message.sender === "user"
                                            ? "bg-primary text-white rounded-br-none"
                                            : "bg-white text-primary border border-gray-200 rounded-bl-none"
                                        }`}
                                >
                                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                                        {message.content}
                                    </p>
                                    <span className={`text-xs mt-2 block ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
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
                                placeholder={language === 'kz' ? "Сұрағыңызды жазыңыз..." : "Опишите вашу проблему..."}
                                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                                rows={1}
                                style={{ minHeight: '50px', maxHeight: '150px' }}
                                disabled={isLoading}
                            />

                            {/* Action Buttons */}
                            <div className="flex gap-2 flex-col sm:flex-row">
                                {/* Image Upload Button */}
                                <button
                                    onClick={() => imageInputRef.current?.click()}
                                    disabled={isLoading}
                                    className="p-3 sm:p-2 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    <ImageIcon className="w-5 h-5" />
                                </button>

                                {/* File Upload Button */}
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={isLoading}
                                    className="p-3 sm:p-2 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                                    <span className="hidden sm:inline">{t('auth.signin').replace('Sign In', 'Send').replace('Войти', 'Отправить').replace('Кіру', 'Жіберу')}</span>
                                    {/* Fallback translation hack or add to dictionary */}
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
                        />
                        <input
                            ref={imageInputRef}
                            type="file"
                            onChange={handleImageInput}
                            className="hidden"
                            accept="image/*"
                        />

                        {/* Helper Text */}
                        <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center sm:text-left">
                            {language === "kz"
                                ? "Enter басып жіберу"
                                : "Нажмите Enter для отправки"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
