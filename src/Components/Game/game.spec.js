import React from 'react'
import { mount } from 'cypress-react-unit-test'
import  Game  from './game'
import '../../index.css'
// import the module with exports we want to mock
import * as utils from '../Utils/calculatewinner'

describe('Game', () => {
  it('declares winner', () => {
     cy.stub(utils, 'calculateWinner').returns('X')
    mount(<Game />)
    cy.contains('Winner: X')
  })
})