import clsx from 'clsx'
import Head from 'next/head'
import React, { useCallback } from 'react'
import CardList from '../components/CardList'
import SelectedCardList from '../components/SelectedCardList'
import useSelect, { CARD_NUM } from '../hooks/useSelect'

const Home: React.FC = () => {
  const { selectedMember, handleChange, handleReset, handleRandom, handleSend } = useSelect()

  return (
    <div>
      <Head>
        <title>SELECT UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-4 mx-auto">
        <section className="mb-6">
          <h1 className="text-center">
            SELECT UI
          </h1>
        </section>
        <section className="mb-6">
        <h2 className="text-center">選択中</h2>
          <SelectedCardList selectedMember={selectedMember} handleChange={handleChange}></SelectedCardList>
        </section>
        <section className="mb-6">
          <h2 className="text-center">以下から選択</h2>
          <CardList selectedMember={selectedMember} handleChange={handleChange}></CardList>
        </section>
        <section className="flex justify-center">
          <button onClick={() => handleReset()} className="uppercase px-4 sm:px-8 py-2 mr-4 border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-md">リセット</button>
          <button onClick={() => handleRandom()} className="uppercase px-4 sm:px-8 py-2 mr-4 border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-md">ランダムでセット</button>
          <button onClick={() => handleSend()} disabled={selectedMember.length < CARD_NUM} className={clsx({
            "uppercase": true,
            "px-4": true,
            "sm:px-8": true,
            "py-2": true,
            "border": true,
            "border-blue-300": selectedMember.length < CARD_NUM,
            "border-blue-600": selectedMember.length === CARD_NUM,
            "text-blue-300": selectedMember.length < CARD_NUM,
            "text-blue-600": selectedMember.length === CARD_NUM,
            "max-w-max": true,
            "shadow-sm": true,
            "hover:shadow-md": selectedMember.length === CARD_NUM,
            "cursor-not-allowed": selectedMember.length < CARD_NUM
          })}>送信</button>
        </section>
      </main>
    </div>
  )
}

export default Home
