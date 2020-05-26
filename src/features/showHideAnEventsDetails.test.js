import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import CitySearch from '../CitySearch';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user hasn not clicked on anything', () => {
        });

        then('the event element will be collapsed with a show details button', () => {
            expect(AppWrapper.find('.description')).toHaveLength(0);
        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('user clicks on “show details” button for an event', () => {
            AppWrapper.update()
            AppWrapper.find('.showDetailsButton').at(0).simulate('click');
        });

        then('the event element will be expanded to show the event details', () => {
            expect(AppWrapper.find('.description')).toHaveLength(1);
        });
    });


    test('User can collapse an event to hide its details.', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
        });
        and('“show details” has been clicked', () => {
            AppWrapper.update()
            AppWrapper.find('.showDetailsButton').at(0).simulate('click');
            expect(AppWrapper.find('.description')).toHaveLength(1);
        });

        when('user clicks on “hide details” button for an event', () => {
            AppWrapper.find('.hideDetailsButton').at(0).simulate('click');
        });

        then('the event element will collapse to hide the events details', () => {
            AppWrapper.update()
            expect(AppWrapper.find('.description')).toHaveLength(0);
        });
    });
});