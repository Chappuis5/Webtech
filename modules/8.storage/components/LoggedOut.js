import Context from "./UserContext";
import {useContext} from "react";

export default function LoggedOut() {
    const {login} = useContext(Context)

    const onClickLogin = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/profile/' + e.target.username.value)
        const user = await response.json()
        login(user)
    }

    return (
        <form onSubmit={onClickLogin}>
            <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Sign in
                </button>
            </div>
        </form>
    )
}