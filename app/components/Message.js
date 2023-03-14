import { CancelIcon } from "../utils/SvgIcons"

export default function Message({message, setMessage}){
    if(!message) return
    
    return (
        <div
            className="fixed flex items-center mr-16 mb-16 right-0 bottom-0"
            onClick={() => setMessage(null)}
            role="dialog"
        >
            <div className={"flex p-4 mb-4 text-sm rounded-lg " + message.type.class} role="alert">
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium"><b>{message.type.text} alert!</b></span> {message.content}
                </div>
                <svg className="group hover:cursor-pointer flex-shrink-0 inline w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <g className="group-hover:animate-spin origin-center">
                        <path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M 8 8 L 16 16 M 8 16 L 16 8"/>
                    </g>
                </svg>
            </div>
        </div>
    )

}

export const messageTypes = {
    info: {
        class: 'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800',
        text: 'Info'
    },
    success: {
        class: 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
        text: 'Success'
    },
    warning: {
        class: 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800',
        text: 'Warning'
    },
    error: {
        class: 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800',
        text: 'Error'
    }
}