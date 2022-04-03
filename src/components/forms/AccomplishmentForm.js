import React from 'react';

export default function AccomplishmentForm(props) {
    return (
        <div className="accomplishments-form-wrapper">
            <input type="text" name="accomplishment" id="accomplishment" onChange={(e) => props.onChange(e, props.data.id)}/>
            <button id="remove-accomplishment" onClick={(e) => props.removeAccomplishment(e, props.data.id)} >Remove Accomplishment</button>
        </div>
    )
}