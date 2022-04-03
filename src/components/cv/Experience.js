import React from 'react';
import Duty from './Duty';

export default function Experience({ data, index, duties }) {
    // const dutyCurrent = duties[index].duties


    const dutiesElements = data.duties.map((duty, index) => {
        return <Duty data={duty} key={index}/>
    }
    )
    return (
        <section className="experience">
            <h3 className="job">{data.job}</h3>
            <p className="date">{data.date}</p>
            <p className="description">{data.description}</p>
            {/* <p className="duties">{data.duties}</p> */}
            <ul className="duty-list" key={data.duties.length}>
                {dutiesElements}
            </ul>
        </section>
    )
}

// <li className="duty-item">{duty}</li>