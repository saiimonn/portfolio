import '../styles/index.css'
import { motion } from "framer-motion"
import Navbar from '../components/Navbar.tsx'
import { useDarkMode } from '../contexts/DarkModeContext.tsx'

function App() {
  const { isDark } = useDarkMode();

  return (
    <>
      <div className={`w-full h-screen transition-colors duration-300 ${
            isDark 
              ? 'bg-[#0a0a0a] text-white' 
              : 'bg-white text-black'
          }`}>
        <main className="flex flex-col px-5 sm:px-10 relative">
          <div className="max-w-7xl mx-auto w-full">
            <Navbar/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App