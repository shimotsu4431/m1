import React from 'react'

type Props = {
  id: number,
  name: string,
  checked: boolean,
  handleChange: (e: any) => void,
}

const Card: React.FC<Props> = ({ id, name, checked, handleChange }) => {
  return (
    <div className="mb-4 mx-2 w-36 h-36 border-2 border-gray-400 bg-gray-200 cursor-pointer hover:bg-gray-400">
      <input type="checkbox" value={name} id={JSON.stringify(id)} checked={checked} onChange={handleChange} />
      <label htmlFor={JSON.stringify(id)}></label>
    </div>
  )
}

export default Card
