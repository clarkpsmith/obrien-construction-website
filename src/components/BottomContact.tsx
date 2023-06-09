import Image from "next/image"

const BottomContact = ({profile}: {profile: any}) => {

    const logo: string = profile.logo.fields.file.url


    return (
        <div className="bg-black flex justify-center w-full text-white p-8">
            <div className="flex">
        <div className=" flex flex-col ml-10 justify-center items-center">
        <div className="flex ">
        <div>O'Brien Construction</div>
        </div>
<div>Denver, CO</div>
<a href="tel:+17202451100">{profile.phone}</a>
<a href={`mailto:${profile.email}`}>{profile.email}</a>
<a href="https://clarksmith.dev">
<div className="text-[10px] cursor-pointer text-gray-600 mt-1">Built by Clark Smith</div>
</a>
        </div>
       
       <a href={profile.instagram}>
       <div className="ml-6 mt-2 cursor-pointer"> <Image alt="instagram icon" width={30} height={30} src="/images/instagram-icon.svg"/></div>
        </a> 
        </div>
      </div>
    )

}

export default BottomContact