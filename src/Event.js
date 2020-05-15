import React, { Component } from 'react';

class Event extends Component {
    state = {
        event: [],
        showDetails: false
    }

    handleShowDetails = () => {
        this.setState({ showDetails: true })
    }

    render() {
        const showDetails = this.state.showDetails;
        const { event } = this.props;
        return (
            <div className="eventsList">
                <div className="eventDetails">

                    <div key={event.id}><p>{event.name}</p>
                        <button className="showDetailsButton" onClick={this.handleShowDetails}>Show Details</button>
                        {this.state.showDetails && (
                            <p class="eventDescription">
                                {event.description}
                            </p>)}
                    </div>

                </div>
            </div>
        );
    }
}

export default Event;