import { useState } from "react"
import { items } from "../data/projects"
import { motion, AnimatePresence } from "framer-motion"
import { useDarkMode } from "../contexts/DarkModeContext"
import { ArrowLeft } from "lucide-react"

interface CardProps {
    id?: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github?: string;
    site?: string;
}

function Card({ id, title, description, image, tech, github, site }: CardProps) {
    const { isDark } = useDarkMode();
    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <>
            <motion.div className = {`relative overflow-hidden rounded-3xl cursor-pointer shadow-lg ${
                isDark ? 'bg-neutral-900 shadow-black/20' : 'bg-white shadow-black/10'
            }`}
            whileHover = {{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap = {{
                scale: 0.98,
                transition: { duration: 0.1 }
            }}
            onClick = {() => setIsExpanded(true)}
            layoutId = {`card-${id || title}`}
            style = {{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
            }}>
                {/* image part */}
                <motion.div className = "aspect-video overflow-hidden" layoutId = {`image-${id || title}`}>
                    <img src = {image} alt = {title} className = "w-full h-full object-cover" />
                </motion.div>

                {/* title part */}
                <motion.div className = "p-6" layoutId = {`content-${id || title}`}>
                    <motion.h3 className = "text-xl font-semibold mb-2" layoutId = {`title-${id || title}`}>
                        {title}
                    </motion.h3>

                {/* description part */}
                    <motion.p className = {`text-sm mb-4 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`} layoutId = {`description-${id || title}`}>
                        {description}
                    </motion.p>

                {/* tech stack part */}
                    <motion.div className = "flex flex-wrap gap-2" layoutId = {`tech-${id || title}`}>
                        {tech.slice(0, 3).map((techItem, idx) => (
                            <span key = {idx} className = {`px-3 py-1 text-xs rounded-full ${
                            isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                            }`}>    
                                {techItem}
                            </span>
                        ))}
                        {tech.length > 3 && (
                            <span className = {`px-3 py-1 text-xs rounded-full ${
                            isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                            }`}>
                                +{tech.length - 3}
                            </span>
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div className = "fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 pt-24 pb-8 px-4"
                    initial = {{ opacity: 0 }} animate = {{ opacity: 1 }} exit = {{ opacity: 0 }} onClick = {() => setIsExpanded(false)}
                    style = {{
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                    }}
                    >
                        <motion.div className = {`max-w-2xl w-full h-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col ${
                        isDark ? 'bg-neutral-900 shadow-black/50' : 'bg-white shadow-black/20'
                        }`}
                        layoutId = {`card-${id || title}`}
                        onClick = {(e) => e.stopPropagation()}
                        style = {{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                        }}
                        >
                            {/* Back Button */}
                            <motion.div 
                                className="absolute top-4 left-4 z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className={`p-3 rounded-full backdrop-blur-md transition-colors ${
                                        isDark 
                                            ? 'bg-black/40 hover:bg-black/60 text-white' 
                                            : 'bg-white/40 hover:bg-white/60 text-black'
                                    }`}
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                            </motion.div>

                            {/* Fixed Image Section */}
                            <motion.div className = "aspect-video overflow-hidden flex-shrink-0" layoutId = {`image-${id || title}`}>
                                <img src={image} alt={title} className = "w-full h-full object-cover"/>
                            </motion.div>

                            {/* Scrollable Content Section */}
                            <motion.div className = "flex-1 overflow-y-auto p-8" layoutId = {`content-${id || title}`}>
                                <motion.h3 className = "text-3xl font-bold mb-4" layoutId = {`title-${id || title}`}>{title}</motion.h3>
                                <motion.p className = {`text-lg mb-6 leading-relaxed ${
                                isDark ? 'text-neutral-300' : 'text-neutral-700'
                                }`}
                                layoutId = {`description-${id || title}`}
                                >
                                    {description}
                                </motion.p>

                                <motion.div className = "mb-8" layoutId = {`tech-${id || title}`}>
                                    <h4 className = "text-sm font-semibold mb-3 uppercase tracking-wide opacity-70">
                                        Technologies Used
                                    </h4>

                                    <div className = "flex flex-wrap gap-3">
                                        {tech.map((techItem, idx) => (
                                            <motion.span key = {idx} className ={`px-4 py-2 text-sm rounded-full ${
                                            isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                                            }`}
                                            initial = {{ opacity: 0, scale: 0.8 }}
                                            animate = {{ opacity: 1, scale: 1 }}
                                            transition = {{ delay: 0.1 + idx * 0.05 }}
                                            >
                                                {techItem}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div className = "flex gap-4 bottom-0 bg-inherit pt-4"
                                initial = {{ opacity: 0, y: 20 }}
                                animate = {{ opacity: 1, y: 0 }}
                                transition = {{ delay: 0.3 }}
                                >
                                    {/* View Live Button */}
                                    {site && (
                                        <a 
                                            href={site} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <button className = "w-full px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors">
                                                View Live
                                            </button>
                                        </a>
                                    )}

                                    {/* View Code Button */}
                                    {github && (
                                        <a 
                                            href={github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <button className = {`w-full px-6 py-3 rounded-2xl font-semibold border-2 transition-colors ${
                                            isDark ? 'border-neutral-700 hover:bg-neutral-800 text-white' : 'border-neutral-200 hover:bg-neutral-50 text-neutral-900'
                                            }`}>
                                                View Code
                                            </button>
                                        </a>
                                    )}

                                    {/* incase i didnt add links hehe */}
                                    {!site && !github && (
                                        <div className="flex-1 text-center py-3 text-neutral-500">
                                            Links coming soon...
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default function Projects() {
    const itemVars = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    return(
        <>
            <div className = "py-16 sm:py-24">
                <div className = "space-y-4 mb-12">
                    <motion.h1 className = "font-bold text-4xl md:text-6xl"
                    variants = {itemVars} initial = "hidden" whileInView = "visible">
                        Projects
                    </motion.h1>

                    <motion.p className = "font-light text-lg md:text-xl opacity-70"
                    variants = {itemVars} initial = "hidden" whileInView = "visible">
                        Some of my recent work
                    </motion.p>
                </div>

                <motion.div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                variants = {containerVars} initial = "hidden" whileInView = "visible">
                    {items.map((project, idx) => (
                        <motion.div key = {project.id || project.title} variants = {itemVars}>
                            <Card {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}