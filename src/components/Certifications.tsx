"use client"

const Certifications = ({certifications}: {certifications: any }) => {

    console.log({certifications})
    
    return (
        <div className="pl-8 pb-4">
            <div className="text-[24px]  font-bold">Certifications & Education</div>
            <div className="pl-2">
            {certifications.map((certification: string) => {
                return (
                  <div key={certification} className="py-1">
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