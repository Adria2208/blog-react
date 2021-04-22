import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/FormContainer";
import Update from "./components/UpdateContainer";
import Delete from "./components/Delete";

import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    fetch("http://localhost:8000/api/blogs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      const blogComponents = items.map(blog => <Blog key={blog.id} id={blog.id} title={blog.title} content={blog.content} />)

      return (
        <Router>
          <Navbar />
          <Switch>
            <Route path='/form' component={Form} />
            <Route path='/delete/:id' component={Delete}/>
            <Route path='/update/:id' component={Update} />
            {/* Importante que esta ruta se quede al final del Switch */}
            <Route path='/' render={(props) => <Home {...props} blogComponents={blogComponents} />} />
          </Switch>
        </Router>
      )
    }

  }
}
export default App
