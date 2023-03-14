import Head from "next/head";
import Layout from "../components/Layout";

function User(props) {
    return (
        <a href={`https://github.com/${props.username}`} className="wt-card">
            <div className="flex">
                <img className="rounded-full mr-4 h-7 w-auto" src={`https://github.com/${props.username}.png`}/>
                <h2 className="mb-4 text-2xl">{props.name}</h2>
            </div>
            <p className="m-0 text-xl">{props.description}</p>
        </a>
    )
}

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta name="description" content="about us"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="wt-title">
                What is this about?
            </h1>
            <p className="wt-description dark:text-white">
                This a lab project from school.
            </p>
            <div className="wt-grid">
                <User username={'maximepires4'} name={'Maxime Pires'}
                      description={'Say "Pop!_OS" and let him talk for the next two hours'}/>
                <User username={'Chappuis5'} name={'Evan Flament'}
                      description={"Don't talk to him, he's a weirdo"}/>
                <User username={'sergkudinov'} name={' Sergei Kudinov '} description={'Our mighty professor'}/>
            </div>
        </Layout>
    )
}