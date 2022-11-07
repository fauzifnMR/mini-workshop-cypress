class LoginPage {
    getUsername() {
        return cy.xpath("//input[@name='username']")
    }
    getPassword() {
        return cy.xpath("//input[@name='password']")
    }
    getButtonLogin() {
        return cy.get('.oxd-button')
    }
}


export default LoginPage;