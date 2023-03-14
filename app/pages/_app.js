import {useState} from "react";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import '../styles/globals.css'
import { ContextProvider } from "../utils/Context";

function MyApp({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <ContextProvider>
                <Component {...pageProps}/>
            </ContextProvider>
        </SessionContextProvider>
    )
}
export default MyApp
