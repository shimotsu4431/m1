import React, { useState } from 'react'
import useSelect from '../hooks/useSelect'
import Card from './Card'

export type member = {
  id: number,
  name: string,
}

const members: member[] = [
  {
    id: 1,
    name: "AAA",
  },
  {
    id: 2,
    name: "BBB",
  },
  {
    id: 3,
    name: "CCC",
  },
  {
    id: 4,
    name: "DDD",
  },
  {
    id: 5,
    name: "EEE",
  },
  {
    id: 6,
    name: "FFF",
  },
  {
    id: 7,
    name: "GGG",
  },
  {
    id: 8,
    name: "HHH",
  },
  {
    id: 9,
    name: "III",
  },
  {
    id: 10,
    name: "JJJ",
  },
  {
    id: 11,
    name: "KKK",
  },
  {
    id: 12,
    name: "LLL",
  },
  {
    id: 13,
    name: "MMM",
  },
  {
    id: 14,
    name: "NNN",
  },
  {
    id: 15,
    name: "OOO",
  },
  {
    id: 16,
    name: "PPP",
  }
]

type Props = {
  val: string[],
  handleChange: (e: HTMLInputElement) => void
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
