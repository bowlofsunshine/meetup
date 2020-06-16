import React, { Component } from 'react';
import {
    PieChart, Pie, Cell, Line, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

class Event extends Component {
    state = {
        event: [],
        showDetails: false
    }

    handleShowDetails = () => {
        if (this.state.showDetails === false) {
            this.setState({ showDetails: true });
        }
        else {
            this.setState({ showDetails: false });
        }
    }

    render() {
        const showDetails = this.state.showDetails;
        const { event } = this.props;

        const pieData = [{
            name: "RSVP'd",
            value: event.yes_rsvp_count
        },
        {
            name: "Free Spots",
            value: (event.rsvp_limit - event.yes_rsvp_count)
        }];
        const colors = ["DarkCyan", "CornflowerBlue"];
        return (
            <div className="eventsList">
                <div className="eventDetails">

                    <div key={event.id}>
                        <div className='eventDate'>Date: {event.local_date}</div>
                        <div className='eventTime'>Time: {event.local_time}</div>
                        <p className="name">{event.name}</p>
                        <div className="group-name">Group: {event.group.name}</div>
                        {!event.rsvp_limit &&
                            <div className="going"> {event.yes_rsvp_count} are going </div>}

                        {showDetails &&
                            <button className="hideDetailsButton details-btn" onClick={() => this.handleShowDetails()}>Hide Details</button>
                        }
                        {!showDetails &&
                            <button className="showDetailsButton details-btn" onClick={() => this.handleShowDetails()}>Show Details</button>
                        }
                        {this.state.showDetails &&
                            <div className="description">
                                {event.description}
                                {event.rsvp_limit &&

                                    <PieChart width={400} height={200}>
                                        <Pie isAnimationActive={false} data={pieData} cx="50%" cy="50%" outerRadius={80} label>
                                            {
                                                pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                                ))
                                            }
                                        </Pie>

                                        <Tooltip />
                                        <Legend verticalAlign="bottom" height={24} iconType="triangle" />
                                    </PieChart>

                                }
                            </div>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default Event;