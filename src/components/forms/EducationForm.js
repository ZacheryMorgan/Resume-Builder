import React from 'react';

export default function EducationForm({onChange, data, removeInput, index}) {
    return (
        <div className="education-form-wrapper">
            <form action="" className="education-form">
                <input type="text" name="school" id="education" placeholder='Name of school' onChange={(e) => onChange(e, data.id)} value={data.school}/>
                <input type="number" min="1990" max="2022" name="startDate" id="education" placeholder='Start date' onChange={(e) => onChange(e, data.id)} value={data.startDate}/>
                <input type="number" min="1990" max="2022" name="endDate" id="education" placeholder='End date' onChange={(e) => onChange(e, data.id)} value={data.endDate}/>
                <input type="text" name="degree" id="education" placeholder='Degree' onChange={(e) => onChange(e, data.id)} value={data.degree}/>
            </form>
            <button onClick={(e) => removeInput(e, data.id, index)} id="remove-education">Remove School</button>
        </div>
    )
}