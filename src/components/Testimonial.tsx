const Testimonial = ({
  testimonial,
  name,
}: {
  testimonial: string
  name: string
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-white p-4">
      <div className="text-[16px] sm:text-[20px] text-center mb-2">
        {testimonial}
      </div>
      <div>{`- ${name}`}</div>
    </div>
  )
}

export default Testimonial
