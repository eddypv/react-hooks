import {useState, useEffect} from 'react'
const Characters = ()=>{
    
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setCharacters(data.results)
            
        })
    },[])
    return(
        <div className="Characters">
            <h2>Characters</h2>
            {characters.map(item =>{ return <p>{item.name}</p>})}
        </div>
    ) 
}

export default Characters