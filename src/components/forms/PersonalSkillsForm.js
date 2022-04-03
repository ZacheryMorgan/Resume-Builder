import React from 'react';

export default function PersonalSkillsForm({onChange, data, removeInput, index}) {
    return (
        <div className="personal-skills-form-wrapper">
            <form action="" className="personal-skills-form">
                <input type="text" name="skill" id="personal-skills" placeholder='Personal Skill' onChange={(e) => onChange(e, data.id)} value={data.skill}/>
            </form>
            <button className="remove-personal-skill" onClick={(e) => removeInput(e, data.id, index)} id="remove-personal-skill">Remove Skill</button>
        </div>
    )
}