import React, { ChangeEvent, useMemo, useState } from 'react'
import members from '../config/members'
import { CARD_NUM } from '../hooks/useSelect'
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

const noop = () => {}

const SelectedCardList: React.FC<Props> = ({selectedMember, handleChange}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-md mx-auto h-36">
        {(() => {
          const items = []
          for (let i = 0; i < CARD_NUM; i ++) {
            selectedMember && selectedMember[i] ?
            items.push(<Card id={selectedMember[i].id} name={selectedMember[i].name} src={selectedMember[i].src} key={selectedMember[i].id} checked={selectedMember.includes(selectedMember[i])} handleChange={noop} />)
            :
            items.push(<EmptyCard key={i} />)
          }

          return items
        })()}
      </div>
    </>
  )
}

export default SelectedCardList
