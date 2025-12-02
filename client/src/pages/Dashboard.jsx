import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Plus, MessageSquare, FileText, Trash2, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Dashboard = () => {
    const { t } = useLanguage();

    // Mock data for recent chats
    const recentChats = [
        {
            id: 1,
            title: 'Вопрос о трудовом договоре',
            preview: 'У меня есть вопрос о моем трудовом...',
            date: '30 нояб. 2025 г.',
            messages: 12,
            status: 'Загружено'
        },
        {
            id: 2,
            title: 'Договор аренды жилья',
            preview: 'Мне нужно создать договор...',
            date: '27 нояб. 2025 г.',
            messages: 8,
            status: null
        },
        {
            id: 3,
            title: 'Регистрация ООО',
            preview: 'Какие документы нужны для...',
            date: '22 нояб. 2025 г.',
            messages: 15,
            status: 'Загружено'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Ваша Панель
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Управляйте всеми вашими чатами и документами с ZanAI
                    </p>
                </div>

                {/* Action Button */}
                <div className="mb-8">
                    <Link to="/chat">
                        <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                            <Plus size={18} />
                            Начать новый чат
                        </Button>
                    </Link>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <div className="flex gap-8">
                        <button className="pb-4 border-b-2 border-primary text-primary font-medium flex items-center gap-2">
                            <MessageSquare size={18} />
                            Недавние чаты
                        </button>
                        <button className="pb-4 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium flex items-center gap-2 transition-colors">
                            <FileText size={18} />
                            Все файлы и изображения
                        </button>
                    </div>
                </div>

                {/* Chats List */}
                <div className="space-y-4">
                    {recentChats.map((chat) => (
                        <div
                            key={chat.id}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {chat.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                    {chat.preview}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {chat.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageSquare size={14} />
                                        {chat.messages} Сообщений
                                    </span>
                                    {chat.status && (
                                        <span className="flex items-center gap-1 text-primary">
                                            <FileText size={14} />
                                            {chat.status}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <Link to="/chat" className="w-full sm:w-auto">
                                    <Button variant="default" className="w-full sm:w-auto bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white">
                                        Просмотреть чат
                                    </Button>
                                </Link>
                                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
