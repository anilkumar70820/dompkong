import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Utilities from './components/Utilities';
import MeetTheTeam from './components/MeetTheTeam';
import Faq from './components/Faq';
import About from './components/About';
import Partners from './components/Partners';
import MintNft from './components/MintNft';
import TheKong from './components/TheKong';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap'
import BackToTop from './components/BackToTop'
function App() {
  const [preloader, setPreloader] = useState(true)
  useEffect(() => {
    Aos.init({ once: true, })
    setTimeout(() => {
      setPreloader(false);
      document.body.classList.remove('overflow-hidden')

    }, 3000);
    document.body.classList.add('overflow-hidden')
  }, [])
  return (
    <div className='overflow-hidden'>
      {preloader && <Preloader />}
      <Hero />
      <About />
      <Utilities />
      <TheKong />
      <MintNft />
      <Roadmap />
      <Partners />
      <MeetTheTeam />
      <Faq />
      <BackToTop />
    </div>
  );
}

export default App;
