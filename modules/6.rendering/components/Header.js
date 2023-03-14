import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function Header() {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/profile/' + 'maximepires')
            const profile = await response.json()
            setProfile(profile)
        }
        fetchData()
    }, [])

    return (
        <header className="p-8 border-b border-black">
            <div className="flex float-left pb-8 hover:font-bold hover:text-blue-500 duration-150">
                <Image src="/user.svg" alt="Logo" width={58} height={32}/>
                <ul>
                    <li>{profile.username}</li>
                    <li>{profile.email}</li>
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <ul className="border border-black hover:border-blue-500 duration-150">
                    <LiHeader link={'/'} name={'Home'}/>
                    <LiHeader link={'/about'} name={'About'}/>
                    <LiHeader link={'/contacts'} name={'Contacts'}/>
                    <LiHeader link={'/articles'} name={'Articles'}/>
                </ul>
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

export async function getStaticProps(ctx) {
    const response = await fetch('http://localhost:3000/api/profile/' + 'maximepires')
    const profile = await response.json()

    return {
        props: {
            profile: profile
        }
    }
}
