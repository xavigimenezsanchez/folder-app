/// <reference types="cypress" />

describe("Preview", () => {
  const fileNames = ["generic.abc", "image.png", "text.txt"];
  beforeEach(() => {
    cy.visit("http://localhost:3001/folder1");
  });
  it("a text", () => {
    cy.get('[inode-path="/folder1/text.txt"] > :nth-child(2)').rightclick();
    cy.get(
      ".context-menu__element--active > .context-menu__element__link"
    ).click();
    cy.get(".context-menu__element--disabled ").should("not.exist");

    cy.get(".preview__container").should("exist");
    cy.get(".preview__container__wrapper__text").should("exist");
  });
  it("a text close", () => {
    cy.get('[inode-path="/folder1/text.txt"] > :nth-child(2)').rightclick();
    cy.get(
      ".context-menu__element--active > .context-menu__element__link"
    ).click();
    cy.get(".context-menu__element--disabled ").should("not.exist");
    cy.get(".preview__container").should("exist");

    cy.get(".preview__container__wrapper__closer__icon").click();
    cy.get(".preview__container").should("not.exist");
  });
  it("a image", () => {
    cy.get('[inode-path="/folder1/image.png"] > :nth-child(2)').rightclick();
    cy.get(
      ".context-menu__element--active > .context-menu__element__link"
    ).click();
    cy.get(".context-menu__element--disabled ").should("not.exist");

    cy.get(".preview__container").should("exist");
    cy.get(".preview__container__wrapper__image").should("exist");
  });
  it("a text close", () => {
    cy.get('[inode-path="/folder1/image.png"] > :nth-child(2)').rightclick();
    cy.get(
      ".context-menu__element--active > .context-menu__element__link"
    ).click();
    cy.get(".context-menu__element--disabled ").should("not.exist");
    cy.get(".preview__container").should("exist");

    cy.get(".preview__container__wrapper__closer__icon").click();
    cy.get(".preview__container").should("not.exist");
  });
});
