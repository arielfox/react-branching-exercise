import React from 'react'
import plates from "../../plates.jpg";

const Header = () => {
    return (
        <header className="App-header">
            <img src={plates} className="App-logo" alt="plates" />
            <h1>What to Eat</h1>
        </header>
    )
}

export default Header
