import React from "react"

function FormComponent(props) {
    return (
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
            <p>Your title: {props.data.title} </p>
            <p>Your content: {props.data.content}</p>
        </main>
    )
}

export default FormComponent