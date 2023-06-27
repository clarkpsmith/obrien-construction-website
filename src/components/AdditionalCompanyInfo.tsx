"use client"
import React from 'react'
import Attributes from '@/app/Attributes'
import Image from 'next/image'
import Certifications from './Certifications'

const AdditionalCompanyInfo = ({ companyProfile }: { companyProfile: any }) => {
  const description = companyProfile.description.content[0].content[0].value

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="sm:w-[50%] p-4 pt-0">
        <div className="mx-4 w-[150px] float-left rounded-md my-1 overflow-hidden h-[150px]">
          <Image
            alt="profile photo"
            width={150}
            height={150}
            src={`https:${companyProfile.profilePhoto.fields.file.url}`}
          />
        </div>

        <div className="text-[24px] font-bold ">Michael Patrick O'Brien</div>
        <div className="flex-wrap p-1 pl-4">{description}</div>
      </div>
      <div className="sm:w-[50%]">
        <Certifications certifications={companyProfile.certifications} />
        <Attributes attributes={companyProfile.attributes} />
      </div>
    </div>
  )
}


export default AdditionalCompanyInfo;