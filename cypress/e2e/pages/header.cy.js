import headerComponent from '../components/global-components/header-component';

describe('Validacion de Header', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit('/new/spaces?region=new-york')
    cy.acceptCookiesIfExists()
    
  });  

  it('Logo de la pagina debe redireccionar al home', () => {
    headerComponent.clickTishmanLogoHeader()
    headerComponent.elements.urlValueHeader().should('eq', Cypress.config('baseUrl'))
  });

  it('Boton coworking debe redireccionar a Locations', () => {
    headerComponent.clickCoworkingHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.com/locations/')
  });

  it('Boton Office Suites debe redireccionar a Studio-Private', () => {
    headerComponent.clickOfficeSuitesHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.com/studio-private/')
  })

  it('Boton Meetings & Events debe redireccionar a Studio-Gather', () => {
    headerComponent.clickMeetingsEventsHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.com/studio-gather/')
  })
 
  it('Boton Virtual Office debe redireccionar a Virtual-Office-Signup', () => {
    headerComponent.clickVirtualOfficeHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.com/virtual-office-signup/')
  })

  it('Boton Our Company debe redireccionar a About us', () => {
    headerComponent.clickOurCompanyHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.com/about-us/')
  })

  it('Boton Book a Space debe redireccionar al Product Listing Page', () => {
    headerComponent.clickBookSpaceHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.staging.tishmanspeyer.com/new/spaces?region=new-york')
  })

  it('Boton Contact Us debe redireccionar al formulario Contact Us', () => {
    headerComponent.clickContactUsHeader()
    headerComponent.elements.urlValueHeader().should('eq', 'https://yourstudio.staging.tishmanspeyer.com/new/contact')
  })
})