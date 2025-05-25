import {useState, useEffect} from "react"
import {House, Hammer, User, Binary, Moon, Sun} from "lucide-react"
import { useDarkMode } from "../contexts/DarkModeContext"
import { motion } from "framer-motion"

const navItems = [
    {label: "Home", href: "", icon: House},
    {label: "Tech", href: "", icon: Binary},
    {label: "Projects", href: "", icon: Hammer},
    {label: "About", href: "", icon: User},
]

export default function Navbar() {
    const[isMobile, setIsMobile] = useState(true);
    const { isDark, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return() => window.removeEventListener("resize", handleResize);
    }, []);

    const containerVar = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeIn"
            }
        }
    }

    const underlineVariants = {
        initial: { scaleX: 0 },
        hover: { scaleX: 1 }
    }

    return(
        <>
            <div className="fixed top-0 left-0 w-full z-[5000]">
                <motion.div className="flex md:flex-row justify-between items-center px-4 md:px-8 py-4 md:space-y-0" variants = {containerVar} initial = "hidden" whileInView = "visible">         
                    <div className={`flex justify-center border border-[#8a8a8a] transition-colors backdrop-blur-sm rounded-lg px-6 py-3 space-x-4 font-light bg-transparent ${
                    isDark ? 'bg-[#2a2a2a] text-white' : 'bg-[#eeeeee] text-black'
                    }`}>
                        {isMobile ? (
                            <>
                                {navItems.map(({icon: Icon, href}, idx) => (
                                    <motion.a 
                                    key={idx} 
                                    href={href} 
                                    className={`relative hover:text-neutral-400 transition-colors ${
                                        isDark ? 'text-white' : 'text-black'
                                    }`}
                                    initial="initial"
                                    whileHover="hover"
                                    >
                                        <Icon/>
                                    </motion.a>
                                ))}
                            </>
                        ) : (
                            <>
                                {navItems.map(({label, href}, index) => (
                                    <motion.a 
                                    key={index} 
                                    href={href} 
                                    className={`relative hover:text-neutral-400 transition-colors ${
                                        isDark ? 'text-white' : 'text-black'
                                    }`}
                                    initial="initial"
                                    whileHover="hover"
                                    >
                                        <span>{label}</span>
                                        <motion.div
                                        className={`absolute bottom-0 left-0 h-0.5 w-full ${
                                            isDark ? 'bg-white' : 'bg-black'
                                        }`}
                                        variants={underlineVariants}
                                        transition={{ 
                                            duration: 0.3, 
                                            ease: "easeOut",
                                            originX: 0 
                                        }}
                                        />
                                    </motion.a>
                                ))}
                            </>
                        )}
                    </div>

                    <motion.button 
                    onClick={toggleDarkMode} 
                    className={`flex justify-center border border-[#8a8a8a] cursor-pointer backdrop-blur-sm px-4 py-3 rounded-lg transition-colors bg-transparent ${
                    isDark ? 'bg-[#1f1f1f] text-white hover:text-black hover:bg-gray-100' : 'bg-white/80 text-black hover:text-white hover:bg-black'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
} 