Feature: USER LOGIN

    @Login
    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I login with e-mail "sergiomamani2014@gmail.com" and password "November14"
        And I submits the login form
        Then I should see "Hello world!" message in home screen
