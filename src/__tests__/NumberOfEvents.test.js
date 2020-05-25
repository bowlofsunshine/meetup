import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    });

    test('render number input correctly', () => {
        const query = NumberOfEventsWrapper.state('query');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(query);
    });

    test('default number of events per page is 32', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });

    test('show number of events input label', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
    });

    // test('change state when number input changes', () => {
    //     const eventObject = { target: { value: 5 } };
    //     NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    //     expect(NumberOfEventsWrapper.state('query')).toBe(5);
    // });

    describe('<NumberOfEvents/> inegration', () => {
        let NumberOfEventsWrapper;
        beforeAll(() => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
        });
        test('change state when input changes', () => {
            const eventObject = { target: { value: 32 } };
            NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
            expect(NumberOfEventsWrapper.state('query')).toBe(32);
        });

        test('change state when input changes', () => {
            const eventObject = { target: { value: 2 } };
            NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
            expect(NumberOfEventsWrapper.state('query')).toBe(2);
        });
    })
});