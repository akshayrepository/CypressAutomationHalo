class LoginPage
{
    
    loginPage_getUserName()
    {
        return cy.get('input#user-name',{ timeout: 10000 })
    }
//input#password
    loginPage_getPassword()
    {
        return cy.get('input#password',{ timeout: 10000 })
    }

    loginPage_getLoginButton()
    {
        return cy.get('input[value="Login"]',{ timeout: 10000 })
    }

    
}export default LoginPage;
