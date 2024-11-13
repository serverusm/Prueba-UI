Feature: USER LOGIN

    Scenario: Successful login with valid credentials
        When the user logs in with username "sergiomamani2014@gmail.com" and password "November14"
        And the user submits the login form
        Then the user should be redirected to the home screen
