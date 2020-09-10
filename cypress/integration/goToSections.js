describe('Go to different sections',function(){


    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Sections', function(){
      cy.get('[class=sf-with-ul]').first().click();
    })

    it('Dress section', function(){
      cy.get('[class=sf-with-ul]').eq(3).click();
    })
})