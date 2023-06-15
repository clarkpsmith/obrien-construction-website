"use client"
import Attributes from "@/app/Attributes"


const CompanyDescription = ({companyProfile}: {companyProfile: any}) => {
    


return (
  <section id="about">
    <div className="flex-row m-8 pb-20">
      <div className="flex justify-center items-center flex-col">
        <div>
          <div className="font-bold text-[20px] sm:text-[26px] drop-shadow-xl text-center text-white uppercase">
            {companyProfile.tagLine}
          </div>
          <div className="w-[100%]  bg-[white] rounded-xl h-[3px] mb-4"></div>
        </div>
        <div className="m-4 text-[24px] sm:text-[32px] text-white font-bold drop-shadow-xl uppercase text-center mb-12">
          {companyProfile.shortDescription}
        </div>
      </div>
    </div>
  </section>
)
}
export default CompanyDescription