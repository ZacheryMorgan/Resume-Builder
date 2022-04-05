import React from "react";
import EducationForm from "./forms/EducationForm";
import AccomplishmentForm from "./forms/AccomplishmentForm";
import HeaderForm from "./forms/HeaderForm";
import PersonalSkillsForm from "./forms/PersonalSkillsForm";
import ContactForm from "./forms/ContactForm";
import SkillsForm from "./forms/SkillsForm";
import ExperienceForm from "./forms/ExperienceForm";

export default function Form({
  handlePrint,
  contactInfo,
  headerInfo,
  experienceInfo,
  skillsInfo,
  educationInfo,
  accomplishmentsInfo,
  personalSkillsInfo,
  onChange,
  removeInput,
  addInput,
}) {
  const experienceFormElements = experienceInfo.map((experience, index) => {
    return (
      <ExperienceForm
        key={experience.id}
        data={experience}
        index={index}
        onChange={onChange}
        addInput={addInput}
        id={experience.id}
        removeInput={removeInput}
      />
    );
  });

  const skillsFormElements = skillsInfo.map((skill, index) => {
    return (
      <SkillsForm
        index={index}
        onChange={onChange}
        data={skill}
        key={skill.id}
        removeInput={removeInput}
      />
    );
  });

  const educationFormElements = educationInfo.map((education, index) => {
    return (
      <EducationForm
        index={index}
        onChange={onChange}
        data={education}
        key={education.id}
        removeInput={removeInput}
      />
    );
  });

  const accomplishmentFormElements = accomplishmentsInfo.map(
    (accomplishment, index) => {
      return (
        <AccomplishmentForm
          index={index}
          onChange={onChange}
          data={accomplishment}
          key={accomplishment}
          removeInput={removeInput}
        />
      );
    }
  );

  const personalSkillsFormElements = personalSkillsInfo.map((skill, index) => {
    return (
      <PersonalSkillsForm
        index={index}
        onChange={onChange}
        data={skill}
        key={skill}
        removeInput={removeInput}
      />
    );
  });

  function changeFont(e) {
    document.querySelector(".cv").style.fontFamily = e.target.value;
    document.querySelector(".main-left").style.fontFamily = e.target.value;
  }

  const styles = {
    display: "none",
  };

  return (
    <div className="main-left">
      <select name="Change Font" id="" onChange={changeFont}>
        <option value="" style={styles}>
          -- Change Font --
        </option>
        <option value="Roboto">Roboto</option>
        <option value="EB Garamond">EB Garamond</option>
        <option value="Fira Sans">Fira</option>
      </select>
      <button className="print" onClick={handlePrint}>
        Preview / Save as PDF
      </button>
      <HeaderForm handleChange={onChange} data={headerInfo} />
      <ContactForm onChange={onChange} data={contactInfo} />
      <div className="experience-forms">
        {experienceFormElements}
        <button onClick={addInput} className="add-job" id="addJob">
          Add Job
        </button>
      </div>
      <div className="skills-forms">
        <div className="skills-form-inputs single-form-inputs">
          {skillsFormElements}
        </div>
        <button onClick={addInput} id="addSkill" className="add-skill add">
          Add Skill
        </button>
      </div>
      <div className="education-forms">
        {educationFormElements}
        <button onClick={addInput} id="addEducation">
          Add School
        </button>
      </div>
      <div className="accomplishment-forms">
        <div className="accomplishment-form-inputs single-form-inputs">
          {accomplishmentFormElements}
        </div>
        <button onClick={addInput} id="addAccomplishment" className="add">
          Add Accomplishment
        </button>
      </div>
      <div className="personal-skills-forms">
        <div className="personal-skills-inputs single-form-inputs">
          {personalSkillsFormElements}
        </div>
        <button onClick={addInput} id="addPersonalSkill" className="add">
          Add Personal Skill
        </button>
      </div>
    </div>
  );
}
