import React from 'react';

export default function ContactForm(props) {
    return (
        <div className="contact-form-wrapper">
            <form action="" className="contact-form">
            <input type="text" name="location" id="contact" placeholder='Address' onChange={(e) => props.onChange(e, props.data.id)} />
            <input type="tel" name="phone" id="contact" placeholder='Phone Number' onChange={(e) => props.onChange(e, props.data.id)} />
            <input type="email" name="email" id="contact" placeholder='Email' onChange={(e) => props.onChange(e, props.data.id)} />
            <input type="url" name="website" id="contact" placeholder="Website" onChange={(e) => props.onChange(e, props.data.id)}/>
            </form>
        </div>
    )
}