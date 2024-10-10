//cypress basics - testcase file in cypress  id  called spec file
///// <reference types="Cypress" />
import homePageTestData from '../../fixtures/HomePageTestData.json'
import loginPageTestData from '../../fixtures/LoginPageTestData.json'
describe("Smoke suite", function()
{

    it("HomePageValidation", function()
    {
      cy.signin(loginPageTestData.url,loginPageTestData.username,loginPageTestData.password)
      //assert the logo text 
      cy.homePage_validateLogoText().then((logotext)=>{expect(logotext).to.equal(homePageTestData.app_logo)})
      //assert the price of back pack
      cy.homePage_validateBackPackPrice().then((price)=>{expect(price).to.equal(homePageTestData.backPack_Price)})
      cy.homePage_validateInventoryItemsCount().then((count)=>{expect(count).to.equal(homePageTestData.inventoryItemsCount)})

      




    })









})