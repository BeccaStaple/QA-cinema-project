import React from 'react';
import axios from 'axios';
import '../index.css';


class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {

    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <div>
        <div class="flex-container">
          <h4>Contact Us</h4>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div>
              <input name="name" type="text" class="feedback-input" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              <input name="email" type="text" class="feedback-input" placeholder="Email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              <textarea name="text" class="feedback-input" placeholder="Comment" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
            </div>
            <div>
              <button type="submit" className="contactUsbtn btn-danger">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default ContactUs;