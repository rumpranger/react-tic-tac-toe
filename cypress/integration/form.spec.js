describe('Form', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('has reset button', () => {
        const btnval = "Go to game start"
        cy.get('div.game-info > ol > li > button')
          .contains(btnval)
      })
  })