import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useContext, useState } from "react"
import Context from "../utils/Context"
import { PenIcon, TrashIcon } from "../utils/SvgIcons"
import Gravatar from "./Gravatar"
import { messageTypes } from "./Message"
import Validation from "./Validation"

export default function Comment({comment, editable, callback}){
    const {setMessage} = useContext(Context)
    const [editing, setEditing] = useState(false)
    const supabase = useSupabaseClient()
    
    const updateComment = async function (e) {
        e.preventDefault()

        e.target.content.value = e.target.content.value.trim()

        if(e.target.content.value === ''){
            setMessage({content: 'Comment can not be empty', type: messageTypes.warning})
            return
        }
        
        if(e.target.content.value !== comment.content){
            const {error} = await supabase
                .from('comments')
                .update({content: e.target.content.value})
                .eq('id', comment.id)

            if(error){
                console.log(error)
                setMessage({content: 'Could not update comment', type: messageTypes.error})
                return
            }
        }

        setMessage({content: 'Comment updated', type: messageTypes.success})
        setEditing(false)
        callback()
    }

    const deleteComment = async () => {
        const {error} = await supabase
                .from('comments')
                .delete()
                .eq('id', comment.id)

        if(error){
            console.log(error)
            setMessage({content: 'Could not delete comment', type: messageTypes.error})
        }

        setMessage({content: 'Comment deleted', type: messageTypes.success})
        callback()
    }

    return (
        <div key={comment.id} className="dark:text-white">
            <header className="flex">
                <Gravatar gravatar={comment.profiles.gravatar} size={30}/>
                <p className="ml-2">
                    {comment.profiles.username} - {new Date(comment.created_at).toLocaleDateString()}
                </p>
            </header>
            <div className="flex mt-4">
                {
                    editing ?
                    <form onSubmit={updateComment}>
                        <textarea className="border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none dark:bg-black dark:text-white dark:border-white" name="content" defaultValue={comment.content}/>
                        <Validation onCancel={() => setEditing(false)}/>
                    </form>
                    :
                    <div className="ml-4">
                        <p>{comment.content}</p>
                    </div>
                }
            </div>
            <footer>
                {
                    editable ?
                    <div className="flex justify-center rounded dark:bg-white dark:text-black">
                        <button onClick={() => setEditing(true)} className="group flex">
                            <PenIcon/>
                            <span>Edit</span>
                        </button>
                        <button onClick={() => deleteComment()} className="group flex ml-4">
                            <TrashIcon/>
                            <span>Delete</span>
                        </button>
                    </div>
                    :
                    <></>
                }
            </footer>
        </div>
    )
}