const SEARCH_TAG = "%23Crypto";
const REPLY_TEXT = "Nice";

let twitterData;

before(() => {
    cy.fixture('twitter').then(data => {
        twitterData = data;
    });
});

after(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.clearCookies()
        cy.clearLocalStorage()
    });
})

describe('Twitter', () => {

    beforeEach(() => {
        cy.window().then((win) => {
            win.sessionStorage.clear();
            cy.clearCookies()
            cy.clearLocalStorage()
        });
    });

    it('replies on all posts', () => {

        // go to login page
        cy.visit('https://twitter.com/login');

        // fill username
        cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(6) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input').type(twitterData.username, { delay: 0 });

        // fill password
        cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(7) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input').type(twitterData.password, { delay: 0 });

        // click 'login' button
        cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div > span > span').click();

        // search for all '#crypto' tags
        cy.visit('https://twitter.com/search?q=' + twitterData.searchTags);

        cy.wait(1000);

        // loop over all articles
        // for each article, execute inner function
        cy.get('article').each(($el, index) => {
            // if (index == 0) {
            cy.saveTwitterReplyParent(1, 10);

            cy.wrap($el).get('[data-testid="reply"]').scrollIntoView();
            cy.wrap($el).get('[data-testid="reply"]').click();
            cy.wrap($el).get('[data-testid="tweetTextarea_0"]').type(REPLY_TEXT);
            cy.wrap($el).get('[data-testid="app-bar-close"]').click();
            cy.wrap($el).get('[data-testid="confirmationSheetCancel"]').click();
            
            return cy.wait(1000);
            // }
        });
    })
})


