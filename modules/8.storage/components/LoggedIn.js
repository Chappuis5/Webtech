import {useContext} from "react";
import Context from "./UserContext";

export default function LoggedIn() {
    const {logout} = useContext(Context)

    return (
            <a className="hover:cursor-pointer hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" onClick={()=>{logout()}}>Sign out</a>
    )
}