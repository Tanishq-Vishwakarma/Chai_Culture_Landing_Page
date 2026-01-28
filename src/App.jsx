import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import EmailSignup from './components/EmailSignup';
import LaunchCounter from './components/LaunchCounter';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="relative bg-[#1a0f0a] overflow-x-hidden text-cream">
      {/* Global Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Completely Hide Scrollbar but allow scrolling */
        ::-webkit-scrollbar {
          display: none;
        }
        
        * {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        ::selection {
          background: #D4AF37;
          color: #1a0f0a;
        }
      `}</style>

      {/* Main Content */}
      <main className="w-full">
        <Header />
        <Hero />
        <BrandStory />
        <EmailSignup />
        <LaunchCounter />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;