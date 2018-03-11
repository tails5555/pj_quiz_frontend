import React from 'react';
const renderField = ({ input, label, placeholder, type, meta: { touched, error, invalid, warning } }) => {
    const warningStyle = {color : 'orange'};
    const dangerStyle = {color : 'red'};
    return (
        <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
            <label className="control-label">{label}</label>
            <div>
                <input {...input} className="form-control" placeholder={placeholder} type={type}/>
                <div className="help-block">
                    {touched && ((error && <span style={dangerStyle}>{error}</span>) || (warning && <span style={warningStyle}>{warning}</span>))}
                </div>
            </div>
        </div>
    )
}
export default renderField;