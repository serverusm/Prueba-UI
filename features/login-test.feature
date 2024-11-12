Feature: USER LOGIN

    Scenario: Successful login with valid credentials
        Given the user is on the login screen
        When the user enters a valid username and password
        And the user submits the login form
        Then the user should be redirected to the home screen

    Scenario: Failed login with invalid credentials
        Given the user is on the login screen
        When the user enters an invalid username and password
        And the user submits the login form
        Then an error message should be displayed