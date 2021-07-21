describe('date component works', function () {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    });
    it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns('Rupak');
            cy.contains('Click for JS Prompt').click();
        });
        cy.get('#result').contains('You entered: Rupak');
    })

});
