import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { AddIcon, LoadingIcon } from "../utils/SvgIcons";
import ArticleCard from "../components/ArticleCard";
import Context from "../utils/Context";

export default function Articles() {
    const supabase = useSupabaseClient()
    const [articles, setArticles] = useState(true)
    const {profile} = useContext(Context)
    const user = useUser()

    const accent_color = profile.accent_color || "blue"
    
    useEffect(() => {
        (async () => {
            const {data, error} = await supabase
            .from('articles')
            .select('id, title, content, created_at, profiles(username, gravatar)')
            .eq('draft', false)
            
            if(error){
                console.log(error)
                setArticles(null)
            } else {
                setArticles(data)
            }
        })()
    },[])

    return (
        <Layout>
            <Head>
                <title>Articles</title>
                <meta name="description" content="articles"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="wt-title">
                Articles
            </h1>
            {
                user ?
                    <Link  href='/newArticle' className={`flex flex-row bg-gray-50 m-4 p-3 rounded border border-${accent_color}-400 dark:bg-gray-800 dark:text-white`}>
                        <AddIcon/>
                        <p className="ml-4">
                            Write a new article !
                        </p>
                    </Link>
                :
                <></>
            }
            <div className="wt-grid">
                {articles ? 
                    articles === true ?
                        <LoadingIcon/>
                        :
                        articles.map(article => (
                            <ArticleCard key={article.id} article={article}/>
                        ))
                    :
                    <div>
                        Error loading articles
                    </div>
                }
            </div>
        </Layout>
    )
}