class header {

    elements = {

          getIcon : () => cy.get('a > img:first').should('be.visible').should('have.attr','alt','Studio by Tishman Speyer'),
          coworkingHeader: () => cy.get('div > a[href*="https://yourstudio.com/locations/"]:first').should('be.visible').should('have.text','Coworking'),
          officeSuitesHeader: () => cy.get('div > a[href*="https://yourstudio.com/studio-private/"]:first').should('be.visible').should('have.text','Office Suites'), 
          meetingsEventsHeader: () => cy.get('div > a[href*="https://yourstudio.com/studio-gather/"]:first').should('be.visible').should('have.text','Meetings & Events'),
          virtualOfficeHeader: () => cy.get('div > a[href*="https://yourstudio.com/virtual-office-signup/"]:first').should('be.visible').should('have.text','Virtual Office'),
          ourCompanyHeader: () => cy.get('div > a[href*="https://yourstudio.com/about-us/"]:first').should('be.visible').should('have.text','Our Company'),
          bookSpaceHeader: () => cy.get('div > button:first').should('be.visible').should('have.text','Book a space'),
          contactUsHeader: () => cy.get('div > button:first').next().should('be.visible').should('have.text','Contact us'),
          urlValueHeader: () => cy.url('')
    }

    clickTishmanLogoHeader(){
      this.elements.getIcon().click()
    }

    clickCoworkingHeader(){
      this.elements.coworkingHeader().click()
    }

    clickOfficeSuitesHeader(){
      this.elements.officeSuitesHeader().click()
    }

    clickMeetingsEventsHeader(){
      this.elements.meetingsEventsHeader().click()
    }

    clickVirtualOfficeHeader(){
      this.elements.virtualOfficeHeader().click()
    }

    clickOurCompanyHeader(){
      this.elements.ourCompanyHeader().click()
    }

    clickBookSpaceHeader(){
      this.elements.bookSpaceHeader().click()
    }

    clickContactUsHeader(){
      this.elements.contactUsHeader().click()
    }
  }

  module.exports = new header();