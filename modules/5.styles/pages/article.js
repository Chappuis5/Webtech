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
        <div className="wt-container">
            <Head>
                <title>Welcome</title>
                <meta name="description" content="Article" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="wt-main">
                <h1 className="wt-title">
                    { name }
                </h1>
                <p className="wt-description">
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
