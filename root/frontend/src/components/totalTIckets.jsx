import React from "react";

export default class totalTickets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalAdutlTickets : "",
            totalChildTickets : "",
            totalConTickets : ""
        }
    }


    changeHandler = event => {
        this.state = {[event.target.name] : event.target.value};
    }

    totalOutput = () => {
        const adultTicket = 12.55;
        const childTicket = 7.75;
        const conTicket = 9.88;


        return (
            <p>hello</p>
        );

    }

    render() {
        return(
            <div>
                <label className="label-text">Adult (16+)</label>
                <input onChange={this.changeHandler} name="totalAdutlTickets" type="number" />
                <label className="label-text">Concession (Student / OAP)</label>
                <input onChange={this.changeHandler} name = "totalConTickets" type="number" />
                <label className="label-text">Child (15 and under)</label>
                <input onChange={this.changeHandler} name="totalChildTickets" type="number" />
                <br />
                <p className="label-text">Total: {this.totalOutput}</p>
            </div >
        );
    }
     
}