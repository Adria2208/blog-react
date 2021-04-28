import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

export default function Delete() {
    const [blog, setBlog] = useState([]);

    let { id } = useParams();
    let history = useHistory();

    const url = 'http://localhost:8000/api/blogs/' + id

    const getBlog = () => {
        axios.get(url)
            .then(res => {
                const blog = res.data;
                setBlog(blog)
            })
    }

    useEffect(() => {
        getBlog()
    }, []);

    const deleteBlog = () => {
        axios
            .delete(url)
            .catch(err => {
                history.push("/error");
            });
        history.push("/success");
    }

    return (
        <div>
            <div className='l-delete'>
                <h1>¿Seguro que quieres borrar el blog "{blog.title}"? </h1>
                <div className='l-buttons'>
                    <a href='/' className='c-button c-button--primary--alt'>No</a>
                    <button className='c-button c-button--primary--danger' onClick={deleteBlog}>Si</button>
                </div>
            </div>
        </div>
    )
}


