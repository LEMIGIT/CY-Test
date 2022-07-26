class BoardPage {

        get addOrgBtn() {
            return cy.get('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-c-btn--spaced-sm vs-c-btn--spaced-no-icon vs-u-text--uppercase"]')
        }

        get okBtn() {
            return cy.get('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--lg vs-u-font-sm vs-c-modal--features-confirm-button"]')
        }

        get closeBtn() {
            return cy.get('i[class="el-icon-close"]')
        }

        get inputText() {
            return cy.get('input[type="text"]')
        }

        get nextBtn() {
            return cy.get('button[name="next_btn"]')
        }

        get boardType() {
            return cy.get('input[type="radio"]')
        }

        get nextBtn2() {
            return cy.get('button[name="next_btn"]')
        }

        get nextBtn3() {
            return cy.get('button[name="next_btn"]')
        }

        get finishBtn() {
            return cy.get('button[name="next_btn"]')
        }
}
export const boardPage = new BoardPage();