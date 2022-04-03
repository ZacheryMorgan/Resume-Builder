import React from 'react';

export default function HeaderForm({ handleChange, id, }) {
    return (
        <form className='header-form'>
            <input type="text" name="name" id="header" placeholder='Full Name' onChange={(e) => handleChange(e, id)} />
            <input type="tel" name="phone" id="header" placeholder='Phone Number' onChange={(e) => handleChange(e, id)} />
            <input type="email" name="email" id="header" placeholder='Email' onChange={(e) => handleChange(e, id)} />
            <input type="text" name="address" id="header" placeholder='Address' onChange={(e) => handleChange(e, id)} />
            <input type="text" name="description" id="header" placeholder='Description' onChange={(e) => handleChange(e, id)} />
        </form>
    )
}