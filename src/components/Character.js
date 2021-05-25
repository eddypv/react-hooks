const Character  = ({name, url,type="normal", handleClick})=> {
    return (
        <div className="Character">
            <img src={url}  alt={name}/>
            <p className="Character-Title">{name}</p>
            {   type ==="normal" 
                ? <button onClick= {handleClick} type="button">Add Favorite</button>
                :null
            }
            
        </div>
    )
} 
export default Character