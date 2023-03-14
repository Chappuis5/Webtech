import Head from "next/head";
import {Footer, Header} from "./index";

export default function About() {
    return (
        <div className="wt-container">
            <Head>
                <title>About</title>
                <meta name="description" content="about us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="wt-main">
                <h1 className="wt-title">
                    What is this about?
                </h1>

                <p className="wt-description">
                    This a lab project from school.
                </p>
            </main>
            <Footer/>
        </div>
        )
}