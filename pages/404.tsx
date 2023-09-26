import React from 'react'

export default function NotFound() {
    return (
        <div className='menu'>
            <h1 className='headerText'>Stránka nenalezena</h1>
            <div className="centerChoice">
                <button onClick={() => open("/")}>Vrátit se na hlavní obrazovku</button>
                <p>nebo</p>
                <button onClick={() => open("/menu")}>Podívej se na naše menu</button>
            </div>
        </div>
    )
}
