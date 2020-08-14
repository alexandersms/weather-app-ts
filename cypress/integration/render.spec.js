// Render Test

describe("Navigation dans l'application", () => {

    it("Titre de l'application", () => {
        cy.visit("http://localhost:3000")
        cy.contains('h1', 'Weather App')
    });

    it('Titre sur le bouton', () => {
        cy.visit("http://localhost:3000")
        cy.contains('button', 'Rechercher')
    });
})