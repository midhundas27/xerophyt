import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/home.css';
import Header from '../components/header';
import Main from '../components/main';
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';

function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (ref) => {
    const yOffset = -120; // Adjust the value as needed
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    // Check if the current scroll position is already at the target position
    const currentScrollY = window.pageYOffset;
    const targetScrollY = Math.floor(y); // Use Math.floor to avoid small differences causing unnecessary scrolls

    if (currentScrollY !== targetScrollY) {
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const id = location.hash.substring(1);
      switch (id) {
        case 'about':
          scrollToSection(aboutRef);
          break;
        case 'services':
          scrollToSection(servicesRef);
          break;
        case 'contact':
          scrollToSection(contactRef);
          break;
        default:
          break;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  return (
    <div>
      <Header />
      <div id="main"><Main /></div>
      <div id="about" ref={aboutRef}><About /></div>
      <div id="services" ref={servicesRef}><Services /></div>
      <div id="contact" ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  );
}

export default Home;
