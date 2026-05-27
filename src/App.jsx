import { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './sections/HeroSection';
import { ConceptsSection } from './sections/ConceptsSection';
import { DialecticalSection } from './sections/DialecticalSection';
import { TimelineSection } from './sections/TimelineSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { CaseStudyVideoSection } from './sections/CaseStudyVideoSection';
import { ConclusionSection } from './sections/ConclusionSection';
import { QuizSection } from './sections/QuizSection';
import { MindmapSection } from './components/index';
import { Chatbot } from './components/Chatbot';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Navigation bar */}
      <nav className='fixed top-0 left-0 right-0 z-50 glass border-b border-gray-700/30'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <h1 className='font-bold text-lg text-white'>Triết Học Mác - Lênin</h1>
          </div>
          
          <div className='hidden md:flex items-center gap-6 text-sm'>
            <a href='#concepts' className='text-gray-400 hover:text-marx-red-400 transition-colors'>
              Khái Niệm
            </a>
            <a href='#dialectical' className='text-gray-400 hover:text-marx-red-400 transition-colors'>
              Biện Chứng
            </a>
            <a href='#timeline' className='text-gray-400 hover:text-marx-red-400 transition-colors'>
              Timeline
            </a>
            <a href='#mindmap' className='text-gray-400 hover:text-marx-red-400 transition-colors'>
              Sơ Đồ Tư Duy
            </a>
            <a href='#quiz' className='text-gray-400 hover:text-marx-red-400 transition-colors'>
              Ôn Tập
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <HeroSection />
        <ConceptsSection />
        <DialecticalSection />
        <TimelineSection />
        <MindmapSection />
        <CaseStudiesSection />
        { <CaseStudyVideoSection videoUrl='https://www.youtube.com/watch?v=5wPtaLLdQKk' /> }
        <ConclusionSection />
        <QuizSection />
      </main>

      {/* Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className='w-full bg-dark-950 border-t border-gray-700/30 py-8 px-4'>
        <div className='max-w-7xl mx-auto text-center text-gray-500 text-sm'>
          <p>
            © 2024 Bài Giảng Triết Học Interaktif | Powered by React + Vite + TailwindCSS
          </p>
          <p className='mt-2 text-xs'>
            "Không phải ý thức của con người quyết định con đường của nó, mà ngược lại, đó là con đường xã hội của con người quyết định ý thức của nó." - Karl Marx
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
