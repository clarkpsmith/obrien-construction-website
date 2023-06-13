'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import Testimonial from './Testimonial'

const Testimonials = ({ testimonials }: { testimonials: any }) => {
  // const testimonials = [
  //   {
  //     testimonial: `O'Brien Construction will get the job done right and on time at a fair
  //   price, Michael is a pleasure to work with, I will definitely use him for
  //   upcoming projects`,
  //     name: `Clark S. Boulder, CO`,
  //   },
  //   {
  //     testimonial: `O'Brien Construction will get the job done right and on time at a fair
  //   price, Michael is a pleasure to work with, I will definitely use him for
  //   upcoming projects`,
  //     name: `Clark S. Boulder, CO`,
  //   },
  // ]
  return (
    <div className="bg-[url('/images/wood-floor.jpeg')] bg-cover  bg-center w-full flex justify-center items-center p-6 py-10">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.items.map((t: any) => (
          <SwiperSlide key={t.sys.id}>
            <Testimonial
              testimonial={t.fields.description}
              name={t.fields.client}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
