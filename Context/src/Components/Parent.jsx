import { useContext } from 'react'
import Child from './Child';
import { ThemeContext } from '../ThemeContext'

const Parent = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const parentClass =
        theme === "light" ? "card bg-light text-dark" : "card bg-dark text-light";

    return (
        <div className={parentClass + " p-3 mb-3"}>
            <h2>Parent Component</h2>
            <p>Current Theme: {theme}</p>
            <button
                className="btn btn-primary mb-3"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
            <Child />
        </div>
    )
}

export default Parent
