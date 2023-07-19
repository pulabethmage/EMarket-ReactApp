import "./App.css";
import Navbar from "./nav/Navbar";
import HeroSection from "./hero/HeroSection";
import Footer from "./nav/Footer";

function App() {
  return (
    <div className="mb-20">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
