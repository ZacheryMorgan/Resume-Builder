import React from 'react';
import EducationForm from './forms/EducationForm'
import AccomplishmentForm from './forms/AccomplishmentForm';
import HeaderForm from './forms/HeaderForm';
import PersonalSkillsForm from './forms/PersonalSkillsForm';
import ContactForm from './forms/ContactForm';
import SkillsForm from './forms/SkillsForm';
import ExperienceForm from './forms/ExperienceForm';


export default function Form({ handlePrint, contactInfo, headerInfo, experienceInfo, skillsInfo, educationInfo, accomplishmentsInfo, personalSkillsInfo, onChange, removeInput, addInput }) {
    const experienceFormElements = experienceInfo.map((experience, index) => {
        return <ExperienceForm
            key={experience.id}
            data={experience}
            index={index}
            onChange={onChange}
            addInput={addInput}
            id={experience.id}
            removeInput={removeInput} />
    })
    const skillsFormElements = skillsInfo.map((skill, index) => {
        return <SkillsForm
            index={index}
            onChange={onChange}
            data={skill}
            key={skill.id}
            removeInput={removeInput} />
    })
    const educationFormElements = educationInfo.map((education, index) => {
        return <EducationForm
            index={index}
            onChange={onChange}
            data={education}
            key={education.id}
            removeInput={removeInput} />
    })
    const accomplishmentFormElements = accomplishmentsInfo.map((accomplishment, index) => {
        return <AccomplishmentForm
            index={index}
            onChange={onChange}
            data={accomplishment}
            key={accomplishment}
            removeInput={removeInput} />
    })
    const personalSkillsFormElements = personalSkillsInfo.map((skill, index) => {
        return <PersonalSkillsForm
            index={index}
            onChange={onChange}
            data={skill}
            key={skill}
            removeInput={removeInput} />
    })
    return (
        <div className="main-left">
            <button className="print" onClick={handlePrint} >Save PDF</button>
            <HeaderForm handleChange={onChange} data={headerInfo} />
            <div className="contact-forms">
                <ContactForm onChange={onChange} data={contactInfo} />
            </div>
            <div className="experience-forms">
                {experienceFormElements}
                <button onClick={addInput} id='addJob'>Add Job</button>
            </div>
            <div className="skills-forms">
                {skillsFormElements}
                <button onClick={addInput} id='addSkill'>Add Skill</button>
            </div>
            <div className="education-forms">
                {educationFormElements}
                <button onClick={addInput} id='addEducation'>Add School</button>
            </div>
            <div className="accomplishment-forms">
                {accomplishmentFormElements}
                <button onClick={addInput} id='addAccomplishment'>Add Accomplishment</button>
            </div>
            <div className="personal-skills-forms">
                {personalSkillsFormElements}
                <button onClick={addInput} id='addPersonalSkill'>Add Personal Skill</button>
            </div>

        </div>
    )
}