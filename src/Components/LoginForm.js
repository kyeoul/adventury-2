import React, { useState } from 'react'

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function changeUsernameHandler(event){
        setUsername(event.target.value)
    }

    function changePasswordHandler(event){
        setPassword(event.target.value)
    }

    return (
        <div className="w-full box-border">
            <form>
                <input type="text" value={username} onChange={changeUsernameHandler} className="h-12 w-full p-2" placeholder="Username"></input>

                <input type="text" value={password} onChange={changePasswordHandler} className="h-12 w-full p-2 mt-2" placeholder="Password"></input>

                <div className="flex justify-end">
                    <button type="submit" className="mt-4 px-4 py-2 bg-white hover:bg-cyan-100 border-2 border-cyan-500 rounded-lg duration-200">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm