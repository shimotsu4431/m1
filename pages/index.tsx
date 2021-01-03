import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>M-1 SELECT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          M-1 SELECT
        </h1>
        <div>
          <h2 className={styles.subTitle}>選択中</h2>
        </div>
      </main>
    </div>
  )
}

export default Home