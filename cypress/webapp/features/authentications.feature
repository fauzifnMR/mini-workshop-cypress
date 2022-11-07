Feature: Authentication

	Scenario: As a user can login to the application
	Given I am logged in as Admin
    Then I Should be on HomePage
    And I should EXPECT
        |SelectorTitle| SelectorContains|
        |Home Title   | VISIBLE|

        
    