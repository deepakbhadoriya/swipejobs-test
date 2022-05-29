import testUrl from '../config/testUrl'

describe('Homepage testing', () => {
  it('Visit Landing Homepage ', () => {
    cy.visit(testUrl)
  })

  it('Validate homepage contains', () => {
    cy.contains('All available Jobs')
    cy.contains('Jim Rose')
    cy.contains('jim.rose@gmail.com')
    cy.contains('Max Job Distance')
  })

  it('Validate Reject button click and toaster appearance', () => {
    cy.contains('No Thanks').click()
    cy.wait(2000)
    cy.contains('You have rejected the JOB')
  })

  it('Validate accept button click and toaster appearance', () => {
    cy.contains('I`ll Take it').click()
    cy.wait(2000)
    cy.contains('You have accepted the JOB')
  })

  it('Validate all toaster are closed after 4000 ms', () => {
    cy.wait(2000)
    cy.contains('You have rejected the JOB').should('not.exist')
    cy.contains('You have accepted the JOB').should('not.exist')
  })
})
