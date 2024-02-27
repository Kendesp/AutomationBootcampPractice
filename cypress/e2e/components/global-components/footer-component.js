class footer {

    elements = {

          getFooter : () => cy.get('[id="page-footer"]'),
          coworkingFooter : () => cy.get('div > a[href*="https://yourstudio.com/locations/"]:last'),
          meetingsEventsFooter : () => cy.get('div > a[href*="https://yourstudio.com/studio-gather/"]:last'),
          virtualOfficeFooter : () => cy.get('div > a[href*="https://yourstudio.com/virtual-office-signup/"]:last'),
          ourCompanyFooter : () => cy.get('div > a[href*="https://yourstudio.com/about-us/"]:last'),
          productSummaryFooter : () => cy.get('div > a[href*="https://yourstudio.com/products/"]:last'),
          locationsFooter : () => cy.get('div > a[href*="https://yourstudio.com/locations/"]:last'),
          cleaningServicesFooter : () => cy.get('div > a[href*="https://yourstudio.com/documents/sp-basic-cleaning/"]:last'),
          contactUsFooter : () => cy.get('div > a[href*="/new/contact"]:last'),
          rulesRegulationsFooter : () => cy.get('div > a[href*="https://yourstudio.com/documents/rules-and-regulations/"]:last'),
          privacyPolicyFooter : () => cy.get('div > a[href*="/new/privacy-policy"]:last'),
          sitemapFooter : () => cy.get('div > a[href*="https://yourstudio.com/sitemap_index.xml"]:last'),
          socialInstagram : () => cy.get('a[aria-label="Instagram"]'),
          socialFacebook : () => cy.get('a[aria-label="Facebook"]'),
          socialLinkedin   : () => cy.get('a[aria-label="LinkedIn"]'),
          dynamicYear : () => cy.get('div > p').contains('Tishman Speyer. All Rights Reserved.'),
          urlValueFooter: () => cy.url('')
    }

    clickContactUsFooter(){
      this.elements.contactUsFooter().click()
    }

    clickPrivacyPolicyFooter(){
      this.elements.privacyPolicyFooter().click()
    }


  }

  module.exports = new footer();