import '../styles/index.css'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Tech from '../components/Tech.tsx'
import Projects from '../components/Projects.tsx'
import { useDarkMode } from '../contexts/DarkModeContext.tsx'

function App() {
  const { isDark } = useDarkMode();

  return (
    <>
        <main className={`w-full min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'
        }`}>
          <div className="flex flex-col px-5 sm:px-10 relative">
            <div className="max-w-7xl mx-auto w-full">
              <Navbar/>
              <section id="home">
                <Hero/>
              </section>
              <section id="tech">
                <Tech/>
              </section>
              <section id="projects">
                <Projects/>
              </section>
              <section id="about">
                <div className="py-16 sm:py-24">
                  <h1 className="font-bold text-4xl md:text-6xl">About</h1>
                  <p className="font-light text-lg md:text-xl mt-4">Coming soon...</p>
                </div>
              </section>
            </div>
          </div>
        </main>
    </>
  )
}

export default App