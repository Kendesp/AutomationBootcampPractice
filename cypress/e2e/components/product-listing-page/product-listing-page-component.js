class productListingPage {

    elements = {

          getBookSpaceTitle : () => cy.contains('h1', 'Book a Space'),
          getDeskSpaces : () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(0)
            }),
          getMeetingRoompaces : () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(1)
            }),
          getEventSpace: () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(2)
            }),
          getOfficeSpace: () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(3)
            }),  
          getSuiteSpace: () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(4)
            }), 
          getNumberOfResults: () => cy.get('div[class="mb-3 lg:mb-0 relative"]').find('p'),
          getInstantBookingToggle: () => cy.get('button[id="headlessui-switch-:Rb2sn6:"]'),
          getNoResults: () => cy.get('div[class="flex flex-col items-center lg:m-0 m-4"]').find('p'), 
          getCityDropDown: () => cy.get('button[id="headlessui-listbox-button-:Rcasn6:"]'),
          getCityDropdownList: () => cy.get('div[id="or-filter-section-region-dropdown-dialog"]'),
          getCityDropdownLosAngeles : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Los Angeles'),
          getCityDropdownWashingtonDC : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Washington DC'),
          getCityDropdownBoston : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Boston'),
          getCityDropdownChicago : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Chicago'),
          getCityDropdownSanFrancisco : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('San Francisco'),
          getCityDropdownBrasilia : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Brasilia'),
          getBuildingDropDown: () => cy.get('button[id="headlessui-listbox-button-:Rcisn6:"]'),
          getBuildingDropdownList: () => cy.get('div[id="headlessui-dialog-:Rkisn6:"]') 
    }

    clickDeskSpaces(){
      this.elements.getDeskSpaces().click()
    }

    clickMeetingRoomSpaces(){
      this.elements.getMeetingRoompaces().click()
    }

    clickEventSpaces(){
      this.elements.getEventSpace().click()
    }

    clickOfficeSpaces(){
      this.elements.getOfficeSpace().click()
    }

    clickSuiteSpaces(){
      this.elements.getSuiteSpace().click()
    }

    clickInstantBooking(){
      this.elements.getInstantBookingToggle().click()
    }

    clickCityDropdown(){
      this.elements.getCityDropDown().click({force:true})
    } 

    clickLosAngelesDropdown(){
      this.elements.getCityDropdownLosAngeles().click({force:true})
    } 

    clickWashingtonDropdown(){
      this.elements.getCityDropdownWashingtonDC().click({force:true})
    } 

    clickBostonDropdown(){
      this.elements.getCityDropdownBoston().click({force:true})
    } 

    clickChicagoDropdown(){
      this.elements.getCityDropdownChicago().click({force:true})
    } 

    clickSanFranciscoDropdown(){
      this.elements.getCityDropdownSanFrancisco().click({force:true})
    } 

    clickBrasiliaDropdown(){
      this.elements.getCityDropdownBrasilia().click({force:true})
    } 

    clickBuildingDropdown(){
      this.elements.getBuildingDropDown().click({force:true})
    } 
  }

  module.exports = new productListingPage();