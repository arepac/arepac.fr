describe('Congress', () => {
  beforeEach(() => {
    cy.visit('/congress')
  })

  describe('CongressForm', () => {
    it('displays success message given valid form submitted', () => {
      cy.intercept('post', '/api/congress', {})

      cy.get('form').within(() => {
        cy.get('input[name=firstName]').type('MockFirstName')
        cy.get('input[name=lastName]').type('MockLastName')
        cy.get('input[name=email]').type('mock@mail.com')
        cy.get('input[name=phone]').type('0000000000')
        cy.get('input[name=facility]').type('MockFacility')
        cy.get('input[name=service]').type('MockService')
        cy.get('input[name=job]').type('MockJob')
        cy.get('input[name=meal]').check({ force: true })
        cy.get('button[type=submit]').click()
      })

      cy.get('[data-test-id=congress-form-success]').should('be.visible')
      cy.get('[data-test-id="congress-form"]').should('not.exist')
    })

    it('displays error message given email is taken', () => {
      cy.intercept('post', '/api/congress', { statusCode: 409 })

      cy.get('form').within(() => {
        cy.get('input[name=firstName]').type('MockFirstName')
        cy.get('input[name=lastName]').type('MockLastName')
        cy.get('input[name=email]').type('mock@mail.com')
        cy.get('input[name=phone]').type('0000000000')
        cy.get('input[name=facility]').type('MockFacility')
        cy.get('input[name=service]').type('MockService')
        cy.get('input[name=job]').type('MockJob')
        cy.get('input[name=meal]').check({ force: true })
        cy.get('button[type=submit]').click()
      })

      cy.get('[data-test-id="congress-form-error"]').should(
        'contain.text',
        'Cette adresse e-mail est déja utilisée.',
      )
    })

    it('displays error message given server error', () => {
      cy.intercept('post', '/api/congress', { statusCode: 500 })

      cy.get('form').within(() => {
        cy.get('input[name=firstName]').type('MockFirstName')
        cy.get('input[name=lastName]').type('MockLastName')
        cy.get('input[name=email]').type('mock@mail.com')
        cy.get('input[name=phone]').type('0000000000')
        cy.get('input[name=facility]').type('MockFacility')
        cy.get('input[name=service]').type('MockService')
        cy.get('input[name=job]').type('MockJob')
        cy.get('input[name=meal]').check({ force: true })
        cy.get('button[type=submit]').click()
      })

      cy.get('[data-test-id="congress-form-error"]').should(
        'contain.text',
        'Une erreur est survenue.',
      )
    })
  })
})
