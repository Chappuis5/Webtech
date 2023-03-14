import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Card(props) {
	return (
		<a href={'/' + props.name.toLowerCase()} className={styles.card}>
			<h2>{props.name} &rarr;</h2>
			<p>{props.description}</p>
		</a>
	)
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our site!
        </h1>

        <p className={styles.description}>
          Built with{' '}
          <code className={styles.code}>Next.js</code>
        </p>

        <div className={styles.grid}>
	  <Card name="About" description="Find all informations about the project."/>
	  <Card name="Contacts" description="Contact the developpers of this project"/>
	  <Card name="Articles" description="See all articles published"/>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export function Footer() {
  return (
      <footer className={styles.footer}>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/eye.png" alt="Logo" width={29} height={16} />
          </span>
            The Eye
        </a>
      </footer>
  )
}

export function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.navigation}>
                <li className={styles.navigationComp}><a href="/">Home</a></li>
                <li className={styles.navigationComp}><a href="/about">About</a></li>
                <li className={styles.navigationComp}><a href="/contacts">Contacts</a></li>
                <li className={styles.navigationComp}><a href="/articles">Articles</a></li>
            </ul>
        </header>
    )
}
