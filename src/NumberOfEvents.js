import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        query: 32, //default event number per page for meetup
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
    }

    render() {
        return (
            <div className="NumberOfEvents">
                <input type="number" className="number" value={this.state.query} onChange={this.handleInputChanged}></input>
            </div>
        );
    }
}

export default NumberOfEvents;