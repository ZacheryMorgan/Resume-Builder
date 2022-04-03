import React from 'react';

export default function SkillsForm({onChange, data, removeInput, index}) {
    return (
        <div className="skills-form-wrapper">
            <form action="" className="skills-form">
                <input placeholder="Skill" type="text" name="skill" id="skills" onChange={(e) => onChange(e, data.id)} value={data.skill}/>
            </form>
            <button className="remove-skill" onClick={(e) => removeInput(e, data.id, index)} id="remove-skill">Remove Skill</button>
        </div>
    )
}