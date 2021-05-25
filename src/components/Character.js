const Character  = ({name, url})=> {
    return (
        <div className="Character">
            <img src={url}  alt={name}/>
            <p className="Character-Title">{name}</p>
        </div>
    )
} 
export default Character