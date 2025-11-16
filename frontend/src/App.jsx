import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import MainServices from './components/MainServices';
import Gallery from './components/Gallery';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import ShowersPage from './pages/ShowersPage';
import BathtubsPage from './pages/BathtubsPage';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onRequestEstimate={() => setIsModalOpen(true)} />
      <Hero onRequestEstimate={() => setIsModalOpen(true)} />
      <ServicesOverview />
      <MainServices />
      <Gallery />
      <Features />
      <About />
      <Contact />
      <Footer />
      <EstimateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showers" element={<ShowersPage />} />
          <Route path="/bathtubs" element={<BathtubsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

