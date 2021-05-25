import {useState, useEffect,useReducer} from 'react'
import Character from './Character'
const initialState = {
    favorites:[]
}
const favoriteReducer = (state, action) =>{
    switch(action.type){
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites:[...state.favorites, action.payload]
            }
        default:
            return state
    }

}
const Characters = ()=>{
    
    const [characters, setCharacters] = useState([])
    const [favorites ,dispatch] = useReducer(favoriteReducer, initialState)
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            
            setCharacters(data.results)
            
        })
    },[])
    const handleClick = (favorite) =>{
        console.log(favorite)
        dispatch({type:"ADD_TO_FAVORITE", payload:favorite}) 
    }
    return(
        <div className="Characters">
            <h2 className="Characters-Title">Favorites</h2>
            <div className="Characters-Container">
                {favorites.favorites.map(item =><Character key={item.id} name={item.name} url={item.image} type="favorite" />)}
            </div>
            <h2 className="Characters-Title">Characters</h2>
            <div className="Characters-Container">
                {characters.map(item =><Character key={item.id} name={item.name} url={item.image} handleClick={()=> handleClick(item)} />)}
            </div>
        </div>
    ) 
}

export default Characters