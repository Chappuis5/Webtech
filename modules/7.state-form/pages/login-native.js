export default function LoginNative(){

    const onSubmit = function(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(data)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>My form</h2>
            <input type="text" name="username"/>
            <input type="text" name="password"/>
            <button type="submit">Submit</button>
        </form>
    )
}