import React from 'react';

export default function PersonalSkillsForm(props) {
    return (
        <div className="personal-skills-form-wrapper">
            <form action="" className="personal-skills-form">
                <input type="text" name="skill" id="personal-skills" placeholder='Personal Skill' onChange={(e) => props.onChange(e, props.data.id)} value={props.data.skill}/>
            </form>
            <button className="remove-personal-skill" onClick={(e) => props.removeSkill(e, props.data.id)} id="remove-personal-skill">Remove Skill</button>
        </div>
    )
}