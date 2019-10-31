import React from 'react';

const UserProfileInput = (props) => {
    return (
        <section className="field userDataInputContainer">
            <label className="userDataInputLabel">
             {props.label}
            </label>
            <input type="text" disabled={props.name === "promotion" ? true : props.disabled} name={props.name} value={props.value} onChange={props.onChange} className="input is-info userDataInput" />
        </section>
    );
}

export default UserProfileInput;