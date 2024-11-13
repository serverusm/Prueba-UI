Feature: User Registration

    @Register @Test
    Scenario: Successful registration of a new user
        Given the user is on the registration screen
        When I clicks on create one account
        And I input "Oscar Valderrama" as the name
        And I input "123 Av. Peru" as the address
        And I input "oscarvx@gmail.com" as the email
        And I input "75943834" as the mobile number
        And I input "December16" as the password
        And I input re-enters "December16" as the password confirmation
        And I clicks on create account
        Then I should see "Hello world!" message in home screen
