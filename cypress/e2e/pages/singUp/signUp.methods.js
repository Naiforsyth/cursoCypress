import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignUpElements } from "./singUp.elements";

export class SignupMethods {
  static insertUsername(username) {
    SignUpElements.textboxes.username.invoke("val", username);
  }

  static insertPassword(password) {
    SignUpElements.textboxes.password.invoke("val", password);
  }

  static clickOnSingUpButton() {
    SignUpElements.buttons.signup.click();
  }

  static signup(username, password) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.clickOnSingUpButton();
  }

  static verifySignupSuccessfulMessageIsDisplayed() {
    CommonPageMethods.verifyAlert("Sign up successful.");
  }
}
