import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Event from './Event';
import { getEvents } from './api';
import { mockEvents } from './mock-events';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    infoText: ''
  }

  componentDidMount() {
    this.updateEvents();
    this.noEvents();
  }


  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  }

  noEvents = () => {
    if (this.state.events.length === 0) {
      this.setState({
        infoText: 'There are no events currently in your city.'
      });
    } else {
      this.setState({
        infoText: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        {this.state.noEvents && <WarningAlert text={this.state.infoText} />}
      </div>
    );
  }
}
export default App;
