import React from 'react';
import {RiDeleteBinLine} from 'react-icons/ri'

export default function PersonalSkillsForm({onChange, data, removeInput, index}) {
    return (
        <div className="personal-skills-form-wrapper single-form-wrapper">
            <form action="" className="personal-skills-form single-form">
                <input type="text" name="skill" id="personal-skills" placeholder='Personal Skill' onChange={(e) => onChange(e, data.id)} value={data.skill}/>
            </form>
            <div onClick={(e) => removeInput(e, data.id, index)}>
                <RiDeleteBinLine className="remove-skill remove"  id="remove-personal-skill"/>
            </div>
        </div>
    )
}