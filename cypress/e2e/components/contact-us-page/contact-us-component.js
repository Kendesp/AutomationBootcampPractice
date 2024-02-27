class contact {

    elements = {

          firstNameLabel: () => cy.get('label[for="firstName-field"]').should('have.text','First Name'),
          getFirstNameField : () => cy.get('[id="firstName-field"]').should('have.attr','placeholder','First Name'),
          lastNameLabel: () => cy.get('label[for="lastName-field"]').should('have.text','Last Name'),
          getLastNameField : () => cy.get('[id="lastName-field"]').should('have.attr','placeholder','Last Name'),
          emailLabel: () => cy.get('label[for="email-field"]').should('have.text','Email'),
          getEmailField : () => cy.get('[id="email-field"]').should('have.attr','placeholder','example@domain.com'),
          phoneLabel: () => cy.get('label[for="phone-field"]').should('have.text','Phone number (optional)'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]').should('have.attr','placeholder','(000) 000-0000'),
          formErrorMessage: () => cy.get('[id="tm-contact-error-notification"]').should('be.visible'),
          formSuccess: () => cy.get('[id="form_success"]').should('be.visible'),
          pageTitle: () => cy.get('h1').should('be.visible').should('have.text','Contact Us'),
          pageSubTitle: () => cy.get('p').should('be.visible').should('contain','From private offices and suites'),
          informationPanelImage: () => cy.get('img[asset="[object Object]"]').should('be.visible'),
          informationPanelTitle: () => cy.get('h2').should('contain','Connect With Us'),
          informationPanelSubTitle1: () => cy.get('strong').should('contain','Office Hours'),
          informationPanelSubTitle1Value1: () => cy.get('p').should('contain','Monday to Friday'),
          informationPanelSubTitle1Value2: () => cy.get('p').should('contain','9 a.m. to 5 p.m. ET'),
          informationPanelSubTitle2: () => cy.get('strong').should('contain','Address'),
          informationPanelSubTitle2Value1: () => cy.get('p').should('contain','23rd Floor'),
          informationPanelSubTitle2Value2: () => cy.get('p').should('contain','9 a.m. to 5 p.m. ET'),
          informationPanelSubTitle2Value3: () => cy.get('p').should('contain','New York, NY 10001, USA'),
          informationPanelSubTitle3: () => cy.get('strong').should('contain','General Inquiries'),
          informationPanelSubTitle3Value1: () => cy.get('p').should('contain','info@yourstudio.com'),
          informationPanelSubTitle3Value2: () => cy.get('p').should('contain','212-523-0850'),
          informationPanelSubTitle4: () => cy.get('strong').should('contain','Brokers'),
          informationPanelSubTitle4Value1: () => cy.get('p').should('contain','brokers@yourstudio.com'),
          spanGeneralInquiry: () => cy.get('span').should('contain','I have a general inquiry'),
          interestedInLocationLabel: () => cy.get('label').should('contain','interested in... (optional)'),
          getLocationField : () => cy.get('[id="headlessui-listbox-button-:ro:"]').should('have.attr','aria-haspopup','listbox'),
          spanScheduleTour: () => cy.get('span').should('contain','I’d like to schedule a tour'),
          idLikeToScheduleLabel: () => cy.get('[id="headlessui-listbox-label-:r65:"]'),
          getIdLikeToScheduleField: () => cy.get('[id="headlessui-listbox-button-:r66:"]'),
          imInterestedInLabel: () => cy.get('p').should('contain','I’m interested in...'),
          officesWSharedAmenitiesLabel: () => cy.get('[id="headlessui-label-:r6p:"]').should('have.text','Offices with shared amenities'),
          getOfficesWSharedAmenitiesCheck: () => cy.get('[id="headlessui-switch-:r6o:"]'),
          meetingRoomsLabel: () => cy.get('[id="headlessui-label-:r6t:"]').should('have.text','Meeting Rooms'),
          getMeetingRoomsCheck: () => cy.get('[id="headlessui-switch-:r6s:"]'),
          coworkingMembershipLabel: () => cy.get('[id="headlessui-label-:r71:"]').should('have.text','Coworking membership (single desks)'),
          getCoworkingMembershipCheck: () => cy.get('[id="headlessui-switch-:r70:"]'),
          eventSpacesLabel: () => cy.get('[id="headlessui-label-:r6r:"]').should('have.text','Event spaces'),
          getEventSpacesCheck: () => cy.get('[id="headlessui-switch-:r6q:"]'),
          customOfficeLabel: () => cy.get('[id="headlessui-switch-:r6u:"]').should('have.text','A custom office with private amenities'),
          getCustomOfficeCheck: () => cy.get('[id="headlessui-switch-:r6q:"]'),
          howCanWeAssistYouLabel: () => cy.get('label[for="assistDetails-field"]').should('have.text','How can we assist you?'),
          getHowCanWeAssistField : () => cy.get('[id="assistDetails-field"]').should('have.attr','maxlength','1500'),
          emailSubscriptionLabel: () => cy.get('[id="headlessui-label-:r8:"]').should('have.text','I would like to receive email updates from Studio by Tishman Speyer'),
          getEmailSubscriptionCheck: () => cy.get('[id="headlessui-switch-:r7:"]'),
          getSubmitButton: () => cy.get('button[type="submit"]')
    } 

    typeFirstName(firstName){
      this.elements.getFirstNameField().type(firstName)
    }

    typeLastName(lastName){
      this.elements.getLastNameField().type(lastName)
    }

    typeEmail(email){
      this.elements.getEmailField().type(email)
    }

    typePhone(phone){
      this.elements.getPhoneNumberField().type(phone)
    }

    clickSubmit(){
      this.elements.getSubmitButton().click()
    }
  }

  module.exports = new contact();

