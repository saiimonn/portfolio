import me from '../assets/me-2.jpg'
import { Github, Instagram, Linkedin, Facebook, Contact } from "lucide-react"
import { useDarkMode } from '../contexts/DarkModeContext'
import { motion } from "framer-motion"

const socials = [
    { icon: Github, href: "https://github.com/saiimonn" },
    { icon: Instagram, href: "https://www.instagram.com/_saiimonn/" },
    { icon: Linkedin, href: "" },
    { icon: Facebook, href: "https://www.facebook.com/simongabriel.gementiza" },
    { icon: Contact, href: "mailto:gementizasgg08@gmail.com"},
]

export default function Hero() {
    const { isDark } = useDarkMode()

    const containerVars = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const socialVars = {
        hidden: { opacity: 0, scale: 0.8},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    const imgVar = {
        hidden: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 }
    }

    return (
        <motion.div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-36 pb-20 text-center" variants = {containerVars} initial = "hidden" whileInView = "visible" >
            <motion.p className="uppercase font-bold lg:text-lg md:text-md sm:text-md text-sm" variants = {itemVars}>Based in the Philippines</motion.p>
            <motion.h1 className="text-4xl md:text-6xl font-bold mt-2" variants = {itemVars}>Full-Stack Web Developer</motion.h1>
            <motion.h2 className="mt-2 text-xl md:text-2xl font-medium" variants = {itemVars}>Sai Gementiza</motion.h2>
            <motion.p className="mt-4 text-md" variants = {itemVars}>Second Year Computer Science Student <br /> with a focus in web development</motion.p>

            <motion.div className="relative mt-6 w-44 h-44 flex items-center justify-center" initial = {{opacity: 0, scale: 0.8}} whileInView = {{opacity: 1, scale: 1}} transition = {{duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4}}>
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
                variants = {imgVar}
                initial = "hidden"
                whileInView = "animate"
                />
            </motion.div>


            <motion.div className="mt-6 flex gap-4" initial = {{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition = {{duration: 0.6, delay: 0.8}}>
                {socials.map(({ icon: Icon, href }, idx) => (
                    <motion.a
                    key={idx}
                    href={href}
                    className={`p-2 border border-[#2d2d2d] rounded-lg transition-colors ${
                        isDark ? 'hover:bg-white/80 hover:text-black' : 'hover:bg-black hover:text-white/80'
                    }`}
                    variants = {socialVars}
                    initial = "hidden"
                    whileInView = "visible"
                    transition = {{delay: 1 + idx * 0.1}}
                    whileHover = {{scale: 1.1, transition: {duration: 0.2}}}
                    whileTap = {{scale: 0.5}}
                    >
                        <Icon />
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    )
}