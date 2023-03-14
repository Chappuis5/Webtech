import Head from 'next/head'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Article({article}) {
    return (
        <div className="wt-container">
            <Head>
                <title>Article</title>
                <meta name="description" content="Article"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="wt-main">
                <h1 className="wt-title">
                    {article.title}
                </h1>
                <p className="wt-description">
                    {article.content}
                </p>
                <footer>
                    {article.author} - {article.date}
                </footer>
            </main>
            <Footer/>
        </div>
    )
}


export async function getStaticProps(ctx) {
    const response = await fetch(`http://localhost:3000/api/articles/${ctx.params.slug}`)
    const article = await response.json()
    return {
        props: {
            article: article
        }
    };
}

export async function getStaticPaths(ctx) {
    const response = await fetch(`http://localhost:3000/api/articles`)
    const articles = await response.json()
    return {
        paths: articles.map(article => `/articles/${article.slug}`),
        fallback: false
    };
}