
describe('Signup Test', () => {
    const username = 'Baraaob96';
    const password = 'Baraa123456789@';
  
    it('should sign up with a new account', () => {
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
  
   
      cy.contains('Register Account').click();
      cy.get('#accountFrm > fieldset > .btn').click();
      cy.get('#AccountFrm_firstname').type('Bara');
      cy.get('#AccountFrm_lastname').type('Al-azzam');
      cy.get('#AccountFrm_email').type('baraaob96@gmail.com');
      cy.get('#AccountFrm_telephone').type("123456789");
      cy.get('#AccountFrm_address_1').type('Irbid,Jordan');
      cy.get('#AccountFrm_country_id').select('Jordan');
      
      cy.get('#AccountFrm_zone_id').select('Irbid')
      cy.get('#AccountFrm_city').type('Irbid');
      cy.get('#AccountFrm_postcode').type('21110');
      cy.get('#AccountFrm_loginname').type(username);
      cy.get('#AccountFrm_password').type(password);
      cy.get('#AccountFrm_confirm').type(password);
      cy.get('[for="AccountFrm_newsletter1"]').click()
      cy.get('#AccountFrm_agree').check()
      cy.get('.col-md-2 > .btn').click()


  
    });
   
});


  