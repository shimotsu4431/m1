import Head from 'next/head'
import React, { useCallback } from 'react'
import CardList from '../components/CardList'
import useSelect from '../hooks/useSelect'

const Home: React.FC = () => {
  const { val, setVal, handleChange } = useSelect()

  const handleClick = useCallback(() => {
    alert(val)
    setVal([])
  },[val])

  return (
    <div>
      <Head>
        <title>SELECT UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-4 mx-auto">
        <section className="mb-6">
          <h1 className="text-center text-5xl font-bold mt-8 mb-4">
            M-1 SELECT
          </h1>
          <h2 className="text-center text-xl tracking-wide text-gray-400">M-1敗者復活戦風のUIを作ってみる。Tailwindも使ってみるよ。</h2>
        </section>
        <section className="mb-6">
        <CardList val={val} handleChange={handleChange}></CardList>
      </section>
      <section className="flex justify-center">
        <button onClick={() => setVal([])} className="uppercase px-8 py-2 mr-4 border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-md">リセット</button>
        <button onClick={() => handleClick()} disabled={val.length <= 2} className="uppercase px-8 py-2 border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-md">送信</button>
      </section>
      </main>
    </div>
  )
}

export default Home
