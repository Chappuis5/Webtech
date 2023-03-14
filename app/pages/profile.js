import Head from "next/head";
import {useSupabaseClient, useUser} from '@supabase/auth-helpers-react'
import Layout from "../components/Layout";
import {logOut} from "../utils/LogOut";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Context from "../utils/Context";
import Gravatar from "../components/Gravatar";
import { AddIcon, LoadingIcon, PenIcon, CancelIcon } from "../utils/SvgIcons";
import Validation from "../components/Validation";
import { messageTypes } from "../components/Message";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import Comment from "../components/Comment";
import ArticleCard from "../components/ArticleCard";


export default function Profile({user}) {
    const supabase = useSupabaseClient()
    const {profile, fetchProfile, setMessage} = useContext(Context)
    const router = useRouter()
    const [colorSelected, setColorSelected] = useState(profile.accent_color)
    const [articles, setArticles] = useState(true)
    const [comments, setComments] = useState(true)

    useEffect(() => {
        if(!user){
            router.push('/login')
        }

        setColorSelected(profile.accent_color)

        fetchArticles()
        fetchComments()
    }, [user, profile])

    const fetchArticles = async () => {
        const {data,error} = await supabase
                .from('articles')
                .select('id, title, content, created_at, profiles(username, gravatar)')
                .eq('author', user.id)
                .order('created_at')

        if(error) {
            setArticles(null)
            console.log(error);
            setMessage({content: 'Could not fetch articles', type: messageTypes.error})
        } else {
            setArticles(data)
        }
    }

    const fetchComments = async () => {
        const {data,error} = await supabase
                .from('comments')
                .select('id, created_at, content, author, article, profiles(username, gravatar)')
                .eq('author', user.id)
                .order('created_at')

        if(error) {
            setComments(null)
            console.log(error);
            setMessage({content: 'Could not fetch comments', type: messageTypes.error})
        } else {
            setComments(data)
        }
    }

    useEffect(() => {
        ( async () => {
            const {data, error} = await supabase
                .from('comments')
                .select('*')
                .eq('author', user.id)

            if(error){
                console.log(error);
                setComments(null)
                setMessage({content: 'Could not fetch comments', type: messageTypes.error})
            } else {
                setComments(data)
            }
        })
    }, [comments])

    const updateMail = async (value) => {
        const {error} = await supabase.auth.updateUser({email: value})

        if(error){
            console.log(error)
            setMessage({content: 'Could not update email', type: messageTypes.error})
            return
        }

        setMessage({content: 'Check your inbox to update email', type: messageTypes.warning})
    }

    return (
        <Layout>
            <Head>
                <title>Your profile</title>
                <meta name="description" content="Profile"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Gravatar className="rounded-full mb-6 w-auto" gravatar={profile.gravatar} size={200}/>
            <h1 className={`wt-title`}>
                Welcome {profile.username}!
            </h1>
            <button className={`bg-${colorSelected + (colorSelected !== 'black' ? '-400' : '')} wt-button mt-4 hover:bg-${colorSelected + (colorSelected !== 'black' ? '-700' : '')}`} onClick={() => {
                logOut({supabase, router})
            }}>
                Logout
            </button>
            <div className="overflow-x-auto relative mt-8 mb-8">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className={`text-xs text-gray-700 uppercase bg-${colorSelected}-100 dark:bg-gray-700 dark:text-gray-400`}>
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Setting
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProfileColumn title="Username" value={profile.username} table="profiles" column="username" callback={() => fetchProfile()}/>
                        <ProfileColumn title="Full name" value={profile.fullname} table="profiles" column="fullname" callback={() => fetchProfile()}/>
                        <ProfileColumn title="Email" value={user.email} onChange={updateMail}/>
                        <ProfileColumn title="Website" value={profile.website} table="profiles" column="website" callback={() => fetchProfile()}/>
                        <ColumnSkeleton title="Accent color">
                            <AccentColor color="blue" colorSelected={colorSelected} setColorSelected={setColorSelected}/>
                            <AccentColor color="green" colorSelected={colorSelected} setColorSelected={setColorSelected}/>
                            <AccentColor color="red" colorSelected={colorSelected} setColorSelected={setColorSelected}/>
                            <AccentColor color="yellow" colorSelected={colorSelected} setColorSelected={setColorSelected}/>
                            <AccentColor color="purple" colorSelected={colorSelected} setColorSelected={setColorSelected}/>
                        </ColumnSkeleton>
                        <ColumnSkeleton title="Background image">
                            <RandomImage colorSelected={colorSelected} images={['ethereal1.png', 'ethereal2.png', 'ethereal3.png', 'ethereal4.png', 'ethereal5.png', 'ethereal6.png', 'ethereal7.png', 'ethereal8.png', 'ethereal9.png', 'ethereal10.png' ] }/>
                        </ColumnSkeleton>
                    </tbody>
                </table>
            </div>
            <h1 className="wt-subtitle dark:text-white">Articles</h1>
            <div className="wt-grid mb-4">
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
            <h1 className="wt-subtitle dark:text-white">Comments</h1>
            <div className="wt-card">
                {
                    comments ?
                        comments === true ?
                            <LoadingIcon/>
                        :
                            comments.length > 0 ?
                                comments.map(comment => (
                                    <Link key={comment.id} href={`/articles/${comment.article}`}>
                                        <Comment comment={comment}/>
                                    </Link>
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
function AccentColor({color, colorSelected, setColorSelected}){
    const supabase = useSupabaseClient()
    const user = useUser()
    const {setMessage, fetchProfile} = useContext(Context)    

    const update = async () => {
        if(colorSelected === color) return

        const {error} = await supabase
            .from('profiles')
            .update([
                {
                    accent_color: color,
                },
            ])
            .eq('id', user.id)

        if(error){
            console.log(error)
            setMessage({content: 'Could not update accent color', type: messageTypes.error})
            return
        }

        setColorSelected(color)
        setMessage({content: 'Accent color updated', type: messageTypes.success})
        fetchProfile()
        document.documentElement.style.setProperty('--accent-color', colorSelected);

    }

    return (
        <button type="button" className={`bg-${color + (color !== 'black' ? '-400' : '')} ring-${colorSelected + (colorSelected !== 'black' ? '-700' : '')} m-2 hover:ring-2 rounded-full p-2`} onClick={() => update()}>
            <svg visibility={colorSelected === color ? "visible" : "hidden"} className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
        </button>
    )
}
  

  function RandomImage({ images, colorSelected }) {
    const update = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        document.body.style.backgroundImage = `url(/images/ethereal${randomNumber}.png)`;
        document.body.style.backgroundSize = 'cover';
    }

    const clearBackground = () => {
        document.body.style.backgroundImage = '';
    }
  
    return (
        <div className="flex flex-row">
            <button
              type="button"
              className={`mr-auto bg-${colorSelected + (colorSelected !== 'black' ? '-400' : '')} wt-button mt-4 hover:bg-${colorSelected + (colorSelected !== 'black' ? '-700' : '')}`}
              onClick={() => update()}
            >
              Random Image
            </button>
            <button onClick={clearBackground}>
                <CancelIcon className="ml-auto"/>
            </button>
        </div>
    )
  }
  

   
function ProfileColumn({title, value, table, column, callback, onChange}) {
    const [editing, setEditing] = useState(false)
    const {setMessage, profile} = useContext(Context)
    const user = useUser()
    const supabase = useSupabaseClient()

    const onSubmit = async function (e) {
        e.preventDefault()

        e.target.content.value = e.target.content.value.trim()

        if(value === e.target.content.value) {
            setEditing(false)
        }

        if(onChange) {
            onChange(e.target.content.value)
            setEditing(false)
            return
        }

        const {error} = await supabase
            .from(table)
            .update([
                {
                    [column]: e.target.content.value,
                },
            ])
            .eq('id', user.id)

        if(error){
            console.log(error)
            setMessage({content: 'Could not update profile', type: messageTypes.error})
            return
        }

        setMessage({content: 'Profile updated', type: messageTypes.success})
        value = e.target.content.value
        setEditing(false)
        callback()
    }

    return (
        <ColumnSkeleton title={title}>
            {
                editing ?
                <form onSubmit={onSubmit}>
                    <div>
                        <input className={`border border-${profile.accent_color}-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`} type="text" name="content" defaultValue={value}/>
                    </div>
                    <Validation onCancel={() => setEditing(false)}/>
                </form>
                :
                <div className="flex flex-row">
                    {value}
                    <button className="ml-auto" onClick={() => setEditing(true)}>
                        {
                            value ?
                            <PenIcon/>
                            :
                            <AddIcon/>
                        }
                    </button>
                </div>
            }
        </ColumnSkeleton>
    )
}

function ColumnSkeleton({title, children}){
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {title}
            </th>
            <td className="py-4 px-6">
                {children}
            </td>
        </tr>
    )
}

export async function getServerSideProps(ctx) {
    const supabase = createServerSupabaseClient(ctx)

    const {data: {user}, error} = await supabase.auth.getUser()

    if(error){
        console.log(error);
    }

    if(!user){
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    return {
        props: {
            user: user
        }
    }
}