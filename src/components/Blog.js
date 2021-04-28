import React from 'react'

import { Link } from "react-router-dom";
import DefaultImg from "../imgs/default.png";
import CatImg from "../imgs/cat.jpg";
import DogImg from "../imgs/dog.jpg";

function Blog(props) {

    let pfp = ''

    const content = props.content.substring(0, 144) + '...'

    switch (props.pfp) {
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



    return (

        <div className='c-blog'>
            <div className='l-blog'>
                <div className='c-pfp'>
                    <img className='img-fluid' src={pfp} alt='pfp' />
                </div>
                <div>
                    <p className='c-blog__title'>{props.title}</p>
                    <p className='c-blog__content'>{content}</p>

                    <div className='l-buttons'>
                        <Link to={'/' + props.id} className='c-button c-button--primary--normal'>Ver</Link>
                        <Link to={'/update/' + props.id} className='c-button c-button--primary--alt'>Editar</Link>
                        <Link to={'/delete/' + props.id} className='c-button c-button--primary--danger'>Borrar</Link>
                    </div>

                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Blog