import React from "react";
import Axios from "axios";
import '../index.css';
import { Button } from "react-bootstrap";

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
           
                fk_movie_id : "",
                fk_screen_id : "",
                movie_date : "",
                movie_time : "",
                customer_name : "",
                customer_email : "",
                adult_qty: "",
                child_qty : "",
                concession_qty: "",

                
            
        }
    }


    componentDidMount() {
        Axios.get("http://localhost:9090/cinema/movies").then((res) => {
            const movieTitle = res.data;
            this.setState({ movieTitle });
        });


    }

    movieChangeHandler = event => {
        Axios.get(`http://localhost:9090/cinema/bookings/makeBookings/${event.target.value}`).then(({ data }) => {
            this.setState({ movieObject: data });
        });
    }

    changeHandler = event => {
        this.setState({ [event.target.name] : event.target.value  });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    submitHandler = event => {
        event.preventDefault();
        const bookingInfo = this.state;
        console.log(bookingInfo);
        
        Axios.post("http://localhost:9090/cinema/bookings/confirmbooking", bookingInfo).then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <label className="label-text" for="selectMovie">Select Your Movie: </label>
                <select name="fk_movie_id" onChange={this.movieChangeHandler}>
                    <option disabled selected value>-- Select Film --</option>
                    {this.state.movieTitle.map(movie => <OptionInput {...movie} />)} ;
                </select>
                        <br />


                <label for="screenDropdown" className="label-text">Select your screen: </label>
                <select name="fk_screen_id" id="screenDropdown" onChange={this.changeHandler}>
                    <option disabled selected value>-- Select Screen --</option>
                    {this.state.movieObject.screens.map(({screen_name, theatre_Screen_id}) => <ScreenInput name = {screen_name} id = {theatre_Screen_id} />)}
                </select>
                <br />


                <label name="movie_date" for="selectDate" className="label-text">Select your date: </label>
                <input onChange={this.changeHandler} name="movie_date" type="date"/>
                <br />

                <label for="selectTime" className="label-text">Select your time: </label>
                <select name="movie_time" id="selectTime" onChange={this.changeHandler}>
                    <option disabled selected value>-- Select Time --</option>
                    {this.state.movieObject.bookings.length > 0 && this.state.movieObject.bookings.map(booking => <TimeInput start_time={booking.start_time} />)}
                </select>
                <br />

                <label className=" bookingSelection label-text">Customer Full Name</label>
                <input name="customer_name" type="text" onChange={this.changeHandler} />
                <br />

                <label className="bookingSelection label-text" >Customer Email</label>
                <input name="customer_email" type="text" onChange={this.changeHandler} />
                <br />


                   

                <label className="label-text">Adult (16+)</label>
                <input name="adult_qty" onChange={this.changeHandler} type="number" />
                <label className="label-text">Concession (Student / OAP)</label>
                <input name="child_qty" onChange={this.changeHandler} type="number" />
                <label className="label-text">Child (15 and under)</label>
                <input name="concession_qty" onChange={this.changeHandler} type="number" />
                <br />

                <Button type="submit" variant="red">Make Booking</Button>

            </form>


        );
    }


}