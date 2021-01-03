import Head from 'next/head'
import React from 'react'
import CardList from '../components/CardList'

const Home: React.FC = () => {
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
        <section>
        {/* <h2 className="text-center text-2xl font-bold mb-4">選択肢一覧</h2>
        <h3 className="text-center text-base tracking-wide mb-6 text-gray-400">以下の選択肢から選んでください。</h3> */}
        <CardList></CardList>
      </section>
      </main>
    </div>
  )
}

export default Home
