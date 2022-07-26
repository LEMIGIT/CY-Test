import { deleteBoardPage } from '../page_objects/deleteBoardPage';

describe ('addBoard' , () => {

    beforeEach('log in', () => {
        cy.loginViaBackend()
        cy.visit('/organizations/boards/10763')
      })

      it('delete Board' , () => {
        

        deleteBoardPage.closeBtn.eq(1).click()


      })

})