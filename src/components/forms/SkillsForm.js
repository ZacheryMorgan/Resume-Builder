import React from 'react';

export default function SkillsForm(props) {
    return (
        <div className="skills-form-wrapper">
            <form action="" className="skills-form">
                <input placeholder="Skill" type="text" name="skill" id="skills" onChange={(e) => props.onChange(e, props.data.id)} value={props.data.skill}/>
            </form>
            <button className="remove-skill" onClick={(e) => props.removeSkill(e, props.data.id)} id="remove-skill">Remove Skill</button>
        </div>
    )
}