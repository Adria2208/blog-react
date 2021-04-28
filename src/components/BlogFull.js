import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import DefaultImg from "../imgs/default.png";
import CatImg from "../imgs/cat.jpg";
import DogImg from "../imgs/dog.jpg";


export default function BlogFull() {

    let { id } = useParams();

    const url = 'http://localhost:8000/api/blogs/' + id

    let pfp = ''

    const [blog, setBlog] = useState('')

    const getBlog = () => {
        axios.get(url)
            .then(res => {
                setBlog(res.data)
            })
    }

    switch (blog.pfp) {
        case 'cat':
            pfp = CatImg
            break
        case 'dog':
            pfp = DogImg
            break
        default:
            pfp = DefaultImg
            break
    }

    useEffect(() => {
        getBlog()
    }, []);


    return (

        <div className='c-blog'>
            <div className='l-blog--full'>

                <div>
                    <div className='l-blog__title'>
                        <div className='c-pfp'>
                            <img className='img-fluid' src={pfp} alt='pfp' />
                        </div>
                        <p className='c-blog__title'>{blog.title}</p>
                    </div>
                    
                    <p className='c-blog__content'>{blog.content}</p>
                    <div className='l-buttons'>
                        <Link to={'/'} className='c-button c-button--primary--normal'>Volver</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

