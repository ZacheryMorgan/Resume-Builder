import React from 'react';

export default function EducationForm(props) {
    return (
        <div className="education-form-wrapper">
            <form action="" className="education-form">
                <input type="text" name="school" id="education" placeholder='Name of school' onChange={(e) => props.onChange(e, props.data.id)}/>
                <input type="date" name="startDate" id="education" placeholder='Start date' onChange={(e) => props.onChange(e, props.data.id)}/>
                <input type="date" name="endDate" id="education" placeholder='End date' onChange={(e) => props.onChange(e, props.data.id)}/>
                <input type="text" name="degree" id="education" placeholder='Degree' onChange={(e) => props.onChange(e, props.data.id)}/>
            </form>
            <button onClick={(e) => props.removeEducation(e, props.data.id)} id="remove-education">Remove School</button>
        </div>
    )
}