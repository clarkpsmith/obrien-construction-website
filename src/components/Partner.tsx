'use client'

const Partner = ({ partner }: { partner: any }) => {
  return (
    <div className="w-[90vw] sm:w-[400px] p-2">
      <div className="text-[20px]">{partner.name}</div>
      <div className="text-[#D0D0D0] text-[14px]">{partner.description}</div>
      <a target="_blank" href={partner.url}>
        <div className="text-[#067FD0] text-[14px] mt-1">{partner.url}</div>
      </a>
    </div>
  )
}

export default Partner
