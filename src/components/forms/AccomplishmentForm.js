import React from 'react';

export default function AccomplishmentForm({onChange, data, removeInput, index}) {
    return (
        <div className="accomplishments-form-wrapper">
            <input type="text" name="accomplishment" id="accomplishment" value={data.accomplishment} onChange={(e) => onChange(e, data.id)}/>
            <button id="remove-accomplishment" onClick={(e) => removeInput(e, data.id, index)} >Remove Accomplishment</button>
        </div>
    )
}