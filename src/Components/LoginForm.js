import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../App';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

function LoginForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // The input form responses are stored in the data variable as an object
    const [data, setData] = useState({});
    const onSubmit = (formData) => {
        console.log(formData); // an object of form Data
        setData(formData);

        signInWithEmailAndPassword(auth, formData.Email, formData.Password)
        .then((userCredential) => {
            // Signed in 
            console.log("sup")
            const user = userCredential.user;
            navigate("/");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            console.log(data.Email);
            console.log(data.Password);
        });
    }

    const navigate = useNavigate();

    let input_names = ["Email", "Password"];

    return (
        <div>
            <div className="w-full box-border">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {input_names.map((value, index) => (
                        <input
                        name={value}
                        key={index}
                        placeholder={value + "..."}
                        type={value.toLowerCase()}
                        className="login-textbox"
                        {...register(value,{required:true})}
                        />
                    ))}

                    <div className="flex justify-end">
                        <button type="submit" className="mt-4 px-4 py-2 bg-white hover:bg-cyan-100 border-2 border-cyan-500 rounded-lg duration-200">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm