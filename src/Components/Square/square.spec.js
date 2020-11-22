import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Square } from './square'

describe('Square', () => {
    it('renders value', () => {
      mount(<Square value="X" />)
      cy.contains('.square', 'X')
    })
  })
