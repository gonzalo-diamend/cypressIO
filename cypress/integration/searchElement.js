describe('Encontrar un elemento',function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola') // Busqueda por clase
        cy.get('#search_query_top').type('second test') // Busqueda por id
        cy.get('[name="search_query"]').type('third test') // Busqueda por name
        cy.get('[placeholder="Search"]').clear() // Busqueda por name
    })
})