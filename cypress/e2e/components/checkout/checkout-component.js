import { faker } from '@faker-js/faker'

class checkout {

    elements = {

          getH1LabelByText : (text) => cy.contains('h1', text),
          getH2LabelByText : (text) => cy.contains('h2', text),
          getH3LabelByText : (text) => cy.contains('h3', text),
          getH4LabelByText : (text) => cy.contains('h4', text),
          getLabelByText : (text) => cy.contains(text),
          getFirstNameLabel : () => cy.contains('First Name'),
          getLastNameLabel : () => cy.contains('Last Name'),
          getEmailNameLabel : () => cy.contains('Email'),
          getPhoneNumberLabel : () => cy.contains('Phone Number'),
          getCompanyNameLabel : () => cy.contains('Company Name'),
          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getCompanyNameField : () => cy.get('[id="company-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
          getDiscountButton: () => cy.get('type="button"').contains('Discount Code'),
          getProceedToPaymentButton: () => cy.get('[type="submit"]').contains('Proceed to Payment'),
          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
          getCompanyField: () => cy.get('[id="company-field"]'),
          getCompletePaymentButton: () => cy.get('[type="submit"]').contains('Proceed to Payment'),
          getReservationDateAndTimeText: () => cy.get('[class="mb-2"]').children().eq(2),
          getFirstNameWarningMessage:()=> cy.get('[id="firstName-field-hints"]').contains('Please enter your first name.'),
          getLastNameWarningMessage:()=> cy.get('[id="lastName-field-hints"]').contains('Please enter your last name.'),
          getEmailWarningMessage:()=> cy.get('[id="email-field-hints"]').contains('Please enter your email.'),
          getPhoneNumberWarningMessage:()=> cy.get('[id="phone-field-hints"]').contains('Please enter a valid phone number in the following format: (000) 000-0000'),
          getTheSpiralLabel: () => cy.get('div').find('p').contains('The Spiral'),
          getWilllowLabel: () => cy.get('div').find('h2').contains('Willow'),  
          getFeeDetails: () => cy.get('div').find('p').contains('$200.00/hour x 1 hour(s)'),
          getTotalDue: () => cy.get('div').find('p').contains('$200.00'),
          getOopsMessage: () => cy.get('div').find('p').contains('Oops! Something went wrong'),
          getErrors: () => cy.get('ul[class="list-disc ml-6"]').children(), 
          getDiscountCodeButton: () => cy.get('[type="button"]').contains('Discount Code'),
          getDiscountField: () => cy.get('#discount-field'),  
          getApplyCodeButton: () => cy.get('[type="button"]').contains('Apply code'),
          discountCodeError: () => cy.get('div[class="grow"]').find('p').contains('Invalid discount code. Please try again.'),
          discountCodeCard: (text) => cy.get('div[class="text-neutrals-800"]').find('span').contains(text),
          discountFeeDetail: (text) => cy.get('div').find('p').contains(text),
          getSavedContactInformation: () => cy.get('div').find('p[class="text-neutrals-700 text-14 lg:text-16 max-w-[34rem] mb-4"]').should('be.visible'),
          getSavedDiscountCode: () => cy.get('div').find('p[class="text-neutrals-700 text-14 lg:text-16 max-w-[34rem]"]').should('be.visible'),
          getPayNowButton: () => cy.get('button[type="submit"]').contains('Complete payment'),
          getEditButton: () => cy.get('span[class="text-neutrals-700 text-14 cursor-pointer"]').contains('Edit'),  
          getConfirmationHeader: () => cy.get('p').contains('Confirmation').should('be.visible'), 
          getThankYouHeader: () => cy.get('h4').contains('Thank you for your order!').should('be.visible'), 
          getConfirmationNumber: () => cy.get('p').contains('Your confirmation number is').should('be.visible'), 
          getAddGuestButton: () => cy.get('button[type="submit"]').contains('Add guest information'),
          getReservationDetails: () => cy.get('div[class="px-4 md:px-0"]').find('div[class="flex flex-col gap-8 mt-6"]'),
          getBackToSpace: () => cy.get('a').contains('Back to Space Details'),  
      }

      clickProceedToPayment(){
            this.elements.getProceedToPaymentButton().click()
          }

      clickDiscountCode(){
            this.elements.getDiscountCodeButton().click()
          }

      typeDiscountCode(texto){
            this.elements.getDiscountField().type(texto)
      }    

      clickApplyCode(){
            this.elements.getApplyCodeButton().click()
          }

      clickPayNow(){
            this.elements.getPayNowButton().click()
          }

      clickEditContactInfo(){
            this.elements.getEditButton().click()
          }    

    fillContactInformationAndProceedToPayment = () => {

      this.elements.getFirstNameField().should('be.visible').type(faker.person.firstName())
      this.elements.getLastNameField().should('be.visible').type(faker.person.lastName())
      this.elements.getEmailField().should('be.visible').type(faker.internet.email())
      this.elements.getPhoneNumberField().should('be.visible').type('(001) 123-4567')
      this.elements.getCompanyField().should('be.visible').type(faker.company.name())
      this.elements.getProceedToPaymentButton().click({force: true})
      }

      editContactInformationAndProceedToPayment = () => {

            this.elements.getFirstNameField().should('be.visible').clear().type(faker.person.firstName())
            this.elements.getLastNameField().should('be.visible').clear().type(faker.person.lastName())
            this.elements.getEmailField().should('be.visible').clear().type(faker.internet.email())
            this.elements.getPhoneNumberField().should('be.visible').clear().type('(001) 123-4567')
            this.elements.getCompanyField().should('be.visible').clear().type(faker.company.name())
            this.elements.getProceedToPaymentButton().click({force: true})
            }

    fillNegativeCasesPhoneEmail = () => {

      this.elements.getEmailField().should('be.visible').type(faker.person.fullName())
      this.elements.getPhoneNumberField().should('be.visible').type(faker.phone.number())
     
    }

   
    fillCheckoutIframesInformation = () => {

      //IFRAME Waiting Time.
      cy.wait(5000)

      //ADDRESS INFORMATION.
      cy.get('.StripeElement').children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-addressLine1Input"]').clear().type('29 Garden Avenue')
            cy.wrap($body).find('[id="Field-localityInput"]').clear().type('Hawthorne')
            cy.wrap($body).find('[id="Field-administrativeAreaInput"]').select('New Jersey')
            cy.wrap($body).find('[id="Field-postalCodeInput"]').clear().type('07506')
      })

      //CREDIT CARD INFORMATION.
      cy.get('[id="main-content"]').children().eq(0).children().eq(0).children().eq(2).children().eq(3).children().eq(1).children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-numberInput"]').clear().type('4242 4242 4242 4242')
            cy.wrap($body).find('[id="Field-expiryInput"]').clear().type('03 / 30')
            cy.wrap($body).find('[id="Field-cvcInput"]').clear().type('999')
      })
    }

    fillNegativeCasesZipCodeAndCardInfo = () => {

      //IFRAME Waiting Time.
      cy.wait(5000)

      //ADDRESS INFORMATION.
      cy.get('.StripeElement').children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-addressLine1Input"]').type('Av Jacobo Majluta')
            cy.wrap($body).find('[id="Field-localityInput"]').type('Ciudad Bonita')
            cy.wrap($body).find('[id="Field-administrativeAreaInput"]').select('Alabama')
            cy.wrap($body).find('[id="Field-postalCodeInput"]').type('23KJEM')
      })

      //CREDIT CARD INFORMATION.
      cy.get('[id="main-content"]').children().eq(0).children().eq(0).children().eq(3).children().eq(3).children().eq(1).children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-numberInput"]').type('1111 2222 3333 4444')
            cy.wrap($body).find('[id="Field-expiryInput"]').type('30 / 30')
            cy.wrap($body).find('[id="Field-cvcInput"]').type('KKK')
      })
    }

    getStripeElements = () => {

      //IFRAME Waiting Time.
      cy.wait(5000)

      //ADDRESS INFORMATION.
      cy.get('.StripeElement').children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-addressLine1Input"]').should('be.visible')
            cy.wrap($body).find('[id="Field-localityInput"]').should('have.css', 'opacity', '1')
            cy.wrap($body).find('[id="Field-administrativeAreaInput"]').should('have.css', 'opacity', '1')
            cy.wrap($body).find('[id="Field-postalCodeInput"]').should('have.css', 'opacity', '1')
      })

      //CREDIT CARD INFORMATION.
      cy.get('[id="main-content"]').children().eq(0).children().eq(0).children().eq(2).children().eq(3).children().eq(1).children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-numberInput"]').should('be.visible')
            cy.wrap($body).find('[id="Field-expiryInput"]').should('be.visible')
            cy.wrap($body).find('[id="Field-cvcInput"]').should('be.visible')
      })
    }

    getStripeWarningElements = () => {

      //IFRAME Waiting Time.
      cy.wait(5000)

      //ADDRESS INFORMATION.
      cy.get('.StripeElement').children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-addressLine1Error"]')
            
      })

      //CREDIT CARD INFORMATION.
      cy.get('[id="main-content"]').children().eq(0).children().eq(0).children().eq(3).children().eq(3).children().eq(1).children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-numberError"]')
            cy.wrap($body).find('[id="Field-expiryError"]')
            cy.wrap($body).find('[id="Field-cvcError"]')
      })
    }
  }

  module.exports = new checkout();