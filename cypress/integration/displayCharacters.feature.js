describe("Display character-list", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("displays a header", () => {
    cy.get("[data-cy=header]").should("contain", "Star Wars UwU")
  })

  it("displays a list of 6 characters", () => {
    cy.get("[data-cy=character-list]").within(() => {
      cy.get("[data-cy=character-item]").should("have.length", 6)
    })
  })

  it("displays the expected content", () => {
    cy.get("[data-cy=character-list]").within(() => {
      cy.get("[data-cy=character-item]")
        .first()
        .find("[data-cy=name]")
        .should("contain", "Luke Skywalker")
    })
  })
})