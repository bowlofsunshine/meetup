
import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

describe('<Event component', () => {
    let EventWrapper;
    const event = {
        created: 1515424197000,
        duration: 10800000,
        id: "bcvtkrybcjbxb",
        name: "Informal get-together of Kotlin developers in Berlin",
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1592499600000,
        local_date: "2020-06-18",
        local_time: "19:00",
        updated: 1572729815000,
        utc_offset: 7200000,
        waitlist_count: 0,
        yes_rsvp_count: 9,
        is_online_event: false,
        group: {
            created: 1479909210000,
            name: "Kotlin User Group Berlin",
            id: 21262742,
            join_mode: "open",
            lat: 52.52000045776367,
            lon: 13.380000114440918,
            urlname: "kotlin-berlin",
            who: "Kotlin fans",
            localized_location: "Berlin, Germany",
            state: "",
            country: "de",
            region: "en_US",
            timezone: "Europe/Berlin"
        },
        link: "https://www.meetup.com/kotlin-berlin/events/bcvtkrybcjbxb/",
        description: "<p>Line-up: TBA</p> ",
        visibility: "public",
        member_pay_fee: false
    }
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });
    test('render events', () => {
        expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
    });
    test('see if details are automatically collapsed', () => {
        expect(EventWrapper.state('showDetails')).toBe(false)
    });
    test('render list of events correctly', () => {
        const event = EventWrapper.state('event');
        expect(EventWrapper.find('.eventDetails li')).toHaveLength(event.length);
        for (let i = 0; i < event.length; i += 1) {
            expect(EventWrapper.find('.eventDetails li').at(i).text()).toBe(event[i].name);
        }
    })
    test('check to see if Show Details button is there', () => {
        expect(EventWrapper.find('.showDetailsButton')).toHaveLength(1)
    });
    test('click on button should show details', () => {
        EventWrapper.find('.showDetailsButton').at(0).simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true)
    });
    test('when showdeatils is click, description is shown', () => {
        const event = EventWrapper.state('event');
        EventWrapper.setState({
            showDetails: false
        });
        EventWrapper.find('.showDetailsButton').at(0).simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
        expect(EventWrapper.find('.eventDescription')).toHaveLength(event.length);
        for (let i = 0; i < event.length; i += 1) {
            expect(EventWrapper.find('.eventDescription').at(i).text()).toBe(event[i].description);
        }
    })
}); 