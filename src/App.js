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
    infoText: '',
    warningText: ''
  }

  componentDidMount() {
    this.updateEvents();
  }


  updateEvents = (lat, lon, page) => {

    if (!navigator.onLine) {
      this.setState({ warningText: 'No network connection, events displayed are from previous online session.' });
    } else {
      this.setState({ warningText: '' });
    }

    if (this.state.events.length === 0) {
      this.setState({
        infoText: 'There are no events currently in your city.'
      });
    } else {
      this.setState({
        infoText: ''
      })
    }

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


  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <WarningAlert text={this.state.infoText} />
        <WarningAlert text={this.state.warningText} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
