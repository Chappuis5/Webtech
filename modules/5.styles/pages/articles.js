import Head from "next/head";
import {Footer, Header} from "./index";
import Link from "next/link";

function ArticleCard(props) {
    return (
        <Link href={`/article?name=${props.title}&content=${props.content}&author=${props.author}&date=${props.date}`}>
            <a className="wt-card">
                <h2 className="mb-4 text-2xl">{props.title}</h2>
                <p className="m-0 text-xl">{props.content}</p>
                <footer className="text-end">
                    {props.date} - {props.author}
                </footer>
            </a>
        </Link>
    )
}

export default function Articles() {
    return (
        <div className="wt-container">
            <Head>
                <title>About</title>
                <meta name="description" content="articles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="wt-main">
                <h1 className="wt-title">
                    Articles
                </h1>

                <p className="wt-description">
                    Written by the famous duo Maxime Pires and Evan Flament
                </p>

                <div className="wt-grid">
                    <ArticleCard title={'Best movies'} content={'Tenet, Blade Runner 2049, La La Land'} date={'2022'} author={'Maxime Pires'}/>
                    <ArticleCard title={'Best albums'} content={'TPA (Romeo Elvis), Memoria (Jazzy Bazz)'} date={'2022'} author={'Maxime Pires'}/>
                    <ArticleCard title={'A boring article'} content={'Did you know .... (too long)'} date={'2022'} author={'Evan Flament'}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}