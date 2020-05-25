import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        query: 32, //default event number per page for meetup
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        this.props.updateEvents(null, null, value);
    }

    render() {
        return (
            <div className="numberOfEvents">
                <label>Show <input type="number" className="number" value={this.state.query} onChange={this.handleInputChanged} placeholder="32"></input> Events </label>
            </div>
        );
    }
}

export default NumberOfEvents;