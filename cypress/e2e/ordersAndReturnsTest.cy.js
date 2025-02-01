import { orderInformationLocators, orderAndReturnsFormLocators } from "../integration/util.js";
import { orderAndReturnsData , orderAndReturnsWrongData} from "../fixtures/orderAndReturnsData.json";
import { orderInformationData, orderAndReturnsWarnings } from "../fixtures/orderInformation.json";
import "allure-cypress";

describe('Orders and Returns test', () => {
  beforeEach(() => {

    cy.visit('/sales/guest/form/');

  });

  it('Fill up the order information to search for, using email', () => {
    cy.ordersAndReturnsByEmail(orderAndReturnsData.orderId, orderAndReturnsData.billingLastName , orderAndReturnsData.email);
    cy.get(orderInformationLocators.orderNumber).should('include.text', orderAndReturnsData.orderId);
    cy.get(orderInformationLocators.productName).should('have.text', orderInformationData.productName);
    cy.get(orderInformationLocators.productSku).should('have.text', orderInformationData.productSKU);
    cy.get(orderInformationLocators.orderAmount).should('have.text', orderInformationData.orderAmount);
  });

  it("Fill up the order information to search for, using zip code", () => {
    cy.ordersAndReturnsByZipCode(orderAndReturnsData.orderId, orderAndReturnsData.billingLastName, orderAndReturnsData.zipCode);
    cy.get(orderInformationLocators.orderNumber).should('include.text', orderAndReturnsData.orderId);
    cy.get(orderInformationLocators.productName).should('have.text', orderInformationData.productName);
    cy.get(orderInformationLocators.productSku).should('have.text', orderInformationData.productSKU);
    cy.get(orderInformationLocators.orderAmount).should('have.text', orderInformationData.orderAmount);
  });

  it('Fill up the order information with wrong email', () => {
    cy.ordersAndReturnsByEmail(orderAndReturnsData.orderId, orderAndReturnsData.billingLastName, orderAndReturnsWrongData.email);
    cy.get(orderAndReturnsFormLocators.incorrectDataWarning).should('have.text', orderAndReturnsWarnings.wrongInformationWarning);
  });

  it('Fill up the order information with the wrong Last Name', () => {
    cy.ordersAndReturnsByEmail(orderAndReturnsData.orderId, orderAndReturnsWrongData.billingLastName, orderAndReturnsData.email);
    cy.get(orderAndReturnsFormLocators.incorrectDataWarning).should('have.text', orderAndReturnsWarnings.wrongInformationWarning);
  });

  it('Fill up the order information with the wrong orderID', () => {
    cy.ordersAndReturnsByEmail(orderAndReturnsWrongData.orderId, orderAndReturnsData.billingLastName, orderAndReturnsData.email);
    cy.get(orderAndReturnsFormLocators.incorrectDataWarning).should('have.text', orderAndReturnsWarnings.wrongInformationWarning);
  });

});
