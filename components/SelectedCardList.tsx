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
  val: member[],
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SelectedCardList: React.FC<Props> = ({val, handleChange}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center content-between w-full max-w-screen-md mx-auto h-36">
        {val.length && val[0] ? <Card id={val[0].id} name={val[0].name} src={val[0].src} key={val[0].id} checked={val.includes(val[0])} handleChange={handleChange} /> :<EmptyCard />}
        {val.length && val[1] ? <Card id={val[1].id} name={val[1].name} src={val[1].src} key={val[1].id} checked={val.includes(val[1])} handleChange={handleChange} /> :<EmptyCard />}
        {val.length && val[2] ? <Card id={val[2].id} name={val[2].name} src={val[2].src} key={val[2].id} checked={val.includes(val[2])} handleChange={handleChange} /> :<EmptyCard />}
      </div>
    </>
  )
}

export default SelectedCardList
