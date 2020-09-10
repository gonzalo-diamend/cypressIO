import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';

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
        indexPage.search('dress');
        articlesPage.verifyArticle('dress')
    })

    it('Search with results', function(){
        indexPage.search('hat');
        articlesPage.verifyArticle('hat')
       
    })
})