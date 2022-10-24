const Card = (props) => {
    const {title, bio, textButton} = props;
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{bio}</p>
            <button>{textButton}</button>
        </div>
    )
}

export default Card;