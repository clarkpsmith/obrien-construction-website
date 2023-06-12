'use client'
import Image from 'next/image'
import WorkComponent from './WorkComponent'

const Gallery = ({ projects }: { projects: any }) => {
  // bg-[url('/images/wood-floor.jpeg')]
  return (
    <div className="">
      <div className="w-full h-[100px] flex justify-center items-center">
        <div className="text-[30px] sm:text-[40px] font-bold">Jobs</div>
      </div>
      <div className="flex flex-wrap justify-center  bg-black items-center">
        {projects.items.map((p: any) => (
          <WorkComponent imageUrl={p.fields.image.fields.file.url} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
