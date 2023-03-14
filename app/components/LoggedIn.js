import {logOut} from "../utils/LogOut";
import {useRouter} from "next/router";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import { SignOutIcon } from "../utils/SvgIcons";

export default function LoggedIn() {
    const router = useRouter()
    const supabase = useSupabaseClient()

    return (
            <a className="group flex hover:cursor-pointer hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" onClick={()=>{logOut({supabase,router})}}>
                <SignOutIcon className="mr-1"/>
                <p>Sign out</p>
            </a>
    )
}
