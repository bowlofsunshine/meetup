import React, { Component } from 'react';
import { mockEvents } from './mock-events';

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

                    <div key={event.id}>
                        <div className='eventDate'>Date: {event.local_date}</div>
                        <div className='eventTime'>Time: {event.local_time}</div>
                        <p className="name">{event.name}</p>
                        <div className="group-name">Group: {event.group}</div>
                        <div className="going">{event.yes_rsvp_count} are going </div>


                        <button className="showDetailsButton details-btn" onClick={this.handleShowDetails}>Show Details</button>
                        {this.state.showDetails &&
                            <div className="description">
                                {event.description}
                            </div>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default Event;