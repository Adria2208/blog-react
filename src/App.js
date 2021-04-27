import React, { useState, useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";

import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/FormContainer";
import Update from "./components/UpdateContainer";
import Delete from "./components/Delete";
import Success from "./components/Success";
import Error from "./components/Error";

import "./App.css";


export default function App() {

    const [blogs, setBlogs] = useState([]);

    const url = 'http://localhost:8000/api/blogs/'

    const getBlogs = () => {
        axios.get(url)
            .then(res => {
                setBlogs(res.data)
            })
    }

    useEffect(() => {
        getBlogs()
    }, []);

    const blogComponents = blogs.map(blog => <Blog key={blog.id} id={blog.id} title={blog.title} content={blog.content} pfp={blog.pfp} />)

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/form' component={Form} />
                <Route path='/delete/:id' component={Delete} />
                <Route path='/update/:id' component={Update} />
                <Route path='/success' component={Success} />
                <Route path='/error' component={Error} />
                {/* Importante que esta ruta se quede al final del Switch */}
                <Route path='/' render={(props) => <Home {...props} blogComponents={blogComponents} />} />
            </Switch>
        </Router>
    )
}


