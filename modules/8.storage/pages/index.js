import Head from 'next/head'
import Link from "next/link";
import Layout from "../components/Layout";

function Card(props) {
    return (
        <Link className="wt-card" href={`/${props.name.toLowerCase()}`}>
            <h2 className="mb-4 text-2xl">{props.name} &rarr;</h2>
            <p className="m-0 text-xl">{props.description}</p>
        </Link>
    )
}

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Welcome</title>
                <meta name="description" content="Homepage"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
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
        </Layout>
    )
}