'use client'
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const ProfileInfo = ({data}: {data: any}) => {
    const profile = data.items[0].fields

return (
  <div>
    <div className="flex items-center">
      <motion.div
        initial={{ opacity: 0, x: '-300px' }}
        animate={{ opacity: 1, x: '0px' }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-[100px] rounded-md border border-[#818589] mb-2 overflow-hidden">
          <Image
            src={`https:${profile.imageUrl.fields.file.url}`}
            alt="Profile Photo"
            className="dark:invert"
            width={100}
            height={100}
            priority
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: '300px' }}
        animate={{ opacity: 1, x: '0px' }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="ml-4">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold ">
            {profile.name}
          </h1>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0, y: '-300px' }}
      animate={{ opacity: 1, y: '0px' }}
      transition={{ duration: 1, delay: 0 }}
    >
      <h2 className=" mt-4 text-[24px] md:text-[32px] ">
        {profile.description}
      </h2>
      <div>
        <Image alt="profile photo" width={50} height={50} src="/images/profile-photo.png"/>
        <p className="mt-2 md:text-[20px] max-w-7xl">{profile.bio}</p>
      </div>
    </motion.div>
  </div>
)
}

export default ProfileInfo