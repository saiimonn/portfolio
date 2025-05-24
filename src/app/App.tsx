import '../styles/index.css'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Tech from '../components/Tech.tsx'
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
              <Hero/>
              <Tech/>
            </div>
          </div>
        </main>
    </>
  )
}

export default App