import React from 'react'

export default function Header(props) {
    return (
        <header>
            <h1 className="name">{props.data.name}</h1>
            <span className="header-description">{props.data.description}</span>
        </header>
    )
}