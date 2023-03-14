import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex border-t border-black justify-center items-center p-8">
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className="h-16 ml-8">
            <Image src="/eye.png" alt="Logo" width={29} height={16}/>
          </span>
                The Eye
            </a>
        </footer>
    )
}