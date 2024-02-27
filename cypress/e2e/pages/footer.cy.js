import footerComponent from "../components/global-components/footer-component";

describe('Validacion de Footer', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit('/new/spaces?region=new-york')
    cy.acceptCookiesIfExists()
    
  });  

  it('Boton coworking debe apuntar a Locations', () => {
    footerComponent.elements.coworkingFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/locations/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  });

  it('Boton Meetings & Events debe apuntar a Studio-Gather', () => {
    footerComponent.elements.meetingsEventsFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/studio-gather/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Boton Virtual Office debe apuntar a Virtual Office Signup', () => {
    footerComponent.elements.virtualOfficeFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/virtual-office-signup/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Boton Our Company debe apuntar a About Us', () => {
    footerComponent.elements.ourCompanyFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/about-us/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Boton Product Summary debe apuntar a Products', () => {
    footerComponent.elements.productSummaryFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/products/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })
 
  it('Boton Locations debe apuntar a Locations', () => {
    footerComponent.elements.locationsFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/locations/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Boton Cleaning Services debe apuntar a SP Basic Cleaning', () => {
    footerComponent.elements.cleaningServicesFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/documents/sp-basic-cleaning/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Boton Contact Us debe redireccionar al formulario de Contact Us', () => {
    footerComponent.clickContactUsFooter()
    footerComponent.elements.urlValueFooter().should('eq', 'https://yourstudio.staging.tishmanspeyer.com/new/contact')
  })

  it('Boton Rules & Regulations debe apuntar a Rules & Regulations', () => {
    footerComponent.elements.rulesRegulationsFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/documents/rules-and-regulations/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Boton Privacy Policy debe redireccionar a Politicas de Privacidad', () => {
    footerComponent.clickPrivacyPolicyFooter()
    footerComponent.elements.urlValueFooter().should('eq', 'https://yourstudio.staging.tishmanspeyer.com/new/privacy-policy')
  })

  it('Boton Sitemap debe apuntar al Sitemap.xml', () => {
    footerComponent.elements.sitemapFooter().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://yourstudio.com/sitemap_index.xml')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Validar que se muestre el año en curso', () => {
    footerComponent.elements.dynamicYear().should('contains.text', obtenerAno())
  })

  it('Validar boton Instagram apunta al user correcto de Instagram', () => {
    footerComponent.elements.socialInstagram().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://www.instagram.com/studiobytishmanspeyer/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Validar boton Facebook apunta al user correcto de Facebook', () => {
    footerComponent.elements.socialFacebook().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://www.facebook.com/studiobytishmanspeyer/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })

  it('Validar boton LinkedIn apunta al user correcto de LinkedIN', () => {
    footerComponent.elements.socialLinkedin().should($a => {
      expect($a.attr('href'), 'href').to.equal('https://www.linkedin.com/company/studiobytishmanspeyer/')
      expect($a.attr('target'), 'target').to.equal('_blank')
     })
  })
})

function  obtenerAno() {
  const  d = new  Date();
  const  n = d.getFullYear();
  return  n;
}
