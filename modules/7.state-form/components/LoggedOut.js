import Context from "./UserContext";
import {useContext} from "react";

export default function LoggedOut() {
    const {login} = useContext(Context)

    const onClickLogin = async (username,e) => {
        const response = await fetch('/api/profile/' + username)
        const user = await response.json()
        login(user)
    }

    return (
        <div>
            <button className="wt-button" onClick={()=>{ onClickLogin('maximepires') }}>Login</button>
        </div>
    )
}