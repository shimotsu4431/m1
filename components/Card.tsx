import React from 'react'
import clsx from "clsx"

type Props = {
  id: number,
  name: string,
  checked: boolean,
  handleChange: (e: any) => void,
}

const Card: React.FC<Props> = ({ id, name, checked, handleChange }) => {
  return (
    <>
      <input className="hidden" type="checkbox" value={name} id={JSON.stringify(id)} checked={checked} onChange={handleChange} />
      <label className={clsx({
        "mb-4": true,
        "mx-2": true,
        "w-36": true,
        "h-36": true,
        "border-2": true,
        "border-gray-400": true,
        "bg-gray-200": true,
        "cursor-pointer": true,
        "bg-gray-400" : checked
      })} htmlFor={JSON.stringify(id)}></label>
    </>
  )
}

export default Card
