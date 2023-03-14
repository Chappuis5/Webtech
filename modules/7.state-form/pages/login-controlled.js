import { useState } from 'react'

export default function LoginControlled() {
    const [data, setData] = useState({})
    const onSubmit = function(e) {
        e.preventDefault()
        console.log(data)
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>My form</h2>
            <div>
                <input type="text" name="username" value={data.username} onChange={e => setData({...data, ...{username: e.target.value}})}/>
                <input type="text" name="password" value={data.password} onChange={e => setData({...data, ...{password: e.target.value}})}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}