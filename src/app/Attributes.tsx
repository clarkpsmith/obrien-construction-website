import Attribute from "./Attribute";

const Attributes = ({ attributes }: { attributes: string[] }) => {
  return (
    <div className="flex flex-col items-center px-2 sm:p-2">
      {attributes.map((attribute: string) => (
        <div key={attribute}>
          <Attribute attribute={attribute} />
        </div>
      ))}
    </div>
  )
}

export default Attributes;