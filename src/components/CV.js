import React from 'react'
import Header from './cv/Header'
import Skills from './cv/Skills'
import Experience from './cv/Experience'
import Education from './cv/Education'
import Accomplishment from './cv/Accomplishment'
import PersonalSKills from './cv/PersonaSkills'
import './styling/CV.scss'
import Contact from './cv/Contact'

export const CV = React.forwardRef(({ jobDutiesInfo, headerInfo, skillsInfo, experienceInfo, educationInfo, accomplishmentsInfo, personalSkillsInfo, contactInfo, print }, ref) => {

    const jobDutiesElements = jobDutiesInfo.map((duty, index) => {
        return duty
    })
    const experienceElements = experienceInfo.map((experience, index) => {
        return <Experience data={experience} key={experience.id} index={index} duties={jobDutiesElements}/>
    })
    const skillsElements = skillsInfo.map(skill => {
        return <Skills data={skill} key={skill.id} id={skill.id} />
    })
    const educationElements = educationInfo.map(education => {
        return <Education data={education} key={education.id} id={education.id}/>
    })
    const accomplishmentsElements = accomplishmentsInfo.map(accomplishment => {
        return <Accomplishment data={accomplishment} key={accomplishment.id} id={accomplishment.id} />
    })
    const personalSkillsElements = personalSkillsInfo.map(skill => {
        return <PersonalSKills data={skill} key={skill.id} id={skill.id}/>
    })

    return (
        <div ref={ref} className="main-right">
            <Header data={headerInfo} />
            <Contact data={contactInfo}/>
            {experienceElements}
            <section className="skills">
                <span className="list-title">Skills</span>
                <ul className="skills-list" title='Skills'>
                    {skillsElements}
                </ul>
            </section>
            {educationElements}
            {accomplishmentsElements}
            {personalSkillsElements}
        </div>
    )
})

export default CV