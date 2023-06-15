'use client'
import Image from 'next/image'
import NavItem from './NavItem'

const Navbar = ({ profile }: { profile: any }) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-end  p-6 pb-1 pt-3">
        <div className=" flex flex-col items-center ml-10 sm:ml-0 sm:mr-6">
          <Image
            width={150}
            height={150}
            alt="O'Brien Logo"
            src={`https:${profile.logo.fields.file.url}`}
          />
          <div className="text-white font-bold text-[24px] sm:text-[28px] shadow-md">
            {profile.name}
          </div>
        </div>
        <NavItem name="about" />
        <NavItem name="work" />
        <NavItem name="contact" />
        <div className="sm:flex-grow"></div>
        <div></div>
        <div className="ml-4">
          <a target="_blank" href={profile.instagram}>
            <div className="mb-[6px] cursor-pointer">
              {' '}
              <Image
                alt="instagram icon"
                width={30}
                height={30}
                src="/images/instagram-icon.svg"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Navbar
