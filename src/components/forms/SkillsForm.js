import React from 'react';
import {RiDeleteBinLine} from 'react-icons/ri'

export default function SkillsForm({onChange, data, removeInput, index}) {
    return (
        <div className="skills-form-wrapper single-form-wrapper">
            <form action="" className="skills-form single-form">
                <input placeholder="Skill" type="text" name="skill" id="skills" onChange={(e) => onChange(e, data.id)} value={data.skill}/>
            </form>
            <div onClick={(e) => removeInput(e, data.id, index)} >
                <RiDeleteBinLine className="remove-skill remove" id="remove-skill"/>
            </div>
        </div>
    )
}