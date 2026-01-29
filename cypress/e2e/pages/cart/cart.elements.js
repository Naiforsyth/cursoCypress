export class CartElements {
  static get buttons() {
    return {
      get placeOrder() {
        return cy.contains('button', 'Place Order');
      },
    };
  }

  static get links() {
    return {
      delete(productName) {
        return cy.contains("td", productName).closest("tr").find("a");
      },
    };
  }
}
