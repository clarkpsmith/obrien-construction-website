'use client'
import Social from './Social'
import { motion } from 'framer-motion'

const Socials = () => {
  return (
    <motion.div
      className="flex justify-center w-[100vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <Social
        url="https://www.linkedin.com/in/clarkpsmith/"
        imageName="linkedin-icon-white.svg"
        name="LinkedIn"
      />
      <Social
        url="https://github.com/clarkpsmith"
        imageName="github-mark-white.svg"
        name="GitHub"
      />
      <Social
        url="https://resume.creddle.io/resume/g2iz5ls395i"
        imageName="resume-96.png"
        name="Resume"
      />
      <Social
        url="mailto:clark.smith79@gmail.com"
        imageName="email-icon-128.png"
        name="Email"
      />
    </motion.div>
  )
}

export default Socials
