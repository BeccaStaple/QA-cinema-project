import React from "react";
import Axios from "axios";
import '../index.css';
import {Button} from "react-bootstrap";

import TotalTickets from "./totalTIckets";
import OptionInput from "./Inputs/OptionInput";
import ScreenInput from "./Inputs/ScreenInput";
import DateInput from "./Inputs/DateInput";
import TimeInput from "./Inputs/TimeInput";


export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: [],
            movieObject : []
        }
    }

    
    componentDidMount() {
        Axios.get("http://localhost:9090/cinema/movies").then((res) => {
            const movieTitle = res.data;
            console.log({movieTitle});
            this.setState({ movieTitle });
        });

        Axios.get(`http://localhost:9090/cinema/bookings/makeBookings/`).then((res) => {
            const movieObject = res.data;
            console.log({ movieObject });
            this.setState({ movieObject });
        });
    }

    changeHandler = event => {
        this.state = {[event.target.name] : event.target.value};
        console.log(event.target.value);
    }

    submitHandler = event => {
        event.preventDefault();
        console.log("posted");
    }

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                
                <label className="label-text" for="selectMovie">Select Your Movie: </label>
                <select>
                        {this.state.movieTitle.map(movie => <OptionInput {...movie}/>) } ;
                </select>
                <br/>


                <label for="screenDropdown" className="label-text">Select your screen: </label>
                <select id="screenDropdown" onChange={this.changeHandler}>
                    {this.state.movieObject.map(screen => <ScreenInput {...screen} />)}
                </select>
                    <br/>


                <label for="selectDate" className="label-text">Select your date: </label>
                <DateInput />
                    <br/>

                <label for="selectTime" className="label-text">Select your time: </label>
                <select id="selectTime" onChange={this.changeHandler}>
                    {this.state.movieObject.map(time => <TimeInput {...time}/>)}
                </select>
                    <br/>
                
                <label className="label-text">Customer Full Name</label>
                <input type="text"/>
                    <br/>
                <TotalTickets/>
                
                <Button variant="red">Make Booking</Button>
                
            </form>

            
           
        );
    }


}