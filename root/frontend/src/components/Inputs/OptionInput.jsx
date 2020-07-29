import React from "react";

export default function OptionInput(props) {

    
        return(
            <option name={props.fk_movie_id} value={props.movie_id}>
               {props.title} 
            </option>
        );
    
}