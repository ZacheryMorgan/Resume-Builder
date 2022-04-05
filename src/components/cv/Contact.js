import React from "react";

export default function Contact(props) {
  return (
    <section className="contact-section">
      <h3 className="contact">Contact</h3>
      <span className="phone-number">{props.data.phone}</span>
      <span className="address">{props.data.location}</span>
      <span className="email">{props.data.email}</span>
      <span className="website">{props.data.website}</span>
    </section>
  );
}
