import React, { useState, useEffect } from "react"
import UpdateComponent from './UpdateComponent'
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function UpdateContainer() {

    let { id } = useParams();
    const url = 'http://localhost:8000/api/blogs/' + id

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [pfp, setPfp] = useState('');

    const blog = {
        'title': title,
        'content': content,
        'pfp': pfp
    }

    const getBlog = () => {
        axios.get(url)
            .then(res => {
                console.log(res);
            })
    }

    useEffect(() => {
        getBlog()
    }, []);

    const handleChange = (event) => {
        const { value } = event.target

        if (event.target.name === 'title') {
            setTitle(value)
        } else if (event.target.name === 'content') {
            setContent(value)
        } else if (event.target.name === 'pfp') {
            setPfp(value)
        } else {
            console.log('Error de logica en el handleChange');
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.put(url, blog)
            .then(res => console.log(res.data));
    }

    return (
        <div>
            <UpdateComponent handleChange={handleChange} submitHandler={submitHandler} data={blog} />
        </div>
    )
}
