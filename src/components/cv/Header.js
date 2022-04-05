import React from "react";

export default function Header({ data }) {
  return (
    <header>
      <h1 className="name">{data.name}</h1>
      <h5 className="title">{data.title}</h5>
      <h3 className="about">About</h3>
      <span className="header-description">{data.description}</span>
    </header>
  );
}
