import {useState, useContext, useEffect} from 'react';
import ThemeContext from '../context/ThemeContext'
const Header = ()=>{
    const {theme, setTheme} = useContext(ThemeContext)
    const [darkMode, setDarkMode] = useState(false)
    useEffect(()=>{
        if(theme === "Ligth-Mode"){
            setDarkMode(false)
        }else{
            setDarkMode(true)
        }
    },[theme])
    
    const handleClick = () =>{
        const changeDarkMode = !darkMode 
        if(changeDarkMode){
            setTheme("Dark-Mode")
        }else{
            setTheme("Ligth-Mode")
        }
        setDarkMode(changeDarkMode)
         
    }
    
    return(
        <div className="Header">
            <h1 className="Header-Title">React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? "Ligth":"Dark" } Mode</button>
        </div>
    )
}
export default Header;