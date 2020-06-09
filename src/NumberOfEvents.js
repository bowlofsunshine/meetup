import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        query: 32, //default event number per page for meetup
    }

    // handleInputChanged = (event) => {
    //     const value = event.target.value;
    //     this.setState({ query: value });
    //     this.props.updateEvents(null, null, value);
    // }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });

        if (value <= 0) {
            this.setState({
                infoText: 'You should probably show at least one listing'
            });
        } else {
            this.setState({
                infoText: ''
            })
            this.props.updateEvents(null, null, value);
        }
    }

    render() {
        return (
            <div className="numberOfEvents">
                <ErrorAlert text={this.state.infoText} />
                <label>Show <input type="number" className="number" value={this.state.query} onChange={this.handleInputChanged} placeholder="32"></input> Events </label>
            </div>
        );
    }
}

export default NumberOfEvents;