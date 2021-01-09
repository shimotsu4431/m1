import React, { ChangeEvent, useMemo, useState } from 'react'
import members from '../config/members'
import Card from './Card'
import EmptyCard from './EmptyCard'

export type member = {
  id: number,
  name: string,
  src: string
}

type Props = {
  selectedMember: member[],
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SelectedCardList: React.FC<Props> = ({selectedMember, handleChange}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-md mx-auto h-36">
        {selectedMember.length && selectedMember[0] ? <Card id={selectedMember[0].id} name={selectedMember[0].name} src={selectedMember[0].src} key={selectedMember[0].id} checked={selectedMember.includes(selectedMember[0])} handleChange={handleChange} /> :<EmptyCard />}
        {selectedMember.length && selectedMember[1] ? <Card id={selectedMember[1].id} name={selectedMember[1].name} src={selectedMember[1].src} key={selectedMember[1].id} checked={selectedMember.includes(selectedMember[1])} handleChange={handleChange} /> :<EmptyCard />}
        {selectedMember.length && selectedMember[2] ? <Card id={selectedMember[2].id} name={selectedMember[2].name} src={selectedMember[2].src} key={selectedMember[2].id} checked={selectedMember.includes(selectedMember[2])} handleChange={handleChange} /> :<EmptyCard />}
      </div>
    </>
  )
}

export default SelectedCardList
