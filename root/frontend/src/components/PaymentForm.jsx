import React from "react";
import Cards from 'react-credit-cards';
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <br/>

            <input
            type="text"
            name="name"
            placeholder="Name on card"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
            <br/>
            <input
            type="text"
            name="expiry"
            placeholder="Expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
            <input
            type="password"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
        </form>
        <Cards 
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
      </div>
    );
  }
}