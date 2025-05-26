import { motion } from "framer-motion"
import { useDarkMode } from "../contexts/DarkModeContext"

export default function About() {
    const { isDark } = useDarkMode();

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeIn",
            }
        }
    }

    const cardVars = {
        hidden: { opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.25, 0.46, 0.45, 0.94],
                duration: 0.6
            }
        }
    }

    const textVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                ease: "easeIn"
            }
        }
    }

    const inputVars = {
        hidden: {  }
    }

    return(
        <>
            <div className = "mb-8">
                <motion.h1 className = "font-bold text-4xl" variants = {itemVars} initial = "hidden" whileInView = "visible">About Me</motion.h1>

                <div className = "w-full mt-8 text-justify">
                    <motion.div className = {`w-full p-4 md:p-6 border rounded-lg space-y-4 ${
                    isDark ? 'border-[#2d2d2d]' : 'border-[#e8e8e8]'
                    }`}
                    variants = {cardVars}
                    initial = "hidden"
                    whileInView = "visible"
                    >
                        <motion.p variants = {textVars} initial = "hidden" whileInView = "visible" className = "text-sm md:text-base lg:text-lg">
                            I am a 19-year-old college student at the University of San Carlos, currently pursuing a Bachelor's degree in Computer Science.
                            <br /> <br />
                            I'm passionate about web development, with a strong inclination towards front-end technologies. I love crafting smooth user interfaces and bringing ideas to life through interactive, accessible, and modern designs.
                        </motion.p>

                        <motion.h4 className = "lg:text-2xl md:text-xl sm:text-lg font-medium" variants = {textVars} initial = "hidden" whileInView = "visible">
                            Skills
                        </motion.h4>

                        <motion.p variants = {textVars} initial = "hidden" whileInView = "visible" className = "text-sm md:text-base lg:text-lg">
                            I have experience working with a range of modern technologies that support both front-end and full-stack development. I also have experience in C, which acts as the foundation to my roadmap as a programmer.
                            <br /> <br />
                            Beyond technical skills, I value good design and user experience, which guides my attention to detail. I’m a fast learner, a strong communicator, and enjoy working both independently and in team settings.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}