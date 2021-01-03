import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>M-1 SELECT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-center text-5xl font-bold mt-8 mb-8">
          M-1 SELECT
        </h1>
      </main>
    </div>
  )
}

export default Home