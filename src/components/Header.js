import {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext'
const Header = ()=>{
    const [darkMode, setDarkMode] = useState(false)
    const color = useContext(ThemeContext)
    const handleClick = () =>{
        setDarkMode(!darkMode)
    }
    
    return(
        <div className="Header">
            <h1 style={{color:color}}>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? "Dark":"Ligth" } Mode</button>
        </div>
    )
}
export default Header;