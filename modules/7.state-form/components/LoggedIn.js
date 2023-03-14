import {useContext} from "react";
import Context from "./UserContext";
import Image from "next/image";

export default function LoggedIn() {
    const {user, logout} = useContext(Context)

    return (
        <div className="text-center">
            <Image src="/user.svg" alt="Logo" width={58} height={32}/>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <button className="wt-button" onClick={()=>{logout()}}>Logout</button>
        </div>
    )
}