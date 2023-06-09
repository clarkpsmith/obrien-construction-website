"use client"
import { motion } from "framer-motion"
import ProjectComponent from "./ProjectComponent"

const ProjectsComponent = ({ data }: { data: any }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: '-300px' }}
        animate={{ opacity: 1, x: '0px' }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h1 className="text-[32px] md:text-[48px] mt-3 font-bold">Projects</h1>
      </motion.div>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, y: '300px' }}
        animate={{ opacity: 1, y: '0px' }}
        transition={{ duration: 1, delay: 2 }}
      >
        {data.items.map((d: any) => (
          <ProjectComponent key={d.sys.id} data={d.fields} />
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectsComponent