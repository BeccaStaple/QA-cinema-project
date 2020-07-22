import React from "react";
import Axios from "axios";

export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBooking : {
                title: "",
                screen: "",
                date: "",
                customerName: "",
                adultTicket: "",
                childTicket: "",
                concessionTicket: "",
            },

            movieOptions: [],
            screenOptions: [],
            dateOptions: [],
        }
    }

    componentDidMount() {
        Axios.post("http://localhost:3000").then(res => {
            this.setState({newBooking: res.data})
        }
        )
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    handleChange(event) {

    }


     render() {
        return(
            <div class="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Booking Form</h2>
                            <div>
                            <label>Movie Title</label>
                            <select name="movie-title" component="select" >
                                <option value={this.state.newBooking.title}>Movie 1</option>
                                <option value="movie2">Movie 2</option>
                                <option value="movie3">Movie 3</option>
                            </select>
                            </div>

                            <div>
                            <label>Screen</label>
                            <select name="screen" component="select" >
                                <option value="screen1">Screen 1</option>
                                <option value="screen2">Screen 2</option>
                            </select>
                            </div>

                            <div>
                            <label>Date</label>
                            <input type="date" name="date" />
                            </div>

                            <div>
                            <label>Time</label>
                            <input type="time" name="time" />
                            </div>

                            <div>
                            <label>Name</label>
                            <input name="customerName" component="input" />
                            </div>

                            <div>
                            <label>Adult (16+)</label>
                            <input type="number" name="adultTicket" component="input" />
                            </div>

                            <div>
                            <label>Child</label>
                            <input type="number" name="childTicket" component="input" />
                            </div>

                            <div>
                            <label>Concession</label>
                            <input type="number" name="concessionTicket" component="input" />
                            </div>

                        <button type="submit">Proceed To Payment</button>
                    </form>
            </div>
        );
    }
}
