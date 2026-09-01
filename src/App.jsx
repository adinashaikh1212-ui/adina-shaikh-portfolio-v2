import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Recognition from './components/sections/Recognition';
import FeaturedProjects from './components/sections/FeaturedProjects';
import OtherProjects from './components/sections/OtherProjects';
import Software from './components/sections/Software';
import Contact from './components/sections/Contact';

function PortfolioPage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Software />
      <Recognition />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;