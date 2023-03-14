import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {ContextProvider} from "../components/UserContext";
import {useState} from "react";

function MyApp({ Component, pageProps }) {
    const [supabase] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider
            supabaseClient={supabase}
            initialSession={pageProps.initialSession}
        >
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </SessionContextProvider>
    )
}
export default MyApp
