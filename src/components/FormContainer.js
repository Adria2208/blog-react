import React, { useState, useEffect, useRef } from "react"
import FormComponent from './FormComponent'
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function FormContainer() {

    const ref = useRef();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [pfp, setPfp] = useState('default');

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
            blog.title = (value)
        } else if (event.target.name === 'content') {
            setContent(value)
            blog.content = (value)
        } else if (event.target.name === 'pfp') {
            setPfp(value)
            blog.pfp = (value)
            ref.current.switchPfp()
        } else {
            console.log('Error de logica en el handleChange de FormContainer.js');
        }
    }

    useEffect(() => {
        ref.current.switchPfp()
    }, [])

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/blogs', blog)
            .then(response => {
                history.push("/success");
            })
            .catch(error => {
                history.push("/error");
            })
    }

    return (
        <FormComponent handleChange={handleChange} submitHandler={submitHandler} data={blog} ref={ref}/>
    )

}
