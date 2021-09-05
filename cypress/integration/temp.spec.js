const SEARCH_TAG = "%23Crypto";
const REPLY_TEXT = "Nice";



describe('My First Test', () => {
    it('twitter', () => {

        //Cypress omleid hier de error, https://github.com/quasarframework/quasar/issues/2233
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('ResizeObserver')) {
                // returning false here prevents Cypress from
                // failing the test
                return false;
            }
            return true;
        });
        cy.visit('https://twitter.com/login');
        cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(6) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input').type('Willemkanonskogel@outlook.com');
        cy.wait(1000);
        cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(7) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input').type('Leukhoor1');
        cy.wait(1000);
        cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div > span > span').click();
        //   cy.visit('https://twitter.com/home');
        //   cy.wait(1000);
        //   cy.get('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-oyd9sg > div:nth-child(1) > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div.css-1dbjc4n.r-184en5c > div > div > div > div > div > div > div > div > div > label > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2 > div > div > div > div > div.DraftEditor-editorContainer > div > div > div > div').type('lekker');
        //   cy.wait(1000);
        //   cy.get('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-oyd9sg > div:nth-child(1) > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(3) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-l5o3uw.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-19u6a5r.r-2yi16.r-1qi8awa.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr > div > span > span').click();

        cy.visit('https://twitter.com/search?q=' + SEARCH_TAG);
        // cy.get('[data-testid="SearchBox_Search_Input"]').type('#crypto');
        // cy.get('[aria-label="Search Twitter"] [tabindex="0"]').click();

        cy.get('article').each(($el, index, $list) => {
            if (index == 0) {
                cy.wrap($el).get('[data-testid="reply"]').click();
                // cy.wait(1000);
                cy.wrap($el).get('[data-testid="tweetTextarea_0"]').type(REPLY_TEXT);
            }
        });
    })
})


