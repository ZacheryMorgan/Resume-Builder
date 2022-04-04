import React from 'react';

export default function HeaderForm({ handleChange, id, data }) {
    return (
        <form className='header-form'>
            <input
                className='name'
                type="text"
                name="name"
                id="header"
                placeholder='Full Name'
                onChange={(e) => handleChange(e, id)}
                value={data.name}
            />
            <input
                className='title'
                type="text"
                name="title"
                id="header"
                placeholder='Title'
                onChange={(e) => handleChange(e, id)}
                value={data.title}
            />
            <input
                className='description'
                type="text"
                name="description"
                id="header"
                placeholder='Description'
                onChange={(e) => handleChange(e, id)}
                value={data.description}
            />
        </form>
    )
}