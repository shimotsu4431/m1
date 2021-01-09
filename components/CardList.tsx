import React, { ChangeEvent, useMemo, useState } from 'react'
import members from '../config/members'
import Card from './Card'

export type member = {
  id: number,
  name: string,
  src: string
}

type Props = {
  val: member[],
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CardList: React.FC<Props> = ({val, handleChange}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-lg mx-auto">
        {members.length > 0 && members.map((item) => {
          return (<Card id={item.id} name={item.name} src={item.src} key={item.id} checked={val.includes(item)} handleChange={handleChange} />)
        })}
      </div>
    </>
  )
}

export default CardList
