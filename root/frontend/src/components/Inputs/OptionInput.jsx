import React from "react";

export default function OptionInput(props) {

    
        return(
            <option value={props.movie_id}>
               {props.title} 
            </option>
        );
    
}