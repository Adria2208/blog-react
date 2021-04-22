import React, { Component } from "react"
import FormComponent from './FormComponent'
import axios from "axios";

class FormContainer extends Component {

    state = {
        title: "",
        content: "",
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/blogs', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <FormComponent handleChange={this.handleChange} submitHandler={this.submitHandler} data={this.state} />
        )

    }
}

export default FormContainer
