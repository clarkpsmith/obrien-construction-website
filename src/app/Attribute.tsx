import {motion} from "framer-motion"
const Attribute = ({attribute}: {attribute: string}) => {

    return (
        <div className="p-2">
            <div className="flex text-[14px] w-[400px]">
            <div className="text-[#D0D0D0] uppercase pb-1">{attribute}</div> <div className="flex-grow"></div><div className="text-[#D0D0D0]">100%</div>
            </div>
            <motion.div className="w-[400px] bg-black h-[20px] rounded-2xl"></motion.div>

        </div>
    )
1
}

export default Attribute