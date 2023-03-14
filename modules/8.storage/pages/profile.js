import Head from "next/head";
import Layout from "../components/Layout";
import {useContext} from "react";
import UserContext from "../components/UserContext";
import Context from "../components/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext)
    const {logout} = useContext(Context)

    const redirect = () => {
        window.location.href = '/'
        logout()
    }

    return (
        <Layout>
            <Head>
                <title>Your profile</title>
                <meta name="description" content="Profile"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <img className="rounded-full mb-6 w-auto" src={`https://github.com/${user.username}.png`}/>
            <h1 className="wt-title">
                Welcome {user.username}
            </h1>
            <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Username</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.username}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Mail</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.email}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <button className="wt-button mt-4" onClick={()=>{redirect()}}>
                Logout
            </button>
        </Layout>
    )
}