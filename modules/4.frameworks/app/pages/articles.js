import styles from "../styles/Home.module.css";
import Head from "next/head";
import {Footer, Header} from "./index";

function ArticleCard(props) {
    return (
        <a href={`/article?name=${props.title}&content=${props.content}&author=${props.author}&date=${props.date}`} className={styles.card}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <footer style={{textAlign: "end"}}>
                {props.date} - {props.author}
            </footer>
        </a>
    )
}

export default function Articles() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="articles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Articles
                </h1>

                <p className={styles.description}>
                    Written by the famous duo Maxime Pires and Evan Flament
                </p>

                <div className={styles.grid}>
                    <ArticleCard title={'Best movies'} content={'Tenet, Blade Runner 2049, La La Land'} date={'2022'} author={'Maxime Pires'}/>
                    <ArticleCard title={'Best albums'} content={'TPA (Romeo Elvis), Memoria (Jazzy Bazz)'} date={'2022'} author={'Maxime Pires'}/>
                    <ArticleCard title={'A boring article'} content={'Did you know .... (too long)'} date={'2022'} author={'Evan Flament'}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}