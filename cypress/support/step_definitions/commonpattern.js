/// <reference types="cypress" />

import {
  Given,
  When,
  Then,
  Before,
  And,
} from "cypress-cucumber-preprocessor/steps";

Given(/^I am logged in as (.*)$/, (user) => {
  cy.visit(`/web/index.php/auth/login`);
  cy.login(user)
  global.user = user
  
});

And(/^I Should be on (.*)$/, (pageName) => {
  cy.fixture(`pom/${pageName}.json`).as('pageName')
  cy.get('@pageName').then((SelectDomElement) => {
    cy.intercept('GET', `${SelectDomElement.API.endpoint}`).as(`${SelectDomElement.API.name}`);
    cy.wait(`@${SelectDomElement.API.name}`).its('response.statusCode').should('eq', 200)
})  
})

And(/^I should EXPECT$/, (dataTable) => {
  cy.wait(10000)

  cy.get('@pageName').then((SelectDomElement) => {
    dataTable.hashes().forEach(row => {
      if(row.SelectorContains == 'VISIBLE'){
        cy.xpath(`${SelectDomElement.domElements[`${row.SelectorTitle}`].xpath}`).should('be.visible')      }
    })
  })

})