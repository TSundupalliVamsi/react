import { useState } from 'react'
import Parent from './Components/Parent'
import './App.css'
import { ThemeContext } from './ThemeContext'
import Reducer from './Components/Reducer'

function App() {

  const [theme, setTheme] = useState("light");

  return (
      // <ThemeContext.Provider value={{ theme, setTheme }}>
      //   <div className="container mt-5">
      //     <h1 className="mb-4">React useContext + Bootstrap Example</h1>
      //     <Parent />
      //   </div>
      // </ThemeContext.Provider>
      <Reducer />
  )
}

export default App
