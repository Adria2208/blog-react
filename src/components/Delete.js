import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Delete() {
    const [blog, setBlog] = useState([]);

    let { id } = useParams();

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
                console.log(err);
            });
    }

    return (
        <div>
            {console.log(blog)}
            <h1>¿Seguro que quieres borrar el blog {blog.title}? </h1>
            <button className='c-button c-button--primary--normal'>No</button>
            <button className='c-button c-button--primary--danger' onClick={deleteBlog}>Si</button>
        </div>
    )
}


