import React from 'react'

export default function UpdateComponent(props) {
    return (
        <div>
            <h1>Actualiza los datos</h1>
            <main>
            <form onSubmit={props.submitHandler}>
                <input
                    name="title"
                    value={props.data.title}
                    onChange={props.handleChange}
                    placeholder="Title"
                />
                <br />

                <input
                    name="content"
                    value={props.data.content}
                    onChange={props.handleChange}
                    placeholder="Content"
                />
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your title: {props.title} </p>
            <p>Your content: {props.content}</p>
        </main>
        </div>
    )
}
