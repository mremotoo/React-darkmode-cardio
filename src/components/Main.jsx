import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">Playing with dark mode</h1>
            <ul className="main--facts">
                <li>I built this with React + Vite</li>
                <li>Playing around with State, Props</li>
                <li>Also with useEffect</li>
                <li>Really enjoying bulding this</li>
                <li>Hope you like it!</li>
            </ul>
        </main>
    )
}