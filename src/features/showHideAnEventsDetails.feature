Feature: Show/Hide an event details

    Scenario: An event element is collapsed by default.
        Given the list of events has been loaded
        When the user hasn not clicked on anything
        Then the event element will be collapsed with a show details button

    Scenario: User can expand an event to see its details.
        Given the list of events has been loaded
        When user clicks on “show details” button for an event
        Then the event element will be expanded to show the event details

    Scenario: User can collapse an event to hide its details.
        Given the list of events has been loaded
        And “show details” has been clicked
        When user clicks on “hide details” button for an event
        Then the event element will collapse to hide the events details
