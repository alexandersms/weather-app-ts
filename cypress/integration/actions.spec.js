context("Actions", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Ville non trouvée", () => {
        cy.get('.input-search')
            .type('djhhjjhkdskkjd').should('have.value', 'djhhjjhkdskkjd')
        cy.contains('button', 'Rechercher').click()
        cy.wait(2500)
    });

    it("Ville obligatoire", () => {
        cy.get('.input-search')
        cy.contains('button', 'Rechercher').click()
        cy.wait(2500)
    });

    it("Afficher la météo de la ville", () => {
        cy.get('.input-search')
            .type('paris')
        cy.contains('button', 'Rechercher').click()
        cy.wait(2500)
    });

})