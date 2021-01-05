import React, { ChangeEvent, useState } from 'react'
import Card from './Card'

export type member = {
  id: number,
  name: string,
}

const members: member[] = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
  {
    id: 4,
    name: "D",
  },
  {
    id: 5,
    name: "E",
  },
  {
    id: 6,
    name: "F",
  },
  {
    id: 7,
    name: "G",
  },
  {
    id: 8,
    name: "H",
  },
  {
    id: 9,
    name: "I",
  },
  {
    id: 10,
    name: "J",
  },
  {
    id: 11,
    name: "K",
  },
  {
    id: 12,
    name: "L",
  },
  {
    id: 13,
    name: "M",
  },
  {
    id: 14,
    name: "N",
  },
  {
    id: 15,
    name: "O",
  },
  {
    id: 16,
    name: "P",
  }
]

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
