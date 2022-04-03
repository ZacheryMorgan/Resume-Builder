import React from 'react';
import Duty from './Duty';

export default function Experience({ data, index, duties }) {
    // const dutyCurrent = duties[index].duties

    function convertDates(str) {
        var d = new Date(str);
        var day = d.getDate();
        var month = d.toString().split(' ')[1];
        var year = d.toString().split(' ')[3];
        return `${month}, ${year}`;
    }


    const dutiesElements = data.duties.map((duty, index) => {
        return <Duty data={duty} key={index} />
    }
    )
    return (
        <section className="experience">
            <p className="job">{data.job}</p>
            <div className="job-info">
                <span className="description">{`${data.description}`} </span><span className="dates">{convertDates(data.startDate)} - {convertDates(data.endDate)}</span>
            </div>
            {/* <p className="job">{data.job}</p>
            <p className="start-date">{data.startDate}</p>
            <p className="end-date">{data.endDate}</p> */}
            {/* <p className="description">{data.description}</p> */}
            <ul className="duty-list" key={data.duties.length}>
                {dutiesElements}
            </ul>
        </section>
    )
}

// <li className="duty-item">{duty}</li>