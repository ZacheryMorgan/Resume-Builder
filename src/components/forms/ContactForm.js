import React from "react";

export default function ContactForm({ data, onChange }) {
  return (
    <form action="" className="contact-form">
      <input
        className="location"
        type="text"
        name="location"
        id="contact"
        placeholder="Address"
        onChange={(e) => onChange(e, data.id)}
        value={data.location}
      />
      <input
        className="phone"
        type="tel"
        name="phone"
        id="contact"
        placeholder="Phone Number"
        onChange={(e) => onChange(e, data.id)}
        value={data.phone}
      />
      <input
        className="email"
        type="email"
        name="email"
        id="contact"
        placeholder="Email"
        onChange={(e) => onChange(e, data.id)}
        value={data.email}
      />
      <input
        className="website"
        type="url"
        name="website"
        id="contact"
        placeholder="Website"
        onChange={(e) => onChange(e, data.id)}
        value={data.website}
      />
    </form>
  );
}
