import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Link } from "react-router-dom";

import DefaultImg from "../imgs/default.png";
import CatImg from "../imgs/cat.jpg";
import DogImg from "../imgs/dog.jpg";

const UpdateComponent = forwardRef((props, ref) => {

    const [pfp, setPfp] = useState('default')

    useImperativeHandle(ref, () => ({ switchPfp }))

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
        <div>
            <main>
                <form className='c-form' onSubmit={props.submitHandler}>
                    <div className='l-form'>
                        <h1 className='c-form__h1'>Actualiza los datos</h1>
                        <input
                            className='c-form__title'

                            name="title"
                            value={props.data.title}
                            onChange={props.handleChange}
                            placeholder="Titulo"
                        />
                        <textarea
                            className='c-form__content'

                            name="content"
                            value={props.data.content}
                            onChange={props.handleChange}
                            placeholder="Contenido"

                        />
                        <div className='l-form__pfp'>
                            <select
                                className='c-form__pfp'

                                value={props.data.pfp}
                                name="pfp"
                                onChange={props.handleChange}
                            >
                                <option value="default">-- Por favor escoje una foto de perfil --</option>
                                <option value="cat">Gato</option>
                                <option value="dog">Perro</option>
                            </select>
                            <div className='c-pfp'>
                                <img className='img-fluid' src={pfp} alt='pfp' />
                            </div>
                        </div>
                        <div className='l-buttons'>
                            <Link className="c-button c-button--secondary--alt" to='/'>Cancelar</Link>
                            <button className='c-button c-button--secondary--normal'>Confirmar</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
})

export default UpdateComponent