import productListingPage from '../components/product-listing-page/product-listing-page-component';

describe('RENAME ME!', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit('/new/spaces?region=new-york&type=meeting_room')
    cy.acceptCookiesIfExists()
  });



  /*⦁	Comprobar que cada uno de los tipos de espacio retornen resultados que se muestran en el Front End y 
  que los mismos cambien de forma dinámica automáticamente. Se puede utilizar el componente 
  “1 to 8 of 49 results” como base para comprobar que efectivamente el número de resultados cambie 
  con cada tipo de espacio. */

  it('Validar cada tipo de espacio muestre sus propios resultados', () => {
    productListingPage.clickDeskSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 8 of 9 results') 

    productListingPage.clickMeetingRoomSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 8 of 16 results') 

    productListingPage.clickEventSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 8 of 10 results') 

    productListingPage.clickOfficeSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 8 of 12 results') 

    productListingPage.clickSuiteSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 3 of 3 results') 
  })

  

  //⦁	Comprobar que el toogle “Instant Book” funcione correctamente y que los productos disponibles cambien.
  it('Validar Instant book cambie los productos disponibles', () => {
    productListingPage.clickInstantBooking()
    
    productListingPage.clickDeskSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 8 of 9 results') 

    productListingPage.clickMeetingRoomSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 8 of 16 results') 

    productListingPage.clickEventSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 4 of 4 results') 

    productListingPage.clickOfficeSpaces()
    cy.wait(2000)
    productListingPage.elements.getNumberOfResults().contains('1 to 1 of 1 results') 

    productListingPage.clickSuiteSpaces()
    cy.wait(2000)
    productListingPage.elements.getNoResults().contains('t find any spaces that match your search.')
  })

    //⦁	Comprobar que el combo de las ciudades siempre tenga los mismos resultados. Se pueden almacenar en 
  //un arreglo y luego comprobar su existencia mediante un ciclo forEach.
  
  it('Comprobar que el combo de las ciudades tenga los mismos valores', () => {
    const itemsList = ["New York","Los Angeles","Washington DC","Boston","Chicago","San Francisco","Brasilia"]
    productListingPage.clickCityDropdown()
    productListingPage.elements.getCityDropdownList().then(() =>{
        for(const item of itemsList){
          productListingPage.elements.getCityDropdownList().should('contain.text', item)
        }
    })
});

  //⦁	Revisar que los buildings siempre tengan los mismos resultados. Recordar que este combo cambia los 
  //ítems dependiendo de la ciudad seleccionada.

  it('Comprobar que el combo de los buildings tenga los mismos valores', () => {
    const newYork = ["View All","The Spiral","The JACX","1230 Sixth Avenue","1270 Sixth Avenue","600 Fifth Avenue","45 Rockefeller Plaza","Studio Grand Central","300 Park Avenue","11 West 42nd Street","CitySpire","175 Varick Street"]
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of newYork){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })

    const losAngeles = ["Studio Beverly Hills"]
    productListingPage.clickCityDropdown()
    productListingPage.clickLosAngelesDropdown()
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of losAngeles){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })

    const washingtonDC = ["900 19th Street"]
    productListingPage.clickCityDropdown()
    productListingPage.clickWashingtonDropdown()
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of washingtonDC){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })

    const boston = ["125 High Street"]
    productListingPage.clickCityDropdown()
    productListingPage.clickBostonDropdown()
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of boston){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })

    const chicago = ["The Franklin"]
    productListingPage.clickCityDropdown()
    productListingPage.clickChicagoDropdown()
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of chicago){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })

    const sanFrancisco = ["View All","595 Market Street","333 Bush Street"]
    productListingPage.clickCityDropdown()
    productListingPage.clickSanFranciscoDropdown()
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of sanFrancisco){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })

    const brasilia = ["View All","Concordia","AQWA"]
    productListingPage.clickCityDropdown()
    productListingPage.clickBrasiliaDropdown()
    productListingPage.clickBuildingDropdown()
    productListingPage.elements.getBuildingDropdownList().then(() =>{
        for(const item of brasilia){
          productListingPage.elements.getBuildingDropdownList().should('contain.text', item)
        }
    })
});
  
})