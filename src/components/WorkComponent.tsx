const WorkComponent = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="w-full overflow-hidden md:w-[50%]">
      <img alt="image" src={`https:${imageUrl}`} />
    </div>
  )
}

export default WorkComponent
