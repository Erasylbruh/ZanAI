import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import './index.css';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
