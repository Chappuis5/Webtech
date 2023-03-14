import styles from '../styles/Home.module.css'
import Head from "next/head";
import {Footer, Header} from "./index";

function User(props) {
    return (
        <a href={`https://github.com/${props.username}`} className={styles.card}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </a>
    )
}

export default function Contacts() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contacts</title>
                <meta name="description" content="contacts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Who are we ?
                </h1>

                <p className={styles.description}>
                    We are two students at ECE in 4th year.

                </p>

                <div className={styles.grid}>
                    <User username={'maximepires4'} name={'Maxime Pires'} description={'Say "Pop!_OS" and let him talk for the next two hours'}/>
                    <User username={'Chappuis5'} name={'Evan Flament'} description={"Don't talk to him, he's a weirdo"}/>
                    <User username={'sergkudinov'} name={' Sergei Kudinov '} description={'Our mighty professor'}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}