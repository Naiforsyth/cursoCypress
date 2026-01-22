import { CartElements } from "./cart.elements";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElements.links.delete(productName).click();
  }

  static verifyProductAdded(ProductName) {
    CartElements.links.delete(ProductName).should("be.visible");
  }
}
