import React from 'react';
import Header from './Components/Header';
import 'tailwindcss/tailwind.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import ServicesPage from './Components/Services';
import AboutRegisterKaro from './Components/About';
import WebPage from './Components/Choose';
import BlogSection from './Components/Blogs';
import WebPage2 from './Components/PeopleSay';
import WebPage3 from './Components/End';

function App() {
  return (
    <>
      <div id="home">
        <Header />
        <Hero />
      </div>
       
      <div id="contact">
        <Footer />
      </div>
      <div id="services">
        <ServicesPage />
      </div>

      <div id="about">
        <AboutRegisterKaro />
      </div>

      <div id="blog">
        <BlogSection />
      </div>



      <div id="choose">
        <WebPage />
      </div>

      <div id="reviews">
        <WebPage2 />
      </div>

      <div id="end">
        <WebPage3 />
      </div>
    </>
  );
}

export default App;
