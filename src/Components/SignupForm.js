import React from 'react'
import {useForm} from "react-hook-form"
import {useState} from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';

function SignupForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // The input form responses are stored in the data variable as an object
    const [data, setData] = useState({});
    const onSubmit = (formData) => {
        console.log(formData); // an object of form Data
        setData(formData);

        createUserWithEmailAndPassword(auth, formData.Email, formData.Password)
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

    let input_names = ["Name", "Email", "Password", "Phone Number", "Size", "City, State"];

    return (
        <div>
            <div className="w-full box-border">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {input_names.map((value, index) => (
                        <input
                        name={value}
                        key={index}
                        placeholder={value + "..."}
                        type="text"
                        className="login-textbox"
                        {...register(value,{required:true})}
                        />
                    ))}

                    <div className="flex justify-end">
                        <button type="submit" className="mt-4 px-4 py-2 bg-white hover:bg-cyan-100 border-2 border-cyan-500 rounded-lg duration-200">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm