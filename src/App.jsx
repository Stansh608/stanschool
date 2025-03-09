import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import EnrollmentStats from './components/EnrollmentStats';
import BellSchedule from './components/BellSchedule';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './App.css';

function App() {
  useIntersectionObserver();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal">
          <MissionVision />
        </div>
        <div className="reveal">
          <EnrollmentStats />
        </div>
        <div className="reveal">
          <BellSchedule />
        </div>
        <div className="reveal">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
