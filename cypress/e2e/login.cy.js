import { loginMethods } from "./pages/login/login.methods";
import { Logger } from "./util/logger";

describe('Login', () => {
    it('Login', () => {
        const usuario = 'ramdom01';
        const contrasena = 'ramdom01';

        Logger.stepNumber(1);
        Logger.step('Navigate to DemonBlaze page');
        cy.visit('https://demoblaze.com/index.html')

        Logger.stepNumber(2);
        Logger.step('Click on Login link');
        cy.get('a[data-target="#logInModal"]').click()

        Logger.stepNumber(3);
        Logger.step(`Login with this credentials: "${usuario}/${contrasena}"`);
        loginMethods.login(usuario, contrasena)
        Logger.verification(`The Home should show "Welcome ${usuario}" text`);
        cy.get('a#nameofuser').should('contain.text', usuario)
    });
});