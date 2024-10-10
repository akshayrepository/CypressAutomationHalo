
import LoginPage from "../PageObjects/LoginPage"
const loginPage = new LoginPage()


Cypress.Commands.add('signin', (url, username, password) => 
    {
       
        cy.visit(url)
        loginPage.loginPage_getUserName().type(username)
        loginPage.loginPage_getPassword().type(password)
        loginPage.loginPage_getLoginButton().click()
        
        
    })