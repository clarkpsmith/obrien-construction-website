"use client"

const Certifications = ({certifications}: {certifications: any }) => {

    console.log({certifications})
    
    return (
      <div className="sm:pl-8 py-4">
        <div className="text-[24px] text-center sm:text-left font-bold">
          Certifications & Education
        </div>
        <div className="pl-4">
          {certifications.map((certification: string) => {
            return (
              <div
                key={certification}
                className="py-1 text-[12px] sm:text-[16px] mr-2"
              >
                • {certification}
              </div>
            )
          })}
        </div>
        <div></div>
      </div>
    )

}

export default Certifications;