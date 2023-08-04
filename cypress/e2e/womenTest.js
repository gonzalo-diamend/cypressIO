describe('checkboxes',function(){

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })

    it('Checkbox', function(){
        cy.get('#layered_id_attribute_group_3').check();
        cy.get('#layered_category_8').check();
    })

    it('Order by highest price', function(){
        cy.get('#selectProductSort').select('Price: Highest first');

    })
})