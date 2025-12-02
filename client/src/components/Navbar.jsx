import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" style={{ borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>
                    Zan<span style={{ color: 'var(--primary-color)' }}>AI</span>
                </Link>

                <div className="nav-links" style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)' }}>
                    <Link to="#">Capabilities</Link>
                    <Link to="#">Pricing</Link>
                    <Link to="#">Support</Link>
                </div>

                <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="lang-switch" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>KZ</button>
                        <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>RU</button>
                    </div>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
