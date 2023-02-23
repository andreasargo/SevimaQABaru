describe('Test Faktorial', () => {
  it('Bilangan Positif', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input').type('10')
    cy.get('#hitung').click()
    cy.contains('Faktorial dari 10 adalah: 3628800').should('exist')
  })
  it('Bilangan Negatif', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input').type('-10')
    cy.get('#hitung').click()
    cy.contains('Faktorial dari -10 adalah: 1').should('exist')
  })
  it('Input Symbol', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input').type('$')
    cy.get('#hitung').click()
    cy.contains('Please enter an integer').should('exist')
  })
  it('Input bilangan >170', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input').type('171')
    cy.get('#hitung').click()
    cy.wait(1000)
    cy.contains('Maximum number is 170').should('exist')
  })
  it('Input Decimal', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('input').type('0.5')
    cy.get('#hitung').click()
    cy.contains('Please enter an integer').should('exist')
  })
})