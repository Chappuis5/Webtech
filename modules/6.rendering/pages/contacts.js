import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function User(props) {
    return (
        <a href={`https://github.com/${props.username}`} className="wt-card">
            <h2 className="mb-4 text-2xl">{props.name}</h2>
            <p className="m-0 text-xl">{props.description}</p>
        </a>
    )
}

export default function Contacts() {
    return (
        <div className="wt-container">
            <Head>
                <title>Contacts</title>
                <meta name="description" content="contacts"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="wt-main">
                <h1 className="wt-title">
                    Who are we ?
                </h1>
                <p className="wt-description">
                    We are two students at ECE in 4th year.
                </p>
                <div className="wt-grid">
                    <User username={'maximepires4'} name={'Maxime Pires'}
                          description={'Say "Pop!_OS" and let him talk for the next two hours'}/>
                    <User username={'Chappuis5'} name={'Evan Flament'}
                          description={"Don't talk to him, he's a weirdo"}/>
                    <User username={'sergkudinov'} name={' Sergei Kudinov '} description={'Our mighty professor'}/>
                </div>
                <form>
                    <div>
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Enter your email: </label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="content">Enter your message: </label>
                        <input type="text" name="content" id="content" required/>
                    </div>
                    <div>
                        <input type="submit" value="Subscribe!"/>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    )
}