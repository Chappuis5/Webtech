import { useContext, useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Head from 'next/head'
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import Editor from "../../../components/Editor";
import Context from "../../../utils/Context";
import {messageTypes} from "../../../components/Message";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function ArticleEdition({article}){
    const {setMessage} = useContext(Context)
    const [content, setContent] = useState(article.content)
    const user = useUser()
    const router = useRouter()
    const supabase = useSupabaseClient()

    if(!article) {
        return <div>Article not found</div>
    }

    if(!user) {
        return (<Layout><div>Not logged in</div></Layout>)
    }

    if(user.id !== article.author){
        return (<Layout><div>You are not the author of the article</div></Layout>)
    }

    const onSubmit = async function (e) {
        e.preventDefault()

        const {error} = await supabase
        .from('articles')
        .update([
            {
                title: e.target.title.value,
                content: content,
            },
        ])
        .eq('id', article.id)
        
        if(error){
            console.log(error)
            setMessage({content: 'Could not update article', type: messageTypes.error})
            return
        }
        
        setMessage({content: 'Article updated', type: messageTypes.success})
        redirect()

    }

    const redirect = () => router.push(`/articles/${article.id}`)

    return (
        <Layout>
            <Head>
                <title>Editor</title>
                <meta name="description" content="editor"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="wt-title">Edit your article</h1>
            <Editor article={article} onSubmit={onSubmit} onCancel={redirect} content={content} setContent={setContent}/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const supabase = createServerSupabaseClient(ctx)

    const {data, error} = await supabase
    .from('articles')
    .select('id, title, content, author')
    .eq('id', ctx.params.slug)
    .single()

    if(error){
        console.log(error);
    }

    return {
        props: {
            article: error ? null : data
        }
    }
}