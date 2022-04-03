import React from 'react';

export default function Contact(props) {
    return (
        <section className="contact-section">
            <span className="phone-number">{props.data.phone}</span>
            <span className="address">{props.data.location}</span>
            <span className="email">{props.data.email}</span>
            <span className="website">{props.data.website}</span>
        </section>
    )
}