import React from 'react';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero section" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Your AI Lawyer for <br /> Kazakhstan Law
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Create bilingual contracts (KZ/RU), compliant with Adilet.zan.kz instantly.
                    </p>
                    <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                        Start for free
                    </button>

                    {/* Placeholder for Hero Image/Card */}
                    <div style={{ marginTop: '4rem', padding: '2rem', background: 'white', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', borderRadius: '1rem', display: 'inline-block' }}>
                        <div style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '0.5rem' }}>⚖️</div>
                        <div style={{ fontWeight: 'bold' }}>Adilet.zan.kz</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Compliance guaranteed</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section" style={{ background: 'var(--surface-color)' }}>
                <div className="container">
                    <h2 className="text-center mb-8" style={{ fontSize: '2rem' }}>Why ZanAI?</h2>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Local Expert', desc: 'Trained specifically on RK legislation and court precedents.' },
                            { title: 'Bilingual Engine', desc: 'Automatically creates documents in Kazakh and Russian languages.' },
                            { title: 'SME Solution', desc: 'Affordable legal protection for business.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                                <div style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>⚡</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing section">
                <div className="container">
                    <h2 className="text-center mb-8" style={{ fontSize: '2rem' }}>Pricing</h2>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Free Plan */}
                        <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>Start</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>Free</div>
                            <button className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem' }}>Select Plan</button>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                                <li>✓ Template Library</li>
                                <li>✓ Basic Support</li>
                            </ul>
                        </div>

                        {/* Pro Plan */}
                        <div style={{ padding: '2rem', borderRadius: '1rem', border: '2px solid var(--primary-color)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-color)', color: 'white', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.75rem' }}>Popular Choice</div>
                            <h3 style={{ fontSize: '1.25rem' }}>Pro</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>20,000 ₸ <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
                            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Select Plan</button>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                                <li>✓ Template Library</li>
                                <li>✓ Automatic Creation</li>
                                <li>✓ Bilingual Translation</li>
                            </ul>
                        </div>

                        {/* Enterprise Plan */}
                        <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>Enterprise</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>On Request</div>
                            <button className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem' }}>Select Plan</button>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                                <li>✓ API Integration</li>
                                <li>✓ Customization</li>
                                <li>✓ Dedicated Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ background: 'var(--secondary-color)', color: 'white', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                                Zan<span style={{ color: 'var(--primary-color)' }}>AI</span>
                            </div>
                            <p style={{ color: '#94A3B8', maxWidth: '300px' }}>AI Lawyer for Kazakhstan Law</p>
                        </div>
                        <div style={{ display: 'flex', gap: '4rem' }}>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Product</h4>
                                <ul style={{ listStyle: 'none', color: '#94A3B8' }}>
                                    <li>Capabilities</li>
                                    <li>Pricing</li>
                                    <li>Reviews</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                                <ul style={{ listStyle: 'none', color: '#94A3B8' }}>
                                    <li>About Us</li>
                                    <li>Blog</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #334155', marginTop: '4rem', paddingTop: '2rem', color: '#94A3B8', fontSize: '0.875rem' }}>
                        © 2025 ZanAI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
