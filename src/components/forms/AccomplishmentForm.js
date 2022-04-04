import React from 'react';
import {RiDeleteBinLine} from 'react-icons/ri'

export default function AccomplishmentForm({ onChange, data, removeInput, index }) {
    return (
        <div className="accomplishments-form-wrapper single-form-wrapper">
            <form action="" className="accomplishments-form single-form">
                <input type="text" name="accomplishment" id="accomplishment" value={data.accomplishment} onChange={(e) => onChange(e, data.id)} />
            </form>
            <div onClick={(e) => removeInput(e, data.id, index)}>
                <RiDeleteBinLine className="remove-skill remove"  id="remove-accomplishment"/>
            </div>
        </div>
    )
}