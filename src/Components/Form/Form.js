import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            date: "",
            time: "",
            number: ""
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    newReservation = (event) => {
        const newReservation = {...this.state, id: Date.now()}
        //need to take in button click with form values
        //this will be a new resCard

    }


    render() {
        return (
          <form className="reservation-form">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              placeholder="Date (mm/dd)"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />

            <input
              type="text"
              placeholder="Time"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            />

            <input
              type="text"
              placeholder="Number of guests"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />

            <button type="button" onClick={this.newReservation}>Make Reservation</button>
          </form>
        );
    }
}

export default Form;