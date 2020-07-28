import React from "react";
import Axios from "axios";
import '../index.css';
import TotalTickets from "./totalTIckets";



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
            this.setState({ movieTitle });
        });
    }

    movieChangeHandler(event) {
        this.state = {[event.target.name] : event.target.value};  
        Axios.get(`http://localhost:9090/cinema/bookings/makeBooking/${event.target.value}`).then((res) => {
            const movieObject = res.data;
            this.setState({ movieObject });
        });
    }

    changeHandler = event => {
        this.state = {[event.target.name] : event.target.value};
    }

    submitHandler = event => {
        event.preventDefault();
        console.log("posted");
    }

    render() {
        const showMovies = this.state.movieTitle.map(movie => {
            return (
                <option name={movie.title} value={movie.movie_id}>
                    {movie.title}
                </option>
            );
        })
        
        const showScreens = this.state.movieObject.map(screen => {
            return (
                <option name={screen.fk_theatre_Screen_id} value={screen.fk_theatre_Screen_id}>
                    {screen.fk_theatre_Screen_id}
                </option>
            );
            
        })

        const showTimes = this.state.movieObject.map(times => {
            return (
                <option name={times.start_time} value={times.start_time}>
                    {times.start_time}
                </option>
            );
        })


        return (
            <div>
            <form onSubmit={this.submitHandler}>
                <label className="label-text" for="selectMovie">Select Your Movie: </label>
               <select id="selectMovie" onChange={this.movieChangeHandler}>
                    {showMovies}
                </select>
                    <br/>
                <label for="screenDropdown" className="label-text">Select your screen: </label>
                <select id="screenDropdown" onChange={this.changeHandler}>
                    {showScreens}
                </select>
                    <br/>
                <label for="selectDate" className="label-text">Select your date: </label>
                <input id="selectDate" type="date" />
                    <br/>
                <label for="selectTime" className="label-text">Select your time: </label>
                <select id="selectTime" onChange={this.changeHandler}>
                    {showTimes}
                </select>
                    <br/>
                
                <label className="label-text">Customer Full Name</label>
                <input type="text"/>
                    <br/>
                <button type="submit">Make Booking</button>
                <TotalTickets/>
            </form>

            
            </div>
        );
    }


}