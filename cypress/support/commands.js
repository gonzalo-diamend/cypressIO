import { faker } from '@faker-js/faker';
export let fakerName = faker.name.firstName();
const usrLoginInput = '#userName';
const usrPassInput = '#password';
const signInBtn = '[type=submit]';
const successModal =
  '.ab-in-app-message  ab-background ab-modal-interactions ab-modal ab-centered';
const closeSuccessModalBtn = '.ab-close-button';

Cypress.Commands.add('verifyLogout', () => {
  cy.visit('/');
  cy.wait(1000);
  cy.url().then(($url) => {
    if ($url.includes('/projects')) {
      cy.logout();
    } else {
      cy.visit('/login');
    }
  });
});

Cypress.Commands.add('login', (userMail, buyerPassword) => {
  const userDetails = Cypress.env('userDetails');
  cy.get(usrLoginInput).type(userMail);
  cy.get(usrPassInput).type(buyerPassword, { force: true });
});

Cypress.Commands.add('logout', () => {
  cy.contains('operations').click();
  cy.contains('Log Out').click();
});

Cypress.Commands.add('iframeVisible', (iframeLocator, elementLocator) => {
  cy.wrap(iframeLocator)
    .its('0.contentDocument.body')
    .find(elementLocator)
    .should('be.visible');
});

Cypress.Commands.add(
  'iframeContain',
  (iframeLocator, elementLocator, string) => {
    cy.wrap(iframeLocator)
      .its('0.contentDocument.body')
      .find(elementLocator)
      .and('contain', string);
  }
);

Cypress.Commands.add('iframeClick', (iframeLocator, elementLocator) => {
  cy.wrap(iframeLocator)
    .its('0.contentDocument.body')
    .find(elementLocator)
    .click({ force: true, multiple: true });
});

Cypress.Commands.add(
  'iframeClickContain',
  (iframeLocator, elementLocator, string) => {
    cy.wrap(iframeLocator)
      .its('0.contentDocument.body')
      .find(elementLocator)
      .and('contain', string)
      .click({ force: true, multiple: true });
    cy.wait(750);
  }
);

Cypress.Commands.add('iframeType', (iframeLocator, elementLocator, string) => {
  cy.wrap(iframeLocator)
    .its('0.contentDocument.body')
    .find(elementLocator)
    .type(string, { force: true });
});

Cypress.Commands.add('doSelect', (locator, value) => {
  cy.get(locator).select(value, { force: true });
});

Cypress.Commands.add('doClear', (locator) => {
  cy.get(locator).clear({ force: true });
});

Cypress.Commands.add('doType', (locator, string) => {
  cy.get(locator).clear({ force: true }).type(string, { force: true });
});

Cypress.Commands.add('itContain', (locator, string) => {
  cy.get(locator).should('contain', string);
});

Cypress.Commands.add('doClick', (locator) => {
  cy.get(locator).click({ force: true });
});

Cypress.Commands.add("beEnabled", (locator) => {
  cy.get(locator).should("be.enabled");
});

Cypress.Commands.add('doContains', (locator) => {
  cy.contains(locator).click({ force: true });
});

Cypress.Commands.add('doMultipleClick', (locator) => {
  cy.get(locator).click({ multiple: true, force: true });
});

Cypress.Commands.add('notVisible', (locator) => {
  cy.get(locator).should('not.be.visible');
});

Cypress.Commands.add("beVisible", (locator) => {
  cy.get(locator).should("be.visible");
});

Cypress.Commands.add('itExist', (locator) => {
  cy.get(locator).should('exist');
});

Cypress.Commands.add('containHref', (locator, label, href) => {
  cy.get(locator)
    .should('contain', label)
    .and('have.attr', 'href')
    .and('include', href);
});

Cypress.Commands.add('closeDrawer', () => {
  const drawerCloseButton = '.menu_close > svg > #Rounded > path';
  cy.doClick(drawerCloseButton);
});

Cypress.Commands.add('isANumber', (locator) => {
  cy.get(locator)
    .invoke('text')
    .should('match', /^[0-9]*$/);
});

Cypress.Commands.add('containClick', (locator) => {
  cy.contains(locator).should('exist').click({ force: true });
});

Cypress.Commands.add('validateCarMake', (carMakes, parameter) => {
  cy.wrap(carMakes).should('include', parameter);
});

// Cypress.Commands.add('authSignIn', baseUrl, () => {
//   cy.visit(Cypress.env('frontUrl'), {
//     auth: {
//       username: `${Cypress.env("username")}`,
//       password: `${Cypress.env("password")}`,
//     },
//   });
//   cy.url().should('contain', '/sign-in')
// });

Cypress.Commands.add('closeSuccessModal', () => {
  cy.wait(2000);
  cy.expect(successModal).to.exist;
  cy.get(closeSuccessModalBtn).click();
});

Cypress.Commands.add('generateRandomVIN', () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let vin = '';

  for (let i = 0; i < 17; i++) {
    const randomIndex = Cypress._.random(0, characters.length - 1);
    vin += characters.charAt(randomIndex);
  }

  return vin;
});
