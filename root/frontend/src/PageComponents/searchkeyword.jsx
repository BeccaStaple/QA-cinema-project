import React from "react";
import Axios from "axios";
import '../index.css';

export default class Search extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    componentDidMount() {
    Axios.get('http://www.omdbapi.com/?apikey=[yourkey]&')
        .then(res => {
            this.setState({ search: res.data })
        })
        .catch(err => console.error(err));

    }

    handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
    event.preventDefault();

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value = {this.state.search} onChange={this.handleChange} name='search' placeholder='Enter keyword...'/>
                    <button>Search</button>
                </form>
            </div>
        )
    } 

}