import React from "react";
import Axios from "axios";
import '../index.css';
import { Button } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import OptionInput from "./Inputs/OptionInput";
import ScreenInput from "./Inputs/ScreenInput";
import TimeInput from "./Inputs/TimeInput";


export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: [],
            movieObject: {
                screens: [],
                bookings: []
            },

            newBooking: {
                fk_movie_id: "",
                fk_screen_id: "",
                movie_date: "",
                fk_movieTime_id : null,
                fk_ticket_Type_id : null,
                movie_time: "",
                customer_name: "",
                customer_email: "",
                adult_qty: 0,
                child_qty: 0,
                concession_qty: 0,
            }
        }
    }


    componentDidMount() {
        Axios.get("http://localhost:9090/cinema/movies").then((res) => {
            const movieTitle = res.data;
            this.setState({ movieTitle });
        });


    }

    movieChangeHandler = event => {
        this.setState({ newBooking: { [event.target.name]: event.target.value } })
        Axios.get(`http://localhost:9090/cinema/bookings/makeBookings/${event.target.value}`).then(({ data }) => {
            this.setState({ movieObject: data });
        });
    }

    changeHandler = event => {
        const bookingNew = this.state.newBooking;
        bookingNew[event.target.name] = event.target.value;
        this.setState({ bookingNew });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        const bookingInfo = this.state.newBooking;
        console.log(bookingInfo);

        Axios.post("http://localhost:9090/cinema/bookings/confirmbooking", bookingInfo).then(res => {
            console.log(res.data);
            alert("Thank you for your booking, your ID is: " + res.data.insertId);
            
        })
            .catch(err => {
                console.log(err);
            });
            
    }

    render() {
        return (
        <div className="booking-form">
            <form onSubmit={this.submitHandler}>

                <label className="label-text" for="selectMovie">Select Your Movie: </label>
                <br />
                <select name="fk_movie_id" onChange={this.movieChangeHandler}>
                    <option disabled selected value>-- Select Film --</option>
                    {this.state.movieTitle.map(movie => <OptionInput {...movie} />)} ;
                </select>
                <br />


                <label for="screenDropdown" className="label-text">Select your screen: </label>
                <br />
                <select name="fk_screen_id" id="screenDropdown" onChange={this.changeHandler}>
                    <option disabled selected value>-- Select Screen --</option>
                    {this.state.movieObject.screens.map(({ screen_name, theatre_Screen_id }) => <ScreenInput name={screen_name} id={theatre_Screen_id} />)}
                </select>
                <br />


                <label name="movie_date" for="selectDate" className="label-text">Select your date: </label>
                <br />
                <input onChange={this.changeHandler} name="movie_date" type="date" />
                <br />

                <label for="selectTime" className="label-text">Select your time: </label>
                <br />
                <select name="movie_time" id="selectTime" onChange={this.changeHandler}>
                    <option disabled selected value>-- Select Time --</option>
                    {this.state.movieObject.bookings.length > 0 && this.state.movieObject.bookings.map(booking => <TimeInput start_time={booking.start_time} />)}
                </select>
                <br />

                <label className=" bookingSelection label-text">Customer Full Name</label>
                <br />
                <input name="customer_name" type="text" onChange={this.changeHandler} />
                <br />

                <label className="bookingSelection label-text" >Customer Email</label>
                <br />
                <input name="customer_email" type="text" onChange={this.changeHandler} />
                <br />


                   

                <label className="label-text">Amount of Adult Tickets (16+)</label>
                <br/>
                <input className="ticket-input" value={this.state.adult_qty} name="adult_qty" onChange={this.changeHandler} type="number" />
                <br/>
                <label className="label-text"> Amount of Child Tickets(Student / OAP)</label>
                <br/>
                <input className="ticket-input" value={this.state.child_qty} name="child_qty" onChange={this.changeHandler} type="number" />
                <br/>
                <label className="label-text"> Amount of Concession Tickets (15 and under)</label>
                <br/>
                <input className="ticket-input" value={this.state.concession_qty} name="concession_qty" onChange={this.changeHandler} type="number" />
                <br />

                <Button type="submit" variant="red">Make Booking</Button>

            </form>
        </div>

        );
    }


}