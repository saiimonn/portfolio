import {useState, useEffect} from "react"
import {House, Hammer, User, Binary, Moon, Sun} from "lucide-react"
import { useDarkMode } from "../contexts/DarkModeContext"

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

    return(
        <>
            <div className="fixed top-0 left-0 w-full z-[5000]">
                <div className="flex md:flex-row justify-between items-center px-4 md:px-8 py-4 md:space-y-0">         
                    <div className={`flex justify-center border border-[#8a8a8a] backdrop-blur-sm rounded-lg px-6 py-3 space-x-4 font-light ${
                        isDark 
                            ? 'bg-[#2a2a2a] text-white'
                            : 'bg-white text-black'
                        }`}>
                        {isMobile ? (
                            <>
                                {navItems.map(({icon: Icon, href}, idx) => (
                                    <a key = {idx} href = {href} className = {`hover:text-neutral-400 ${
                                        isDark
                                        ? 'text-white'
                                        : 'text-black'
                                    }`}>
                                        <Icon/>
                                    </a>
                                ))}
                            </>
                        ) : (
                            <>
                                {navItems.map(({label, href}, index) => (
                                    <a key = {index} href = {href} className = {`hover:text-neutral-400 ${
                                        isDark
                                        ? 'text-white'
                                        : 'text-black'
                                    }`}>
                                        <span>{label}</span>
                                    </a>
                                ))}
                            </>
                        )}
                    </div>

                    <button onClick={toggleDarkMode} className={`flex justify-center border border-[#8a8a8a]  backdrop-blur-sm px-4 py-3 rounded-lg  transition-colors ${
                        isDark
                        ? 'bg-[#1f1f1f] text-white hover:text-black hover:bg-gray-100'
                        : 'bg-white/80 text-black hover:text-white hover:bg-black'
                    }`}>
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </>
    );
} 