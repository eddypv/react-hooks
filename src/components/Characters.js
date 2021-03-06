import {useState, useEffect,useReducer, useMemo, useRef, useCallback} from 'react'
import Character from './Character'
import Search from './Search'
import useCharacters from '../hooks/useCharacters'

const API = 'https://rickandmortyapi.com/api/character/'
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
    
    const [favorites ,dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null);
    const characters = useCharacters(API)
    
    const handleClick = (favorite) =>{
        console.log(favorite)
        dispatch({type:"ADD_TO_FAVORITE", payload:favorite}) 
    }

    const handleOnChange = useCallback(
        ()=>{
            setSearch(searchInput.current.value)
        },[]
    )
        
    const filteredCharacteres = useMemo(
        ()=>{
            return characters.filter((item)=> item.name.toLowerCase().includes(search.toLocaleLowerCase()))
        },
        [characters,search]
    )
    return(
        <div className="Characters">
            <h2 className="Characters-Title">Favorites</h2>
            <div className="Characters-Container">
                {favorites.favorites.map(item =><Character key={item.id} name={item.name} url={item.image} type="favorite" />)}
            </div>
            <Search search={search} searchInput={searchInput} handleOnChange={handleOnChange}/>
            <h2 className="Characters-Title">Characters</h2>
            <div className="Characters-Container">
                {filteredCharacteres.map(item =><Character key={item.id} name={item.name} url={item.image} handleClick={()=> handleClick(item)} />)}
            </div>
        </div>
    ) 
}

export default Characters