import React from 'react'
import '../styles/home.css';
import Header from '../components/header';
import Main from '../components/main';
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';

function Home () {

  return (
    <div>
    <Header />
    <Main />
    <About />
    <Services />
    <Contact />
    <Footer />
    </div>
  
);
}

export default Home;
