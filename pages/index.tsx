import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>M-1 SELECT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-4 mx-auto">
        <h1 className="text-center text-5xl font-bold mt-8 mb-6">
          M-1 SELECT
        </h1>
        <h2 className="text-center text-lg tracking-wide mb-6 text-gray-400">M-1敗者復活戦風のやつを作ってみる。Tailwindも使ってみるよ。</h2>
      </main>
    </div>
  )
}

export default Home