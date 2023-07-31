import React from 'react'
import './Input.css'

function FormInput(props) {
    const { label, errorMessage, onChange, id, ...inputProps } = props
    return (
        <div >
            {/* <label>{label}</label> */}
            <input {...inputProps} onChange={onChange} />
            {/* <div>
                <span>{errorMessage}</span>
            </div> */}
        </div>
    )
}

export default FormInput
