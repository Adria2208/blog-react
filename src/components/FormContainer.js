import React, { useState } from "react"
import FormComponent from './FormComponent'
import axios from "axios";

export default function FormContainer2() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const blog = {
        'title': title,
        'content': content
    }

    const handleChange = (event) => {
        const { value } = event.target

        if (event.target.name === 'title') {
            setTitle(value)
        } else if (event.target.name === 'content') {
            setContent(value)
        } else {
            console.log('Error de logica en el handleChange');
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/blogs', blog)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <FormComponent handleChange={handleChange} submitHandler={submitHandler} data={blog} />
    )

}