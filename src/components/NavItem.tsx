const NavItem = ({name} : {name: string}) => {

    return (
      <a href={`#${name}`}>
        <div className="hidden sm:block mx-2 lg:mx-12 mb-1 font-bold text-[20px] cursor-pointer uppercase">
          {name}
        </div>
      </a>
    )
}


export default NavItem