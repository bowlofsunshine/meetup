
import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

describe('<Event/> component', () => {
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
    test('test data you get from the mock API', () => {
        EventWrapper.setState({
            event:
            {
                created: 1574974495000,
                duration: 10800000,
                fee: {
                    accepts: 'paypal',
                    amount: 15,
                    currency: 'EUR',
                    description: '',
                    label: 'Price',
                    required: true
                },
                id: '266813030',
                name: 'Agile Game Night #42 - Murmelbahnspiel',
                rsvp_limit: 15,
                date_in_series_pattern: false,
                status: 'upcoming',
                time: 1594917000000,
                local_date: '2020-07-16',
                local_time: '18:30',
                updated: 1582196146000,
                utc_offset: 7200000,
                waitlist_count: 0,
                yes_rsvp_count: 3,
                is_online_event: false,
                group: {
                    created: 1471362725000,
                    name: 'Agile Game Nights',
                    id: 20321716,
                    join_mode: 'open',
                    lat: 48.13999938964844,
                    lon: 11.579999923706055,
                    urlname: 'Agile-Game-Night',
                    who: 'Agile Gamer',
                    localized_location: 'München, Germany',
                    state: '',
                    country: 'de',
                    region: 'en_US',
                    timezone: 'Europe/Berlin'
                },
                link: 'https://www.meetup.com/Agile-Game-Night/events/266813030/',
                description: 'ATTENTION: We decide at the beginning of June based on the current situation whether we will play live or remotely!',
                visibility: 'public',
                member_pay_fee: false
            }
        });
        expect(EventWrapper.state('event').name).toBe('Agile Game Night #42 - Murmelbahnspiel');
    })
}); 