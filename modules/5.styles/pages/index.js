import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

function Card(props) {
    return (
        <Link href={`/${props.name.toLowerCase()}`}>
            <a className="wt-card">
                <h2 className="mb-4 text-2xl">{props.name} &rarr;</h2>
                <p className="m-0 text-xl">{props.description}</p>
            </a>
        </Link>
    )
}

export default function Home() {
  return (
    <div className="wt-container">
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>

      <main className="wt-main">
        <h1 className="wt-title">
          Welcome to our site!
        </h1>

        <p className="wt-description">
          Built with{' '}
          <code className="bg-black text-white p-3 rounded">Next.js</code>
        </p>

        <div className="wt-grid">
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
      <footer className="flex border-t border-black justify-center items-center p-8">
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-16 ml-8">
            <Image src="/eye.png" alt="Logo" width={29} height={16} />
          </span>
            The Eye
        </a>
      </footer>
  )
}

export function Header() {
    return (
        <header className="flex p-8 border-b border-black justify-center items-center">
            <ul className="border border-black hover:border-blue-500 duration-150">
                <LiHeader link={'/'} name={'Home'}/>
                <LiHeader link={'about'} name={'About'}/>
                <LiHeader link={'contacts'} name={'Contacts'}/>
                <LiHeader link={'articles'} name={'Articles'}/>
            </ul>
        </header>
    )
}

function LiHeader(props) {
    return (
        <li className="float-left block text-center p-4 hover:text-blue-500 hover:font-bold duration-150"><Link href={props.link}>{props.name}</Link></li>
    )
}
