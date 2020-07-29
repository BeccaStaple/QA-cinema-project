import React from "react";

export default function ScreenInput(props) {
    return (
        <option value={props.id}>
            {props.name}
        </option>
    );
}