import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const GrandChild = () => {

    const {theme} = useContext(ThemeContext);
    
    const grandChildClass =
    theme === "light" ? "card bg-white text-dark" : "card bg-secondary text-light";

  return (
    <div className={grandChildClass + " p-3 mt-3"}>
      <p>GrandChild sees the theme: {theme}</p>
    </div>
  )
}

export default GrandChild
