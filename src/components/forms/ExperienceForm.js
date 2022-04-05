import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function ExperienceForm({
  data,
  index,
  onChange,
  addInput,
  id,
  removeInput,
}) {
  const dutiesElements = data.duties.map((duty, dutyIndex) => {
    return (
      <div className="duties-form-wrapper" key={dutyIndex}>
        <form action="" className="duties-form">
          <input
            type="text"
            name="duty"
            id="duty"
            onChange={(e) => onChange(e, id, dutyIndex)}
            value={duty}
          />
        </form>
        <div onClick={(e) => removeInput(e, id, dutyIndex)}>
          <RiDeleteBinLine id="remove-duty" className="remove-duty remove" />
        </div>
      </div>
    );
  });

  return (
    <div className="experience-form-wrapper">
      <form className="experience-form">
        <div className="experience-job">
          <input
            className="job"
            type="text"
            name="job"
            id="experience"
            placeholder="Job Name"
            onChange={(e) => onChange(e, id)}
            value={data.job}
          />
          <input
            className="description"
            type="text"
            name="description"
            id="experience"
            placeholder="Description"
            onChange={(e) => onChange(e, id)}
            value={data.description}
          />
          <input
            className="startDate"
            type="date"
            name="startDate"
            id="experience"
            placeholder="Start Date"
            onChange={(e) => onChange(e, id)}
            value={data.startDate}
          />
          <input
            className="endDate"
            type="date"
            name="endDate"
            id="experience"
            placeholder="End Date"
            onChange={(e) => onChange(e, id)}
            value={data.endDate}
          />
        </div>
        <div className="experience-duties">{dutiesElements}</div>
        <button
          className="add-duty"
          onClick={(e) => addInput(e, data.id)}
          id="addDuty"
        >
          Add Duty
        </button>
      </form>
      <button onClick={(e) => removeInput(e, id, index)} id="remove-job">
        Remove Job
      </button>
    </div>
  );
}
