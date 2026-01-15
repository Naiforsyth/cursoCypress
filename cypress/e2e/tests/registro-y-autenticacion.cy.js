import { commonPageData } from "../pages/common-page/common-page.data.js";
import { CommonPageMethods } from "../pages/common-page/common-page.methods.js";
import { SignupMethods } from "../pages/singUp/signUp.methods.js";
import { Logger } from "../util/logger.js";

describe(commonPageData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario válido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio.");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step('Hacer clic en "Sign up" en la barra de navegación.');
    CommonPageMethods.clickOnSingUpOption();

    Logger.stepNumber(3);
    Logger.step('Completar todos los campos obligatorios con información válida.');
    SignupMethods.insertUsername("ksjfiksjhdfknsdlfknjsknjh");
    SignupMethods.insertPassword("ksjfiksjhdfknsdlfknjsknjh");

    Logger.stepNumber(4);
    Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
    SignupMethods.clickOnSingUpButton();
    cy.wait(2000);
    Logger.verification('Verificar que se muestre el mensaje "Sign up successful."');
    SignupMethods.verifySignupSuccessfulMessageIsDisplayed();
  });  
});
