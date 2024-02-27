import {faker} from '@faker-js/faker'
import contactUsComponent from '../components/contact-us-page/contact-us-component';

describe('RENAME ME!', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit('/new/contact')
    cy.acceptCookiesIfExists()
  });

//-Revisar los componentes visuales del formulario tales como, título, subtítulo, panel de información a la derecha.
  it('Validacion de componentes visuales', () =>{
    contactUsComponent.elements.pageTitle()
    contactUsComponent.elements.pageSubTitle()
    contactUsComponent.elements.firstNameLabel()
    contactUsComponent.elements.getFirstNameField()
    contactUsComponent.elements.lastNameLabel()
    contactUsComponent.elements.getLastNameField()
    contactUsComponent.elements.emailLabel()
    contactUsComponent.elements.getEmailField()
    contactUsComponent.elements.phoneLabel()
    contactUsComponent.elements.getPhoneNumberField()
    contactUsComponent.elements.informationPanelImage()
    contactUsComponent.elements.informationPanelTitle()
    contactUsComponent.elements.informationPanelSubTitle1()
    contactUsComponent.elements.informationPanelSubTitle1Value1()
    contactUsComponent.elements.informationPanelSubTitle1Value2()
    contactUsComponent.elements.informationPanelSubTitle2()
    contactUsComponent.elements.informationPanelSubTitle2Value1()
    contactUsComponent.elements.informationPanelSubTitle2Value2()
    contactUsComponent.elements.informationPanelSubTitle2Value3()
    contactUsComponent.elements.informationPanelSubTitle3()
    contactUsComponent.elements.informationPanelSubTitle3Value1()
    contactUsComponent.elements.informationPanelSubTitle3Value2()
    contactUsComponent.elements.informationPanelSubTitle4()
    contactUsComponent.elements.informationPanelSubTitle4Value1()
  })

  //  -Utilizar la librería de JS llamada faker, para llenar los campos solicitados.
	// -Realizar un envío del formulario y comprobar que el modal de success se muestre.
  it('Envio de formulario exitoso', () => {
    contactUsComponent.typeFirstName(faker.person.firstName())
    contactUsComponent.typeLastName(faker.person.lastName())
    contactUsComponent.typeEmail(faker.internet.email())
    contactUsComponent.typePhone(faker.phone.number("##########"))
    contactUsComponent.clickSubmit()
    contactUsComponent.elements.formSuccess()
  })

  //-Comprobar que el formulario no se pueda enviar sin la información requerida.
  //	-Comprobar escenarios negativos en el correo electrónico y teléfono.
  it('Envio de formulario fallido', () => {
    contactUsComponent.typeFirstName(faker.person.firstName())
    contactUsComponent.typeLastName(faker.person.lastName())
    contactUsComponent.typeEmail(faker.person.fullName())
    contactUsComponent.typePhone(faker.phone.number())
    contactUsComponent.clickSubmit()
    contactUsComponent.elements.formErrorMessage()
  })
})