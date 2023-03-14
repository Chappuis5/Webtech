import Head from "next/head";
import {useState} from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../components/Layout.js'

function User(props) {
    return (
        <a href={`https://github.com/${props.username}`} className="wt-card">
            <h2 className="mb-4 text-2xl">{props.name}</h2>
            <p className="m-0 text-xl">{props.description}</p>
        </a>
    )
}

export default function Contacts() {
    const supabase = useSupabaseClient()
    const [message, setMessage] = useState(null)

    const onSubmit = async function (e) {
        e.preventDefault()
        const {error} = await supabase
            .from('contacts')
            .insert([
                {
                    firstname: e.target.firstname.value,
                    lastname: e.target.lastname.value,
                    email: e.target.email.value,
                    message: e.target.message.value,
                },
            ], { returning: 'minimal' })

        if(error){
            console.log(error)
            setMessage('Sorry, an unexpected error occured.')
        }else {
            setMessage(
                <div>
                    <h2 className="text-center mt-3">Confirmation</h2>
                    <p>Thank you for contacting us. We will get back to you promptly.</p>
                </div>
            )
        }
    }

    return (
        <Layout>
            <Head>
                <title>Contacts</title>
                <meta name="description" content="contacts"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
                <div>
                    <label>
                        <span>First name</span>
                        <input type="text" name="firstname"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Last name</span>
                        <input type="text" name="lastname"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email</span>
                        <input type="text" name="email"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Message</span>
                        <textarea name="message"/>
                    </label>
                </div>
                <div>
                    <button
                        className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
                    >
                        Send
                    </button>
                </div>
            </form>
            {message &&
                <div
                    aria-label="Overlow below the drawer dialog"
                    className="fixed inset-0 bg-black/80 flex items-center justify-center"
                    onClick={() => setMessage(null)}
                    role="dialog"
                >
                    <div
                        aria-label="Alert pane"
                        className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
                    >
                        {message}
                    </div>
                </div>
            }
        </Layout>
    )
}