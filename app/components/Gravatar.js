import Image from "next/image";

export default function Gravatar({gravatar, className, size}){
    return (
        <Image className={className + " rounded-full"} src={gravatarUrl(gravatar, size)} width={size ? size : 20} height={size ? size : 20}/>
    )
}

function gravatarUrl(hash, size){
    return `https://www.gravatar.com/avatar/${hash}?d=mp${size ? `&s=${size}` : ''}`
}