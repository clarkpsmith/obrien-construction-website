'use client'
import Partner from './Partner'

const PreferredPartners = ({ preferredBrands }: { preferredBrands: any }) => {
  return (
    <div className="bg-black text-white px-4">
      <div className="text-center text-[28px] sm:text-[36px] pt-4 pb-2">
        Brand Partners
      </div>
      <div className="flex justify-center md:justify-start flex-wrap">
        {preferredBrands.items.map((partner: any) => (
          <Partner key={partner.fields.name} partner={partner.fields} />
        ))}
      </div>
    </div>
  )
}

export default PreferredPartners
