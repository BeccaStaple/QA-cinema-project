import React from "react";

export default function ScreenInput(props) {
    return (
        <option name={props.id} value={props.id}>
            {props.name}
        </option>
    );
}