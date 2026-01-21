import { commonPageData } from "../pages/common-page/common-page.data.js";
import { CommonPageMethods } from "../pages/common-page/common-page.methods.js";
import { LoginData } from "../pages/login/login.data.js";
import { SignupMethods } from "../pages/singUp/signUp.methods.js";
import { Logger } from "../util/logger.js";

const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username;

describe(commonPageData.testSuites.registro, () => {
  it("Registro de usuario válido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio.");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step('Hacer clic en "Sign up" en la barra de navegación.');
    CommonPageMethods.clickOnSingUpOption();

    Logger.stepNumber(3);
    Logger.step('Completar algunos campos con información válida.');
    SignupMethods.insertUsername(user);
    SignupMethods.insertPassword(password);

    Logger.stepNumber(4);
    Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
    SignupMethods.clickOnSingUpButton();
    cy.wait(2000);
    Logger.verification('Verificar que se muestre el mensaje "Sign up successful."');
    
  });  

  it("Registro de usuario inválido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio.");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step('Hacer clic en "Sign up" en la barra de navegación.');
    CommonPageMethods.clickOnSingUpOption();

    Logger.stepNumber(3);
    Logger.step('Completar todos los campos obligatorios con información inválida.');
    SignupMethods.insertUsername(existingUser);
    SignupMethods.insertPassword(password);

    Logger.stepNumber(4);
    Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
    SignupMethods.clickOnSingUpButton();
    cy.wait(2000);
    Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos."');
    SignupMethods.verifyThatThisUserAlreadyExistsMessageIsDisplayed();
  });  
});
