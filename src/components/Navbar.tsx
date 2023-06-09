import Image from "next/image"
import NavItem from "./NavItem"

const Navbar = ({profile}: {profile: any}) => {


    return (
        <div >
<div className="flex justify-content items-end  p-6 pb-1 pt-3">
    <div className='flex flex-col justify-center items-center mr-6'>
<Image width={150} height={150} alt="O'Brien Logo" src="/images/obrien-logo.png"/>
    <div className="text-white font-bold text-[28px] shadow-md">{profile.name}</div>
    </div>
<NavItem name="ABOUT"/>
<NavItem name="SERVICES"/>
<NavItem name="WORK"/>
<NavItem name="CONTACT"/>
<div className="flex-grow"></div>
<a href={profile.instagram}>
<div className="mb-2 cursor-pointer"> <Image alt="instagram icon" width={30} height={30} src="/images/instagram-icon.svg"/></div>
</a>
</div>
{/* <div className="w-[335px] bg-[white] h-[3px]"/> */}
</div>
    )

}
 export default Navbar