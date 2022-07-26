class DeleteBoardPage {

        get configBoard() {
            return cy.get('a[class="vs-c-site-logo"]')
        }

        get closeBtn() {
            return cy.get('i[class="el-icon-close"]')
        }

        get delBtn() {
            return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]')
        }
}

export const deleteBoardPage = new DeleteBoardPage();