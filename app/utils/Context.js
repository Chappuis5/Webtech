import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import {createContext, useEffect, useState} from "react";
import md5 from 'md5'
import Message from "../components/Message";

const Context = createContext()

export default Context

export const ContextProvider = ({children}) => {
    const [profile, setProfile] = useState({default: true, gravatar: ""})
    const [message, setMessage] = useState(null)
    const [darkMode, setDarkMode] = useState(false)
    const supabase = useSupabaseClient()
    const user = useUser()

    useEffect(() => {
        async function close(){
            await new Promise(resolve => setTimeout(resolve, 3000));
            setMessage(null)
        }
        if(message != null) close()
    }, [message])

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('dark');
        root.classList.add(darkMode ? 'dark' : null);
    }, [darkMode]);

    const fetchProfile = async function() {
        const {data, error} = await supabase
            .from('profiles')
            .select('id, username, fullname, gravatar, website, accent_color')
            .eq('id', user.id)
            .single()
        
        if(error) {
            console.log(error);
        } else {
            setProfile(data)
        }
    }

    const persistProfile = async function() {
        const {data, error} = await supabase
        .from('profiles')
        .select('id, username, fullname, gravatar, website')
        .eq('id', user.id)
        .single()
        
        if(error && error.code == "PGRST116"){

            const profile = {
                id: user.id,
                username: user.user_metadata.user_name,
                fullname: user.user_metadata.full_name,
                gravatar: md5(user.email.trim().toLowerCase()),
                accent_color: "black"
            }

            const {error} = await supabase
                .from('profiles')
                .insert(profile)

            if(error){
                console.log(error)
            } else {
                setProfile(profile)
            }

         } else if(error){
            console.log(error)
        } else {
            setProfile(data)
        }
    }

    return (
        <Context.Provider value={{
            profile: profile,
            persistProfile: () => persistProfile(),
            fetchProfile: () => fetchProfile(),
            setMessage: (message) => setMessage(message),
            darkMode: darkMode,
            setDarkMode: (darkMode) => setDarkMode(darkMode)
        }}>
            <Message message={message} setMessage={setMessage}/>
            {children}
        </Context.Provider>
    )
}