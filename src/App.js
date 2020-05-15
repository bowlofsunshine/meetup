import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import Event from './Event';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <Event />
        <NumberOfEvents />
      </div>
    );
  }
}
export default App;
