Feature: Login to the app
  Scenario: Valid login
    Given the user is on the login screen
    When the user enters valid credentials
    And the user submits the login form
    Then the user should see the home screen
