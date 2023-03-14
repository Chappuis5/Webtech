import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../components/Layout.js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useContext } from 'react'
import Context from '../utils/Context.js'

export default function Login() {
    const router = useRouter()
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const {persistProfile} = useContext(Context)
    
    if(user){
        persistProfile()
        router.push('/profile')
    }

    return (
        <Layout>
            <Head>
                <title>WebTech - user signin</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="wt-title">
                Sign in
            </h1>
            <Auth redirectTo="http://localhost:3000/login" supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} providers={['github']} />
        </Layout>
    )
}