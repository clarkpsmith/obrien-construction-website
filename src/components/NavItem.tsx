const NavItem = ({name} : {name: string}) => {

    return (
      <div className="hidden sm:block mx-2 sm:mx-12 mb-1 font-bold text-[20px] cursor-pointer">
        {name}
      </div>
    )
}


export default NavItem