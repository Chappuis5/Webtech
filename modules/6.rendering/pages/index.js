import Head from 'next/head'
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                <meta name="description" content="Homepage"/>
                <link rel="icon" href="/favicon.ico"/>
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