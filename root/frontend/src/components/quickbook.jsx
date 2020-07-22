import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function quickbook() {

    return (
        <div>
            <form id="quickbook-form">
                <div>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="outline-red" id="dropdown-custom-1">Choose a Movie</Dropdown.Toggle>
                        <Dropdown.Menu className="grey">
                            <Dropdown.Item href="#/action-1">A Star Is Born</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Annabelle</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Guardians of the Galaxy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>{' '}
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="outline-red" id="dropdown-custom-1">Choose a date</Dropdown.Toggle>
                        <Dropdown.Menu className="grey">
                            <Dropdown.Item href="#/action-1">Wednesday 22nd July 2020</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Thursday 23rd July 2020</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Friday 24th July 2020</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>{' '}
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="outline-red" id="dropdown-custom-1">Choose a time</Dropdown.Toggle>
                        <Dropdown.Menu className="grey">
                            <Dropdown.Item href="#/action-1">10.00</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">14.00</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">19.00</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>{' '}
                    <Button variant="red" type="submit" value="Book Tickets" class ="quickbook-button">Book</Button>{' '}
                </div>
            </form>
        </div>
    );
}

