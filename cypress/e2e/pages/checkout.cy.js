import checkout from '../components/checkout/checkout-component';

describe('RENAME ME!', () => {

  beforeEach(() => {


    //DO NOT REMOVE.
    cy.intercept('https://r.stripe.com/0', (req) => {
        req.headers['origin'] = 'https://js.stripe.com'
    })

    //DO NOT REMOVE.
    cy.intercept('https://js.stripe.com/v3', (req) => {
        req.on('response', (res) => {
            res.body = res.body.replaceAll('window.top', 'window.self')
        })
    })
  });


  //⦁	Revisar los componentes visuales de Reservation Details y Fee Details.
  it('Revisar los componentes visuales de Reservation Details y Fee Details', () => {
    cy.visit('/new/checkout?product=308961&source=tripleseat&additionalServices=&from=2024-02-29T11%3A30%3A00&to=2024-02-29T12%3A30%3A00&duration=1&labelDuration=1+hour&startTime=11%3A30&labelTime=Upcoming')
     checkout.elements.getTheSpiralLabel();
     checkout.elements.getWilllowLabel();
     checkout.elements.getReservationDateAndTimeText();
     checkout.elements.getFeeDetails();
     checkout.elements.getTotalDue();
  })


  it('Validacion de casos negativos', () => {
    cy.visit('/new/checkout?product=308961&source=tripleseat&additionalServices=&from=2024-02-29T11%3A30%3A00&to=2024-02-29T12%3A30%3A00&duration=1&labelDuration=1+hour&startTime=11%3A30&labelTime=Upcoming')

     //⦁	Comprobar que el formulario (Contact Information) no se pueda enviar sin la información requerida.
    checkout.clickProceedToPayment();
    checkout.elements.getOopsMessage();
    checkout.elements.getErrors();
    checkout.elements.getFirstNameWarningMessage();
    checkout.elements.getLastNameWarningMessage()
    checkout.elements.getEmailWarningMessage()
    checkout.elements.getPhoneNumberWarningMessage()
    
     //⦁	Comprobar escenarios negativos en el correo electrónico y teléfono.
    checkout.fillNegativeCasesPhoneEmail()
    checkout.clickProceedToPayment();
     //⦁	Comprobar escenarios negativo para el campo Discount Code
    checkout.clickDiscountCode()
    checkout.typeDiscountCode('KENDRY')
    checkout.clickApplyCode()
    checkout.elements.discountCodeError();
  })
   

it('Casos negativos', () =>{
  cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/willow?product=308961&source=tripleseat&additionalServices=&from=2024-03-08T14%3A00%3A00&to=2024-03-08T15%3A00%3A00&duration=1&labelDuration=1+hour&startTime=14%3A00&labelTime=Upcoming')

  checkout.clickDiscountCode()
  checkout.typeDiscountCode('TEST20')
  checkout.clickApplyCode()
  checkout.elements.discountCodeCard('TEST20');
  checkout.elements.discountFeeDetail('Discount code: -20%')
  checkout.fillContactInformationAndProceedToPayment();

 // ⦁	Para llegar a este formulario, se debe haber culminado el Checkout.
 //⦁	Revisar los componentes visuales como Contact Information, Discount Code y Payment.
 checkout.elements.getSavedContactInformation();
 checkout.elements.getSavedDiscountCode();
 checkout.getStripeElements()

 //⦁	Editar algún campo en Contact Information (botón Edit) y posteriormente verificar su actualización.
checkout.clickEditContactInfo();
checkout.editContactInformationAndProceedToPayment();
checkout.elements.getSavedContactInformation();

 //⦁	Utilizar la librería de JS llamada faker, para llenar los campos solicitados. Para esto se deben utilizar las funciones predefinidas en /components/checkout/checkout-components.js
 //⦁	Comprobar que el formulario (Payment) no se pueda enviar sin la información requerida.
 cy.wait(5000)
 checkout.clickPayNow();
 cy.wait(5000)
 checkout.getStripeWarningElements();

  //⦁	Comprobar casos negativos para código postal, número de tarjeta y caducidad.
  checkout.fillNegativeCasesZipCodeAndCardInfo();

})


  it('Llenar formulario con discount Code, realizar pago y pantalla confirmacion', () => {
 //⦁	Utilizar la librería de JS llamada faker, para llenar los campos solicitados. Para esto se deben utilizar las funciones predefinidas en /components/checkout/checkout-components.js
   //⦁	Validar que el formularios sea guardado al presionar el botón Proceed to payment
  //⦁	Comprobar escenario válido para el campo Discount Code  ingresando alguno de los siguientes códigos: TEST20, TEST15
  cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/willow?product=308961&source=tripleseat&additionalServices=&from=2024-03-08T14%3A00%3A00&to=2024-03-08T15%3A00%3A00&duration=1&labelDuration=1+hour&startTime=14%3A00&labelTime=Upcoming')

  checkout.clickDiscountCode()
  checkout.typeDiscountCode('TEST20')
  checkout.clickApplyCode()
  checkout.elements.discountCodeCard('TEST20');
  checkout.elements.discountFeeDetail('Discount code: -20%')
  checkout.fillContactInformationAndProceedToPayment();

 // ⦁	Para llegar a este formulario, se debe haber culminado el Checkout.
 //⦁	Revisar los componentes visuales como Contact Information, Discount Code y Payment.
 checkout.elements.getSavedContactInformation();
 checkout.elements.getSavedDiscountCode();
 checkout.getStripeElements()

 //⦁	Editar algún campo en Contact Information (botón Edit) y posteriormente verificar su actualización.
checkout.clickEditContactInfo();
checkout.editContactInformationAndProceedToPayment();
checkout.elements.getSavedContactInformation();

 //	Validar que el formulario sea enviado al presionar el botón Complete Payment.
 checkout.fillCheckoutIframesInformation();
 checkout.clickPayNow();
 cy.wait(5000)

 //⦁	Para llegar a esta pantalla, se debe haber culminado el proceso de Booking anterior.
 //⦁	Revisar los componentes visuales como Confirmation section, register guests section, Add guest information button, Back to Space Details link, Reservation details, Fee details, Logo, etc.  
checkout.elements.getConfirmationHeader();
checkout.elements.getThankYouHeader();
checkout.elements.getConfirmationNumber();
checkout.elements.getAddGuestButton();
checkout.elements.getReservationDetails();
checkout.elements.getBackToSpace();
  })
})

