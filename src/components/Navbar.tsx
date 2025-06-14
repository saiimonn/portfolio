import {useState, useEffect} from "react"
import {House, Hammer, User, Binary, Moon, Sun} from "lucide-react"
import { useDarkMode } from "../contexts/DarkModeContext"
import { motion } from "framer-motion"

const navItems = [
    {label: "Home", href: "#home", icon: House},
    {label: "Tech", href: "#tech", icon: Binary},
    {label: "Projects", href: "#projects", icon: Hammer},
    {label: "About", href: "#about", icon: User},
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

    // Smooth scroll function
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navbarHeight = 100; // Account for fixed navbar height
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

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
                    <div className={`flex justify-center border transition-colors backdrop-blur-sm rounded-lg px-6 py-3 space-x-4 font-light opacity-90 ${
                    isDark ? 'bg-neutral-900 text-white border-[#2d2d2d]' : 'bg-[#f3f3f3] text-black border-[#e8e8e8]'
                    }`}>
                        {isMobile ? (
                            <>
                                {navItems.map(({icon: Icon, href}, idx) => (
                                    <motion.a 
                                        key={idx} 
                                        href={href} 
                                        onClick = {(e) => scrollToSection(e, href)}
                                        className={`relative hover:text-neutral-400 transition-colors cursor-pointer ${
                                            isDark ? 'text-white' : 'text-black'
                                        }`}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <Icon/>
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
                        ) : (
                            <>
                                {navItems.map(({label, href}, index) => (
                                    <motion.a 
                                        key={index} 
                                        href={href} 
                                        onClick={(e) => scrollToSection(e, href)}
                                        className={`relative hover:text-neutral-400 transition-colors cursor-pointer ${
                                            isDark ? 'text-white' : 'text-black'
                                        }`}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <span>{label}</span>
                                        <motion.div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full ${
                                            isDark ? 'bg-[#f3f3f3]' : 'bg-neutral-900'
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
                        className={`flex justify-center border border-[#2d2d2d] cursor-pointer backdrop-blur-sm px-4 py-3 rounded-lg transition-colors opacity-90 ${
                        isDark ? 'bg-neutral-900 text-white hover:text-black hover:bg-gray-100 border-[#2d2d2d]' : 'bg-[#f3f3f3] text-black hover:text-white hover:bg-black border-[#e8e8e8]'
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