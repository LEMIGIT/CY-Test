/// <reference types="Cypress" />

import { boardPage } from '../page_objects/boardPage';

describe ('addBoard' , () => {

    beforeEach('log in', () => {
        cy.loginViaBackend()
        cy.visit('/organizations/21370/boards')
      })

    it ('add board' , () => {
        let boardTitle = 'board1'

        cy.url().should('include', '/boards')
        boardPage.closeBtn.eq(2).click()
        boardPage.okBtn.click()
        boardPage.addOrgBtn.click()
        boardPage.inputText.eq(1).type(boardTitle)
        boardPage.nextBtn.click()
        boardPage.boardType.check({ force: true})
        boardPage.nextBtn2.click()
        boardPage.nextBtn3.click()
        boardPage.finishBtn.click()
        cy.url().should('include' , '/boards/')
        
    })  


})