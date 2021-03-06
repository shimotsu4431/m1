import React, { ChangeEvent, useMemo, useState } from 'react'
import members from '../config/members'
import Card from './Card'

export type member = {
  id: number,
  name: string,
}

type Props = {
  selectedMember: member[],
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CardList: React.FC<Props> = ({selectedMember, handleChange}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-lg mx-auto">
        {members.length > 0 && members.map((item) => {
          return (<Card id={item.id} name={item.name} key={item.id} checked={selectedMember.includes(item)} handleChange={handleChange} />)
        })}
      </div>
    </>
  )
}

export default CardList
