import React, { ChangeEvent, useState } from 'react'
import members from '../config/members'
import Card from './Card'

export type member = {
  id: number,
  name: string,
}

type Props = {
  val: string[],
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CardList: React.FC<Props> = ({val, handleChange}) => {
  return (
    <>
      <p className="text-center mb-6">選択中: {val.join(", ")}</p>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-md mx-auto">
        {members.length > 0 && members.map((item) => {
          return (<Card id={item.id} name={item.name} key={item.id} checked={val.includes(item.name)} handleChange={handleChange} />)
        })}
      </div>
    </>
  )
}

export default CardList
