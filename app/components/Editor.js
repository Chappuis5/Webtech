import Validation from "./Validation";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useContext } from "react";
import Context from "../utils/Context";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
)

export default function Editor({article, onSubmit, onCancel, content, setContent}){
    const {darkMode} = useContext(Context)
    return (
        <form className=" w-full m-8 [&_span]:block" onSubmit={onSubmit}>
            <div>
                <label>
                    <span className="ml-8 dark:text-white">Title</span>
                    <input className="border border-black rounded ml-8 text-gray-700 leading-tight focus:outline-none dark:bg-gray-800 dark:text-white dark:border-white" type="text" name="title" defaultValue={article ? article.title : ""}/>
                </label>
            </div>
            <div className="mt-8">
                <label>
                    <span className=" ml-8 dark:text-white">Content</span>
                    <div className='border border-black rounded-xl dark:border-white ml-8 mr-8' data-color-mode={darkMode ? "dark" : "light"}>
                        <MDEditor value={content ? content : ""} onChange={setContent}/>
                    </div>
                </label>
            </div>
            <Validation onCancel={onCancel}/>
        </form>
    )
}