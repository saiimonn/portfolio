import { motion } from "framer-motion"
import stack from '../data/techstack'
import { useDarkMode } from "../contexts/DarkModeContext"

const techStack = [...stack];

export default function tech() {   
    const { isDark } = useDarkMode();
    
    const itemVars = {
        hidden: { opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const cardVars = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const card = {
        initial: { y: 0 },
        hover: { y: -10 }
    }
    
    return(
        <>
            <div className = "relative z-10 py-16 sm:py-24">
                <div className = "space-y-4 mb-10">
                    <motion.h1 variants = {itemVars} initial = "hidden" whileInView = "visible" className = "font-bold text-4xl md:text-5xl">Current Tech Stack</motion.h1>
                    <motion.p variants = {itemVars} initial = "hidden" whileInView = "visible" className = "font-light text-lg md:text-xl">I'm fluent in a variety of programming languages and frameworks, and I am still learning more as of now.</motion.p>
                </div>

                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 opacity-[1] transform-none will-change-auto">
                    {techStack.map((stackItem, idx) => (
                        <motion.div key = {idx} variants = {card} whileHover = "hover" className = {`flex flex-1 gap-5 p-2.5 rounded-xl
                        ${isDark ? ' bg-neutral-900' : ' bg-[#f3f3f3]'
                        }`}>
                            <motion.div variants = {cardVars} initial = "hidden" whileInView = "visible" className = "p-3 rounded-lg w-fit">
                                <div className = "size-12">{stackItem.icon}</div>
                            </motion.div>

                            <div className = "flex flex-col justify-center">
                                <motion.h3 variants = {cardVars} initial = "hidden" whileInView = "visible" className = "font-md">{stackItem.title}</motion.h3>
                                <motion.p variants = {cardVars} initial = "hidden" whileInView = "visible" className = {`font-light text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-800'}`}>{stackItem.desc}</motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}