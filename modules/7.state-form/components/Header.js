import Link from "next/link";
import {useContext} from "react";
import Context from "./UserContext";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Header() {
    const {user} = useContext(Context)

    return (
        <header className="flex justify-center items-center p-8 border-b border-black">
            <div className="border border-black hover:border-blue-500 duration-150">
                <ul>
                    <LiHeader link={'/'} name={'Home'}/>
                    <LiHeader link={'/about'} name={'About'}/>
                    <LiHeader link={'/contacts'} name={'Contacts'}/>
                    <LiHeader link={'/articles'} name={'Articles'}/>
                </ul>
            </div>
            <div className="ml-auto">
                {
                    (user != null && user.username != null && user.email != null)
                        ?
                        <LoggedIn/>
                        :
                        <LoggedOut/>
                }
            </div>
        </header>
    )
}

function LiHeader(props) {
    return (
        <li className="float-left block text-center p-4 hover:text-blue-500 hover:font-bold duration-150"><Link
            href={props.link}>{props.name}</Link></li>
    )
}