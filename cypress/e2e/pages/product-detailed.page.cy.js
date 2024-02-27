import productDetailedPage from '../components/product-detailed-page/product-detailed-page-component';

describe('RENAME ME!', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.acceptCookiesIfExists()
    cy.visit('/new/the-spiral/willow')
  });


  //⦁	Revisar los componentes visuales del formulario tales como, título, capacidad, descripción.
/*
  it('Validar y verificar componentes visuales del room', () => {
    productDetailedPage.elements.getProductDescriptionTitle()
    productDetailedPage.elements.getProductDescriptionCapacity()
    productDetailedPage.elements.getProductDescriptionCapabilities()
    productDetailedPage.elements.getProductDescriptionSummary1()
    productDetailedPage.elements.getProductDescriptionSummary2()
    productDetailedPage.elements.getProductDescriptionAdditionalServices()
    productDetailedPage.elements.getProductDescriptionLocation()
  })
*/
  //⦁	Revisar los componentes visuales del panel de la izquierda tales como, componente del calendario, duración, tabs de espacios disponibles y botones de instant book e inquire.
  it('Validar y verificar componentes visuales para hacer el booking', () => {
    productDetailedPage.clickDateButton()
    productDetailedPage.clickDateDay()
    productDetailedPage.clickSomewhereElse()
    productDetailedPage.clickDurationButton()
    productDetailedPage.selectDuration()
    productDetailedPage.selectAvailableTime()
    productDetailedPage.clickInstantBook()
  })
})