import Link from "next/link";
import { useContext } from "react";
import Context from "../utils/Context";
import Gravatar from "./Gravatar";

export default function ArticleCard({article}) {
    const {profile} = useContext(Context)
    const accent_color = profile.accent_color || "blue"
    return (
        <Link className={`wt-card hover:border-${accent_color}-400`} href={`/articles/${article.id}`}>
            <div className="flex mb-2">
                <Gravatar gravatar={article.profiles.gravatar} size={50}/>
                <h2 className="ml-4 text-2xl">{article.title}</h2>
            </div>
            <footer className="text-center">{article.profiles.username} - {new Date(article.created_at).toLocaleDateString()}</footer>
        </Link>
    )
}