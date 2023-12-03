
import './App.css';
import Faq from './components/Faq';
import Feature from './components/Feature';
import Header from './components/Header';
import Integrations from './components/Integrations';
import MoreFeatures from './components/MoreFeatures';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Feature />
     <MoreFeatures />
     <Integrations />
     <Faq /> 
     <Pricing />
     <Testimonials />
     <Footer />
    </div>
  );
}

export default App;
