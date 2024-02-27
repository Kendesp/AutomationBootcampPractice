class productDetailedPage {

    elements = {

          getProductDescriptionTitle : () => cy.get('[id="or-product-description-block-title"]').should('contain','Willow'),
          getProductDescriptionCapacity: () => cy.get('div[class="leading-1.5 pt-2.5"]').find('p').should('contain','Capacity: 18'),
          getProductDescriptionSummary1: () => cy.get('#or-product-description-block-body').find('p:first').should('contain','Looking for a wow-worthy environment to host your next board meeting or off-site? Step inside the Willow, featuring floor-to-ceiling windows with breathtaking views of the New'),
          getProductDescriptionSummary2: () => cy.get('#or-product-description-block-body').find('p:first').next().should('contain','York City skyline. Its prime location next to the ZO Clubhouse means your team can enjoy even more space to get inspired, plus premium catering options from Cafe Llama when it’s time to refuel.'),
          getProductDescriptionCapabilities: () => cy.get('h2[data-section-title="true"]').should('contain','Space Capabilities and Features'),
          getProductDescriptionAdditionalServices: () => cy.get('h2[data-simple-text-block-title="true"]').should('contain','Additional Services'),
          getProductDescriptionLocation: () => cy.get('h2[data-section-title="true"]').should('contain','Location'),
          getDateButton :() => cy.get('button[name="date"]'),
          getDateDay: () => cy.get('button[name="day"]').contains('29'),
          getDurationButton: () => cy.get('button').find('span').contains('30 minutes'), 
          getDurationOption: () => cy.get('ul li').contains('1 hour'),
          getAvailableTime: () => cy.get('button').find('div').contains('11:30 a.m.'),
          getInstantBookButton: () => cy.get('button').contains('Instant Book')  
    }

    clickDateButton(){
      this.elements.getDateButton().click()
    }

    clickDateDay(){
      this.elements.getDateDay().click()
    }

    clickSomewhereElse(){
      this.elements.getProductDescriptionSummary1().click({force: true})
    }

    clickDurationButton(){
      this.elements.getDurationButton().click()
    }

    selectDuration(){
      this.elements.getDurationOption().click()
    }

    selectAvailableTime(){
      this.elements.getAvailableTime().click()
    }

    clickInstantBook(){
      this.elements.getInstantBookButton().click()
    }
  }

  module.exports = new productDetailedPage();