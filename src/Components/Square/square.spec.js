import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Square } from './square'
import '../../index.css'

describe('Square', () => {
  it('renders value', () => {
    mount(<Square value="X" onClick={cy.stub().as('click')} />)
    cy.contains('.square', 'X').click()
    cy.get('@click').should('be.called')
  })
})
