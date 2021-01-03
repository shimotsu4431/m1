import React from 'react'

const Card: React.FC = () => {
  return (
    <div className="mb-4 mx-2 w-36 h-36 border-2 border-gray-400 bg-gray-200 cursor-pointer hover:bg-gray-400">
      <input type="checkbox" value="1" id="111" className="hidden" />
      <label htmlFor="111"></label>
    </div>
  )
}

export default Card
