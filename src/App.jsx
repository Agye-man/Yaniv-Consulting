import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Approach from './pages/Approach';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Simple SEO Title Sync based on navigated page
  useEffect(() => {
    const titles = {
      home: 'YANIV Consulting Service | Transforming Organizations from Within',
      about: 'About Us | YANIV Consulting Service',
      expertise: 'Core Expertise | YANIV Consulting Service',
      approach: 'Our Approach & Value Prop | YANIV Consulting Service',
      contact: 'Request Consultation | YANIV Consulting Service'
    };
    document.title = titles[activePage] || 'YANIV Consulting Service';
  }, [activePage]);

  // Dynamic Page Renderer
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'expertise':
        return <Expertise setActivePage={setActivePage} />;
      case 'approach':
        return <Approach setActivePage={setActivePage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </>
  );
}

export default App;
