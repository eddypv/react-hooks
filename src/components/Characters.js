import {useState, useEffect} from 'react'
import Character from './Character'
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
            <h2 className="Characters-Title">Characters</h2>
            <div className="Characters-Container">
                {characters.map(item =><Character key={item.id} name={item.name} url={item.image} />)}
            </div>
        </div>
    ) 
}

export default Characters