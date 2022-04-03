import React from 'react'

export default function Header({data}) {
    return (
        <header>
            <h1 className="name">{data.name}</h1>
            <h3 className="title">{data.title}</h3>
            <span className="header-description">{data.description}</span>
        </header>
    )
}