import fakeLocation from "../support/fakeLocation";

describe("Visitor Can See A Collection Of News Outside Of Sweden", () => {
  beforeEach(() => {
    cy.intercept("https://api.opencagedata.com/geocode/v1/**", {
      fixture: "location_outside_sweden",
    });
    cy.intercept("https://newsapi.org/v2/top-headlines**", {
      fixture: "world_news_index",
    });
    cy.visit("/", fakeLocation({ latitude: 48.858093, longitude: 2.294694 }));
    cy.get("[data-cy='news-section']").as("newsSection");
  });
  it("Is expected to see On Page Load", () => {
    cy.get("@newsSection")
      .children()
      .first()
      .within(() => {
        cy.get(".content .header").should(
          "have.contain",
          "Democrats take control of Senate!"
        );
        cy.get(".image").find("img").should("be.visible");
        cy.get(".description").should(
          "contain",
          "Nu berättar Skäringer Lázár att hon och maken har gått runt och varit irriterade under en tid."
        );
      });
  });
});
