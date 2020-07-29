import React from "react";
import Axios from "axios";
import '../index.css';
import { Button } from "react-bootstrap";

import OptionInput from "./Inputs/OptionInput";
import ScreenInput from "./Inputs/ScreenInput";
import DateInput from "./Inputs/DateInput";
import TimeInput from "./Inputs/TimeInput";


export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: [],
            movieObject: {
                screens: [],
                bookings: []
            }
        }
    }


    componentDidMount() {
        Axios.get("http://localhost:9090/cinema/movies").then((res) => {
            const movieTitle = res.data;
            console.log({ movieTitle });
            this.setState({ movieTitle });
        });


    }

    movieChangeHandler = event => {
        Axios.get(`http://localhost:9090/cinema/bookings/makeBookings/${event.target.value}`).then(({ data }) => {
            this.setState({ movieObject: data });
        });
    }

    changeHandler = event => {
        this.state = { [event.target.name]: event.target.value };
    }

    submitHandler = event => {
        event.preventDefault();
        const newBooking = this.state;
        console.log(newBooking);
        Axios.post(/*need http to post to */).then(/*set state*/);

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <label className="label-text" for="selectMovie">Select Your Movie: </label>
                <select onChange={this.movieChangeHandler}>
                    <option disabled selected value>-- Select film --</option>
                    {this.state.movieTitle.map(movie => <OptionInput {...movie} />)} ;
                </select>
                <br />


                <label for="screenDropdown" className="label-text">Select your screen: </label>
                <select id="screenDropdown" onChange={this.changeHandler}>
                    <option disabled selected value>-- Select screen --</option>
                    {this.state.movieObject.screens.map(({screen_name, theatre_Screen_id}) => <ScreenInput name = {screen_name} id = {theatre_Screen_id} />)}
                </select>
                <br />


                <label for="selectDate" className="label-text">Select your date: </label>
                <DateInput />
                <br />

                <label for="selectTime" className="label-text">Select your time: </label>
                <select id="selectTime" onChange={this.changeHandler}>
                    <option disabled selected value>-- Select time --</option>
                    {this.state.movieObject.bookings.length > 0 && this.state.movieObject.bookings.map(booking => <TimeInput start_time={booking.start_time} />)}
                </select>
                <br />

                <label className="label-text">Customer Full Name</label>
                <input type="text" />
                <br />

                <label className="label-text">Customer Email</label>
                <input type="text" />
                <br />

                <Button type="submit" variant="red">Make Booking</Button>

            </form>



        );
    }


}