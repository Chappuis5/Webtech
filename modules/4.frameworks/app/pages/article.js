import styles from "../styles/Home.module.css";
import Head from "next/head";
import {Footer, Header} from "./index";
import {useRouter} from 'next/router'

export default function Article() {
    const router = useRouter()

    const { name } = router.query
    const { content } = router.query
    const { author } = router.query
    const { date } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome</title>
                <meta name="description" content="Article" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    { name }
                </h1>
                <p>
                    { content }
                </p>
                <footer>
                    { author } - { date }
                </footer>
            </main>

            <Footer/>
        </div>
    )
}
