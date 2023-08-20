describe('login Test', () => {
    const username = 'Baraaob96';
    const password = 'Baraa123456789@';
it(' log in ', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');

   
    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);

    
    cy.get('#loginFrm > fieldset > .btn').click();

    
    
});
   
});
