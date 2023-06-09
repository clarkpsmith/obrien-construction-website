"use client"
import Attributes from "@/app/Attributes"


const CompanyDescription = ({companyProfile}: {companyProfile: any}) => {
    


return (
    <div className="flex-row m-8 pb-20">
        <div className="flex justify-center items-center flex-col">
            <div>
    <div className="font-bold text-[26px] text-white uppercase">{companyProfile.tagLine}</div>
    <div className="w-[100%]  bg-[white] rounded-xl h-[3px] mb-4"></div>
    </div>
    <div className="m-4 text-[32px] text-white font-bold shadow-md uppercase text-center mb-12">{companyProfile.shortDescription}</div>
    </div>
    </div>
   
)
}
export default CompanyDescription