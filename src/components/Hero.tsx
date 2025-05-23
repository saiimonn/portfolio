import me from '../assets/me-2.jpg'
import { Github, Instagram, Linkedin, Facebook } from "lucide-react"
import { useDarkMode } from '../contexts/DarkModeContext'
import { motion } from "framer-motion"

const socials = [
    { icon: Github, href: "https://github.com/saiimonn" },
    { icon: Instagram, href: "https://www.instagram.com/_saiimonn/" },
    { icon: Linkedin, href: "" },
    { icon: Facebook, href: "https://www.facebook.com/simongabriel.gementiza" },
]

export default function Hero() {
    const { isDark } = useDarkMode()

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-36 pb-20 text-center">
            <p className="uppercase font-bold text-sm">Based in the Philippines</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Professional Vibe Coder</h1>
            <h2 className="mt-2 text-xl md:text-2xl font-medium">Sai Gementiza</h2>

            <p className="mt-4 text-md">
                Crafting clean, modern web experiences with a creative touch
            </p>

            <div className="relative mt-6 w-44 h-44 flex items-center justify-center">
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    style={{
                        background: "conic-gradient(#06b6d4, #8b5cf6, #ec4899, #06b6d4)",
                        padding: "4px"
                    }}
                />
                
                <motion.img
                    src={me}
                    alt="Simon Gementiza"
                    className={`w-40 h-40 object-cover rounded-full relative z-10 border-4 ${
                        isDark ? 'border-black' : 'border-white'
                    }`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                />
            </div>


            <div className="mt-6 flex gap-4">
                {socials.map(({ icon: Icon, href }, idx) => (
                    <a
                        key={idx}
                        href={href}
                        className={`p-2 border rounded-lg transition-colors ${
                            isDark
                                ? 'hover:bg-white/80 hover:text-black'
                                : 'hover:bg-black hover:text-white/80'
                        }`}
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </div>
    )
}