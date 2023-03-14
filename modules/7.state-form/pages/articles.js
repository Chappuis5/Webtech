import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

function ArticleCard(props) {
    return (
        <Link href={`/articles/${props.link}`}>
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

export default function Articles({articles}) {
    return (
        <div className="wt-container">
            <Head>
                <title>Articles</title>
                <meta name="description" content="articles"/>
                <link rel="icon" href="/favicon.ico"/>
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
                    {articles.map( article => (
                        <ArticleCard key={article.slug} link={article.slug} title={article.title} content={article.content} date={article.date} author={article.author}/>
                        ))}
                </div>
            </main>
            <Footer/>
        </div>
    )
}


export async function getStaticProps(ctx) {
    const response = await fetch('http://localhost:3000/api/articles')
    const articles = await response.json()

    return {
        props: {
            articles: articles
        }
    }
}