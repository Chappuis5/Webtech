import {useContext, useEffect, useState} from 'react'
import Head from "next/head";
import { useRouter } from "next/router.js";
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Layout from '../components/Layout'
import Editor from '../components/Editor';
import Context from '../utils/Context';
import { messageTypes } from '../components/Message';

export default function NewArticle() {
    const router = useRouter()
    const supabase = useSupabaseClient()
    const [content, setContent] = useState(null)
    const {setMessage} = useContext(Context)
    const user = useUser()

    useEffect(() => {
        if(!user){
            router.push('/login')
        }
    }, [])

    const onSubmit = async function (e) {
        e.preventDefault()
        const {error} = await supabase
            .from('articles')
            .insert([
                {
                    title: e.target.title.value,
                    content: content,
                    author: user.id
                },
            ], { returning: 'minimal' })

        if(error){
            console.log(error)
            setMessage({content: 'Could not send article', type: messageTypes.error})
            return
        }

        setMessage({content: 'Article sent', type: messageTypes.success})

        const {data, errorRetrieve} = await supabase
            .from('articles')
            .select('id')
            .eq('author', user.id)
            .eq('title', e.target.title.value)
            .eq('content', content)
            .order('created_at', {ascending: false})
            .limit(1)
            .single()

        if(errorRetrieve){
            console.log(errorRetrieve);
            router.push('/articles/')
            return
        }
        
        router.push(`/articles/${data.id}`)
    }

    return (
        <Layout>
            <Head>
                <title>New article</title>
                <meta name="description" content="new article"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="wt-title">
                Write a new article
            </h1>
            <Editor onSubmit={onSubmit} content={content} setContent={setContent}/>
        </Layout>
    )
}