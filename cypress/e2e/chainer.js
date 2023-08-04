describe('Busqueda por strings',function(){

    it('Encadenado de comandos', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').clear().type('hola')
        
    })
})