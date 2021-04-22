import { Link } from "react-router-dom";

function Blog(props) {
    return (
        
        <div className='c-blog'>
        {console.log(props)}
            <p className='c-blog__title'>{props.title}</p>
            <p className='c-blog__content'>{props.content}</p>

            <button className='c-button c-button--secondary--normal'>Update</button>
            <Link to={'/delete/' + props.id} className='c-button c-button--secondary--danger'>Delete</Link>
            <hr></hr>
        </div>
    )
}

export default Blog