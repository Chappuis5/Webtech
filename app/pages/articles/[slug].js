import Head from 'next/head'
import Layout from "../../components/Layout";
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Comment from '../../components/Comment';
import Context from '../../utils/Context';
import {messageTypes} from '../../components/Message';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import Validation from '../../components/Validation';
import { PenIcon, TrashIcon } from '../../utils/SvgIcons';
import { LoadingIcon } from '../../utils/SvgIcons';

const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);


export default function Article({article}) {
    const user = useUser()
    const router = useRouter()
    const [comments, setComments] = useState(true)
    const {setMessage, darkMode} = useContext(Context)
    const supabase = useSupabaseClient()

    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = async () => {
        const {data,error} = await supabase
                .from('comments')
                .select('id, created_at, content, author, profiles(username, gravatar)')
                .eq('article', article.id)
                .order('created_at')

        if(error) {
            setComments(null)
            console.log(error);
            setMessage({content: 'Could not fetch comments', type: messageTypes.error})
        } else {
            setComments(data)
        }
    }

    const submitComment = async function (e) {
        e.preventDefault()

        e.target.content.value = e.target.content.value.trim()

        if(e.target.content.value === ''){
            setMessage({content: 'Comment can not be empty', type: messageTypes.warning})
            return
        }

        const {error} = await supabase
            .from('comments')
            .insert([
                {
                    content: e.target.content.value,
                    author: user.id,
                    article: article.id
                },
            ], { returning: 'minimal' })

        if(error){
            console.log(error)
            setMessage({content: 'Could not submit comment', type: messageTypes.error})
        } else {
            e.target.content.value = ''
            setMessage({content: 'Comment sent', type: messageTypes.success})
        }

        fetchComments()
    }

    const deleteArticle = async (permanent) => {
        const {error} = await supabase
            .from('comments')
            .delete()
            .eq('article', article.id)

        if(error){
            console.log(error);
            setMessage({content: permanent ? 'Could not delete article' : 'Could not move article to draft', type: messageTypes.error})

        } else if(permanent){
            const {error} = await supabase
            .from('articles')
            .delete()
            .eq('id', article.id)

            if(error){
                console.log(error)
                setMessage({content: 'Could not delete article', type: messageTypes.error})
            } else {
                setMessage({content: 'Article deleted', type: messageTypes.success})
                router.push('/articles/')
            }
        } else {
            const {error} = await supabase
            .from('articles')
            .update({draft: true})
            .eq('id', article.id)
            if(error){
                console.log(error)
                setMessage({content: 'Could not move article to drafts', type: messageTypes.error})
            } else {
                setMessage({content: 'Article moved to drafts', type: messageTypes.success})
                router.push('/articles/')
            }
        }
    }

    const submitTrash = () => {
        confirmAlert ({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this article?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteArticle(true)
                },
                {
                    label: 'Move it to drafts',
                    onClick: () => deleteArticle(false)
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            keyCodeForClose: [8, 32]
        })
    }

    if(!article){
        return(
            <Layout>
                <Head>
                    <title>Article</title>
                    <meta name="description" content="Article"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <p>Error loading article</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <Head>
                <title>Article</title>
                <meta name="description" content="Article"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="wt-title">
                {article.title}
            </h1>
            {
                user && user.id === article.author ?
                <div className="flex mt-4 p-3 rounded dark:bg-white">
                    <Link href={`/articles/edit/${article.id}`} className="group flex items-center">
                        <PenIcon/>
                        <span className="ml-2">Edit</span>
                    </Link>
                    <button onClick={submitTrash} className="group flex items-center ml-4">
                        <TrashIcon/>
                        <span className="ml-2">Delete</span>
                    </button>
                </div>
                :
                <></>
            }
            <div className='w-1/2 border border-black rounded-xl dark:border-white m-8'>
                <div className="wt-description m-8" data-color-mode={darkMode ? "dark" : "light"}>
                    <MarkdownPreview source={article.content}/>
                </div>
            </div>
            <footer className='dark:text-white'>
                {article.profiles.username} - {new Date(article.created_at).toLocaleDateString()}
            </footer>
            {
                user ?
                <form className="m-4" onSubmit={submitComment}>
                    <h2 className='wt-subtitle m-2 dark:text-white'>
                        Add a comment
                    </h2>
                    <div className='mt-4'>
                        <textarea className="border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none dark:bg-black dark:text-white dark:border-white" name="content"/>
                    </div>
                    <Validation/>
                </form>
                :
                <></>
            }
            <div className="mt-4">
                <h2 className="wt-subtitle dark:text-white">
                    Comments
                </h2>
                {
                comments ?
                    comments === true ?
                        <LoadingIcon/>
                    :
                        comments.length > 0 ?
                            comments.map(comment => (
                                <Comment key={comment.id} comment={comment} editable={user && user.id === comment.author} callback={fetchComments}/>
                            ))
                        :
                            <p>So empty !</p>
                :
                    <p>Error fetching comments</p>
                }
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const supabase = createServerSupabaseClient(ctx)

    const {data, error} = await supabase
            .from('articles')
            .select('id, created_at, title, content, author, profiles(username)')
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