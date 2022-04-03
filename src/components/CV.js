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
            <div className="cv-left-wrapper">
                <div className="cv-left">
                    <Contact data={contactInfo} />
                    <section className="technical-skills-wrapper">
                        <h3 className="list-title">Technical Skills</h3>
                        <ul className="technical-skills-list" title='Technical SKills'>
                            {skillsElements}
                        </ul>
                    </section>
                    <section className="personal-skills-wrapper">
                        <h3 className="list-title">Personal Skills</h3>
                        <ul className="personal-skills-list" title='Personal Skills'>
                            {personalSkillsElements}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="cv-right-wrapper">
                <div className="cv-right">
                    <Header data={headerInfo} />
                    <div className="experience-wrapper">
                        <h3 className="work-experience">Work Experience</h3>
                        {experienceElements}
                    </div>
                    <div className="education-wrapper">
                    <h3 className="education-title">Education</h3>
                        {educationElements}
                    </div>
                    <section className="accomplishments-wrapper">
                        <h3 className="accomplishments-title">Accomplishments</h3>
                        <ul className="accomplishments-list" title='Accomplishments'>
                            {accomplishmentsElements}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
})

export default CV