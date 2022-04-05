import React from "react";

export default function Education({ data }) {
  return (
    <section className="education">
      <div className="school-info">
        <span className="school-name">{data.school}</span>
        <span className="attended">
          {data.startDate}-{data.endDate}
        </span>
      </div>
      <span className="degree">{data.degree}</span>
    </section>
  );
}
