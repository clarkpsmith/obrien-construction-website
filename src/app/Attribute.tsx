'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Attribute = ({ attribute }: { attribute: string }) => {
  return (
    <div className="p-2">
      <div className="flex text-[14px] sm:w-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0 }}
          className="text-[#D0D0D0] uppercase pb-1"
        >
          {attribute}
        </motion.div>
        <div className="flex-grow"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="text-[#D0D0D0]"
        >
          100%
        </motion.div>
      </div>
      <motion.div className="w-[85vw] sm:w-[400px] overflow-hidden h-[20px] z-[10] relative rounded-2xl">
        <motion.div
          className="w-[200vw] absolute sm:w-[700px] bg-black h-[30px]"
          initial={{ x: '-700px' }}
          animate={{ x: '0px' }}
          transition={{ duration: 4 }}
        ></motion.div>
      </motion.div>
    </div>
  )
  1
}

export default Attribute
