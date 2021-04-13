describe("Display modal of character", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.get("[data-cy=character-list]").within(() => {
      cy.get("[data-cy=character-item]").first().find("[data-cy=view-button]").click()
    })
  })

  it("opens up character modal when view button is clicked", () => {
    cy.get("[data-cy=modal-container]").should("be.visible")
  })

  it("displays modals expected content", () => {
    cy.get("[data-cy=modal-container]").within(() => {
      cy.get("[data-cy=name]").should("contain", "Luke Skywalker")
      cy.get("[data-cy=height]").should("contain", "172")
      cy.get("[data-cy=weight]").should("contain", "77")
      cy.get("[data-cy=gender]").should("contain", "male")
      cy.get("[data-cy=starships]")
      .first()
      .find("[data-cy=ship-name]")
      .should("contain", "X-wing")
    })
  })
})