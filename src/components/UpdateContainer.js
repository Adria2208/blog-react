import React, { useState, useEffect, useRef } from "react"
import UpdateComponent from './UpdateComponent'
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';

export default function UpdateContainer() {

    let { id } = useParams();
    const url = 'http://localhost:8000/api/blogs/' + id

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

    const getBlog = () => {
        axios.get(url)
            .then(res => {
                setTitle(res.data.title)
                setContent(res.data.content)
                setPfp(res.data.pfp)
                ref.current.switchPfp()
            })
    }

    useEffect(() => {
        getBlog()
    }, []);

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
            console.log('Error de logica en el handleChange');
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        
        axios.put(url, blog)
            .then(res => {
                history.push("/success");
            })
            .catch(error => {
                history.push("/error");
            });
    }

    return (
        <div>
            <UpdateComponent handleChange={handleChange} submitHandler={submitHandler} data={blog} ref={ref}/>
        </div>
    )
}
