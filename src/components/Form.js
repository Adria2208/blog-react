import React, { useState } from 'react'
import firebase from "../firebase"

export default function Form() {

    const [title, setTitle] = useState('')

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const create = () => {
        const Ref = firebase.database().ref('Ref')
        const item = {
            title
        }
        Ref.push(item)
    }



    return (
        <div>
            <h1>Title</h1>
            <input type='text' onChange={handleOnChange} value={title}/>
            <button onClick={create}>Button</button>
        </div>
    )
}
