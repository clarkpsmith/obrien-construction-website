"use client"
import { motion } from "framer-motion";

const Name = ({data }: {data: any}) => {
    const profile = data.items[0].fields
return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{ delay: 1, duration: 2}}
    className="text-[#f5f5f5] text-center mb-4">{profile.name} <span className="text-[10px] font-bold" >{profile.description}</span></motion.div>
)
}

export default Name;