import React from 'react';

export default function ExperienceForm({data, index, onChange, addInput, id, removeInput}) {

    const dutiesElements = data.duties.map((duty, dutyIndex) => {
        return (
            <div className="duties-form-wrapper" key={dutyIndex}>
                <form action="" className="duties-form">
                    <input
                        type="text"
                        name="duty"
                        id="duty"
                        onChange={(e) => onChange(e, id, dutyIndex)}
                        value={duty} />
                </form>
                <button
                    className="remove-duty"
                    onClick={(e) => removeInput(e, id, dutyIndex)}
                    id="remove-duty">Remove Duty</button>
            </div>
        )
    })

    return (
        <div className="experience-form-wrapper">
            <form className='experience-form'>
                <input required type="text" name="job" id="experience" placeholder='Job Name' onChange={(e) => onChange(e, id)} value={data.job} />
                <input required type="date" name="date" id="experience" placeholder='Date' onChange={(e) => onChange(e, id)} value={data.date} />
                <input required type="text" name="description" id="experience" placeholder='Description' onChange={(e) => onChange(e, id)} value={data.description} />
                {dutiesElements}
                <button className="add-duty" onClick={(e) => addInput(e, data.id)} id="addDuty">Add Duty</button>
            </form>
            <button onClick={(e) => removeInput(e, id, index)} id="remove-job">Remove Job</button>
        </div>

    )
}