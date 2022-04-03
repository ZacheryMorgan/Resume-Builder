import React from 'react'
import Header from './cv/Header'
import Skills from './cv/Skills'
import Experience from './cv/Experience'
import Education from './cv/Education'
import Accomplishment from './cv/Accomplishment'
import PersonalSKills from './cv/PersonaSkills'
import './styling/CV.scss'
import Contact from './cv/Contact'

export const CV = React.forwardRef(({ headerInfo, skillsInfo, experienceInfo, educationInfo, accomplishmentsInfo, personalSkillsInfo, contactInfo, print }, ref) => {

    const experienceElements = experienceInfo.map((experience, index) => {
        return <Experience data={experience} key={experience.id} index={index} />
    })
    const skillsElements = skillsInfo.map(skill => {
        return <Skills data={skill} key={skill.id} id={skill.id} />
    })
    const educationElements = educationInfo.map(education => {
        return <Education data={education} key={education.id} id={education.id} />
    })
    const accomplishmentsElements = accomplishmentsInfo.map(accomplishment => {
        return <Accomplishment data={accomplishment} key={accomplishment.id} id={accomplishment.id} />
    })
    const personalSkillsElements = personalSkillsInfo.map(skill => {
        return <PersonalSKills data={skill} key={skill.id} id={skill.id} />
    })

    return (
        <div ref={ref} className="cv">
            <Header data={headerInfo} />
            <Contact data={contactInfo} />
            <div className="experience-wrapper">{experienceElements}</div>
            <section className="technical-skills-wrapper">
                <span className="list-title">Technical Skills</span>
                <ul className="technical-skills-list" title='Technical SKills'>
                    {skillsElements}
                </ul>
            </section>
            <div className="education-wrapper">{educationElements}</div>
            <section className="accomplishments-wrapper">
                <span className="list-title">Accomplishments</span>
                <ul className="accomplishments-list" title='Accomplishments'>
                    {accomplishmentsElements}
                </ul>
            </section>
            <section className="personal-skills-wrapper">
            <span className="list-title">Personal Skills</span>
                <ul className="personal-skills-list" title='Personal Skills'>
                    {personalSkillsElements}
                </ul>
            </section>
        </div>
    )
})

export default CV