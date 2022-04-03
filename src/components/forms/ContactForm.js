import React from 'react';

export default function ContactForm({data, onChange}) {
    return (
        <div className="contact-form-wrapper">
            <form action="" className="contact-form">
            <input type="text" name="location" id="contact" placeholder='Address' onChange={(e) => onChange(e, data.id)}  value={data.location}/>
            <input type="tel" name="phone" id="contact" placeholder='Phone Number' onChange={(e) => onChange(e, data.id)}  value={data.phone}/>
            <input type="email" name="email" id="contact" placeholder='Email' onChange={(e) => onChange(e, data.id)}  value={data.email}/>
            <input type="url" name="website" id="contact" placeholder="Website" onChange={(e) => onChange(e, data.id)} value={data.website}/>
            </form>
        </div>
    )
}