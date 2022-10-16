import React from 'react'
import {useForm} from "react-hook-form"
import {useState} from "react"

function SignupForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // The input form responses are stored in the data variable as an object
    const {data, setData} = useState({});
    const onSubmit = (formData) => {
        console.log(formData); // an object of form Data
        setData(formData);
    }

    let input_names = ["Name", "Email", "Phone Number", "Size", "City, State"];

    return (
        <div>
            <div className="w-full box-border">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {input_names.map((value, index) => (
                        <input
                        name={value}
                        placeholder={value + "..."}
                        type="text"
                        className="login-textbox"
                        {...register('message',{required:true})}
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

export default SignupForm