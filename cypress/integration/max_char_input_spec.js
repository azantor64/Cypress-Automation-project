


describe('Text box with with max chars',() => {
    it('displays the appropriate remaining characters count',() =>{
       
        cy.visit('http://localhost:3000/example-2')
        cy.get('span')
            .invoke('text')
            .should('equal','15')

        cy.get('input').type('hello')

        cy.get('span')
            .invoke('text')
            .should('equal','10')
        cy.get('input').type('arifuzantor')

        cy.get('span')
            .invoke('text')
            .should('equal','0')

            
    })

    it('prevents the user from typing more characters once max is exceeded ',()=>{
        cy.visit('http://localhost:3000/example-2')

        cy.get('input').type('oamardeshermatitumarpore')
        
        cy.get('input')
            .should('have.attr','value','oamardeshermati')

    })

})