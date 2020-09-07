describe('Search test cases',function(){

    before(function(){
        cy.log('Ejecutando preconditions')
    })

    after(function(){
        cy.log('Ejecutando preconditions')
    })

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Search with results', function(){
  
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("dress");
    })

    it('Search with results', function(){
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("hat");
       
    })
})