import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElements.links.delete(productName).click();
  }

  static verifyProductAdded(ProductName) {
    CartElements.links.delete(ProductName).should("be.visible");
  }

  static verifyCartPageIsShown() {
    cy.url().should("include", "cart.html");
  }

  static clickOnPlaceOrderButton() {
    CartElements.buttons.placeOrder.click();
  }

  static deleteProducts() {
    cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem');
    cy.get('a[onclick*="deleteItem"]').each(link=>{
      link.click();
      cy.wait('@deleteItem');
    })
  }

  static emptyCart(username, password) {
  CommonPageMethods.navigateToDemoBlaze();
  CommonPageMethods.logout();
  CommonPageMethods.clickOnHomeOption();
  CommonPageMethods.clickOnLoginOption();
  LoginMethods.login(username, password);
  CommonPageMethods.clickOnCartOption();
  this.deleteProducts();
  }
}
