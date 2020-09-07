export class loginPage {
    navigate(){
        cy.visit('www.google.com.ar')
    }

    addData(){
        cy.get('userField').type('username')
        cy.get ('passwordField').type('password')
    }
}