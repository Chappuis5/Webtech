import styles from '../styles/Home.module.css'
import Head from "next/head";
import {Footer, Header} from "./index";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="about us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    What is this about?
                </h1>

                <p className={styles.description}>
                    This a lab project from school.
                </p>
            </main>
            <Footer/>
        </div>
        )
}