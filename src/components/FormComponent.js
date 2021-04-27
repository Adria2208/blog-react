import React, { useState, forwardRef, useImperativeHandle } from "react"
import { Link } from "react-router-dom";

import DefaultImg from "../imgs/default.png";
import CatImg from "../imgs/cat.jpg";
import DogImg from "../imgs/dog.jpg";

const FormComponent = forwardRef((props, ref) => {

    const [pfp, setPfp] = useState('default')
    
    useImperativeHandle(ref,() => ({switchPfp}))
    
    const switchPfp = () => {

        switch (props.data.pfp) {
            case "cat":
                setPfp(CatImg)
                break;
            case "dog":
                setPfp(DogImg)
                break;
            default:
                setPfp(DefaultImg)
                break;
        }
    }

    return (
        <main>
            <form onSubmit={props.submitHandler}>
                <input
                    name="title"
                    value={props.data.title}
                    onChange={props.handleChange}
                    placeholder="Title"
                />
                

                <input
                    name="content"
                    value={props.data.content}
                    onChange={props.handleChange}
                    placeholder="Content"
                />
                <select
                    name="pfp"
                    value={props.data.pfp}
                    onChange={props.handleChange}
                >
                    <option value="default">-- Please Choose a profile picture --</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                </select>
                <div className='c-pfp'>
                        <img className='img-fluid' src={pfp} alt='pfp' />
                    </div>
                
                <Link className="c-button c-button--secondary--alt" to='/'>Cancelar</Link>
                <button className='c-button c-button--secondary--normal'>Subir</button>
            </form>
        </main>
    )
})

export default FormComponent