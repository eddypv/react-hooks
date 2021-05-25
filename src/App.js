import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'
import ThemeContext from './context/ThemeContext'
import {useState} from 'react'
function App() {
  const [theme, setTheme] = useState("Ligth-Mode")
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`App ${theme}`}>
      <Header />
      <Characters />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
