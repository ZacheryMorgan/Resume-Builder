import React from "react";
import Duty from "./Duty";

export default function Experience({ data }) {
  function convertDates(str) {
    var d = new Date(str);
    var month = d.toString().split(" ")[1];
    var year = d.toString().split(" ")[3];
    return `${month}, ${year}`;
  }

  const dutiesElements = data.duties.map((duty, index) => {
    return <Duty data={duty} key={index} />;
  });
  return (
    <section className="experience">
      <p className="job">{data.job}</p>
      <div className="job-info">
        <span className="description">{`${data.description}`} </span>
        <span className="dates">
          {convertDates(data.startDate)} - {convertDates(data.endDate)}
        </span>
      </div>
      <ul className="duty-list" key={data.duties.length}>
        {dutiesElements}
      </ul>
    </section>
  );
}
