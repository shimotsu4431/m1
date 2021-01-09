import { shuffle } from 'lodash'
import React, { ChangeEvent, useMemo, useState } from 'react'
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
  const shuffledMembers = useMemo(() => {
    return shuffle(members)
  }
  , [members])

  return (
    <>
      <p className="text-center mb-6">選択中: {val.join(", ")}</p>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-md mx-auto">
        {shuffledMembers.length > 0 && shuffledMembers.map((item) => {
          return (<Card id={item.id} name={item.name} key={item.id} checked={val.includes(item.name)} handleChange={handleChange} />)
        })}
      </div>
    </>
  )
}

export default CardList
