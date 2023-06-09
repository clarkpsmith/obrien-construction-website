'use client'
import Link from "next/link"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const ProjectComponent = ({ data }: { data: any }) => {
  const [showVisitSite, setShowVisitSite] = useState<boolean>(false)
  const [isMedium, setIsMedium] = useState(true)

  const isMediumSize = useMediaQuery({
    query: '(min-width: 768px)',
  })

  useEffect(() => {
    setIsMedium(isMediumSize)
  }, [isMediumSize])

  console.log({ isMedium })

  return (
    <motion.div className="flex flex-col max-w-6xl  justify-center items-center">
      <div className="flex w-full justify-center ml:justify-start">
        <Link href={data.projectUrl} target="_blank">
          <h3 className="text-[28px] text-center md:text-[34px] my-2 mb-4 w-[100%] font-bold transition duration-500 ease-in-out ease-in-out hover:text-[#6082B6]">
            {data.title}
          </h3>
        </Link>
      </div>
      <div className="flex flex-col ml:flex-row">
        <div className="flex justify-center mb-4">
          <Link href={data.projectUrl} target="_blank">
            <div
              onMouseOver={() => setShowVisitSite(true)}
              onMouseLeave={() => setShowVisitSite(false)}
              className="border border-[#818589] rounded-md overflow-hidden w-[325px] md:w-[400px] cursor-pointer  transition duration-200 ease-in-out ease-in-out hover:opacity-[.7] "
            >
              {isMedium ? (
                <Image
                  src={`https:${data.imageUrl.fields.file.url}`}
                  width={400}
                  height={250}
                  alt="pog digital image"
                />
              ) : (
                <Image
                  src={`https:${data.imageUrl.fields.file.url}`}
                  width={325}
                  height={125}
                  alt="pog digital image"
                />
              )}

              <AnimatePresence>
                {showVisitSite && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: '0px' }}
                    animate={{ opacity: 1, y: '-50px' }}
                    transition={{ type: 'spring', duration: 1.25 }}
                    exit={{ y: '0px', opacity: 0 }}
                  >
                    <div className="absolute text-[#6082B6] bg-white  box-shadow opacity-[.2] h-[70px] font-[600] w-[100%]"></div>
                    <div className="absolute text-[19px] text-[#6082B6] mt-3 font-[600] w-[100%] transition duration-200 ease-in-out ease-in-out hover:text-[#03a9f4]">
                      Visit Website
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-[14px] lg:text-[16px] sm:pl-4 xl:pl-6">
          <div>
            {data.summaryDescription && (
              <div className="mb-2">{data.summaryDescription}</div>
            )}
          </div>
          <div className="">
            {data.description.map((d: any) => (
              <p className="pt-1" key={d}>{`• ${d}`}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectComponent