describe("Form", () => {
  it("When visit the home page, the form is visible", () => {
    cy.visit("http://localhost:9000 ");
    cy.get("[data-hook=mainForm]").should("be.visible");
  });
});
