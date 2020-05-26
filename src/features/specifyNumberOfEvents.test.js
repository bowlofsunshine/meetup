import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('the list of events has been loaded', () => {
            AppWrapper = mount(<NumberOfEvents />);
        });

        when('user hasn’t specified a number when searching for events', () => {
        });

        then('a default number of 32 events will be shown', () => {
            expect(AppWrapper.state('query')).toBe(32);
        });
    });


    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('user enters the number of events they want to see', () => {
            AppWrapper.find('.number').simulate('change', { target: { value: 2 } });
        });

        then('the specified number of events is shown', () => {
            const EventWrapper = AppWrapper.find(NumberOfEvents)
            expect(EventWrapper.state('query')).toEqual(2);
        });
    });


});