import React, { useState } from "react"
import FormComponent from './FormComponent'
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function FormContainer() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [pfp, setPfp] = useState('');

    const blog = {
        'title': title,
        'content': content,
        'pfp': pfp
    }

    let history = useHistory();

    const handleChange = (event) => {
        const { value } = event.target

        if (event.target.name === 'title') {
            setTitle(value)
        } else if (event.target.name === 'content') {
            setContent(value)
        } else if (event.target.name === 'pfp') {
            setPfp(value)
        } else {
            console.log('Error de logica en el handleChange de FormContainer.js');
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/blogs', blog)
            .then(response => {
                console.log(response);
                history.push("/success");
            })
            .catch(error => {
                console.log(error);
                history.push("/error");
            })
    }

    return (
        <FormComponent handleChange={handleChange} submitHandler={submitHandler} data={blog} />
    )

}
