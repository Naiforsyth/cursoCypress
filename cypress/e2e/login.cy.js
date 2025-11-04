import { loginMethods } from "./pages/login/login.methods";

describe('Login', () => {
    it('Login', () => {
        cy.visit('https://demoblaze.com/')
        cy.get('a#login2').click()
        loginMethods.login('username', 'password')
        cy.wait(5000)
    });
});