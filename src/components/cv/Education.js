import React from 'react';

export default function Education({data}) {
    return (
        <section className="education">
            <h3 className="school-name">{data.school}</h3>
            <span className="attended">{data.startDate}-{data.endDate}</span>
            <span className="degree">{data.degree}</span>
        </section>
    )
}