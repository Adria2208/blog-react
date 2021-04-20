function Blog(props) {
    return (
        <div>
            <p>Title: {props.title}</p>
            <p>Content: {props.content}</p>
            <hr></hr>
        </div>
    )
}

export default Blog