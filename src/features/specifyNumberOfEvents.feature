Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number.
        Given the list of events has been loaded
        When  user hasn’t specified a number when searching for events
        Then a default number of 32 events will be shown

    Scenario: User can change the number of events they want to see.
        Given the main page is open
        When user enters the number of events they want to see
        Then the specified number of events is shown