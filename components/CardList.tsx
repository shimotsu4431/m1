import React, { useState } from 'react'
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

const CardList: React.FC = () => {
  const [val, setVal] = useState([])

  const handleChange = (e: HTMLInputElement) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center content-between w-full max-w-screen-md mx-auto">
      {members.length > 0 && members.map((item) => {
        return ( <Card id={item.id} name={item.name} key={item.id} checked={val.includes(item.name)} handleChange={handleChange}></Card>)
      })}
    </div>
  )
}

export default CardList
