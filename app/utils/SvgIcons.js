export function PenIcon(){
    return (
        <svg className="group" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <g className="group-hover:animate-rotate-right origin-center">
                <path stroke="#265BFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 7.307h5" />
                <path stroke="#0A0A30" strokeWidth="1.5" d="M9 5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5v11.3a1.5 1.5 0 01-.54 1.152l-1.5 1.249a1.5 1.5 0 01-1.92 0l-1.5-1.249A1.5 1.5 0 019 16.8V5.5z" />
            </g>
        </svg>
    )
}

export function TrashIcon(){
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path fill="#0A0A30" d="M16.773 10.083a.75.75 0 00-1.49-.166l1.49.166zm-1.535 7.027l.745.083-.745-.083zm-6.198 0l-.745.083.745-.083zm-.045-7.193a.75.75 0 00-1.49.166l1.49-.166zm5.249 7.333h-4.21v1.5h4.21v-1.5zm1.038-7.333l-.79 7.11 1.491.166.79-7.11-1.49-.166zm-5.497 7.11l-.79-7.11-1.49.166.79 7.11 1.49-.165zm.249.223a.25.25 0 01-.249-.222l-1.49.165a1.75 1.75 0 001.739 1.557v-1.5zm4.21 1.5c.892 0 1.64-.67 1.74-1.557l-1.492-.165a.25.25 0 01-.248.222v1.5z"/>
            <path className="group-hover:animate-rotate-tr origin-right " fill="#265BFF" fillRule="evenodd" d="M11 6a1 1 0 00-1 1v.25H7a.75.75 0 000 1.5h10a.75.75 0 000-1.5h-3V7a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
        </svg>
    )
}

export function ProfileIcon({className}){
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle className='group-hover:animate-user' cx="12" cy="8.245" r="2.5" stroke="#265BFF" strokeWidth="1.5"/>
            <ellipse cx="12" cy="15.926" stroke="#0A0A30" strokeWidth="1.5" rx="5" ry="2.329"/>
        </svg>
    )
}

export function LoadingIcon(){
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" fill="none">
            <path className="animate-loader origin-center center" stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943"/>
        </svg>
    )
}

export function SignOutIcon({className}){
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M14.5 14.508V17a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 17V7A2.5 2.5 0 017 4.5h5A2.5 2.5 0 0114.5 7v2.563"/>
            <path className="group-hover:animate-logout" fill="#265BFF" d="M10.333 12.75a.75.75 0 010-1.5v1.5zm8.66-1.5a.75.75 0 010 1.5v-1.5zm-2.551-1.216a.75.75 0 111.054-1.068l-1.054 1.068zM19.5 12l.527-.534a.75.75 0 010 1.068L19.5 12zm-2.004 3.034a.75.75 0 11-1.054-1.068l1.054 1.068zm-7.163-3.784h8.66v1.5h-8.66v-1.5zm7.163-2.284l2.531 2.5-1.054 1.068-2.531-2.5 1.054-1.068zm2.531 3.568l-2.531 2.5-1.054-1.068 2.531-2.5 1.054 1.068z"/>
        </svg>
    )
}

export function CancelIcon(){
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <g className="group-hover:animate-spin origin-center">
                <path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M 8 8 L 16 16 M 8 16 L 16 8"/>
            </g>
        </svg>
    )
}

export function CheckIcon(){
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M5.387 12.68l3.955 3.956 9.271-9.272" className="group-hover:animate-check" strokeDashoffset="0" strokeDasharray="100"/>
        </svg>
    )
}

export function AddIcon(){
    return (
        <div className="group">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path className="group-hover:animate-grow origin-center center" fill="#265BFF" fillRule="evenodd" d="M12.75 8.744a.75.75 0 00-1.5 0v2.506H8.744a.75.75 0 000 1.5h2.506v2.506a.75.75 0 001.5 0V12.75h2.506a.75.75 0 000-1.5H12.75V8.744z" clipRule="evenodd"/>
                <rect width="16" height="16" x="4" y="4" stroke="#0A0A30" strokeWidth="1.5" rx="2.075"/>
            </svg>
        </div>
    )
}