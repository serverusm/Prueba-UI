Feature: USER LOGIN

    @Login
    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I login with e-mail "sergiomamani2014@gmail.com" and password "November14"
        And the user submits the login form
        Then the user should see "Hello world!" message in home screen
