/// <reference types="cypress" />

describe("contextMenu", () => {
  const fileNames = ["generic.abc", "image.png", "text.txt"];

  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("not show when right click on folder", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").rightclick();
    cy.get(".context-menu").should("not.exist");
  });
  it("open when right click to file", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    cy.get('[inode-path="/folder1/image.png"] > :nth-child(2)').rightclick();
    cy.get(".context-menu").should("exist");
    cy.get(":nth-child(1) > .context-menu__element__link").should(
      "have.text",
      "Download"
    );
    cy.get(":nth-child(2) > .context-menu__element__link").should(
      "have.text",
      "Preview"
    );
    cy.get(
      '.context-menu > :nth-child(1) > [data-testid="icon"] > .svg-inline--fa > path'
    ).should("exist");
    cy.get(
      '.context-menu__element--active > [data-testid="icon"] > .svg-inline--fa > path'
    ).should("exist");
  });
  it("open can not collapse or open a folder", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    cy.get('[inode-path="/folder1/image.png"] > :nth-child(2)').rightclick();
    cy.get(".context-menu").should("exist");

    cy.get(
      ".app__container__body > :nth-child(1) > :nth-child(1) > :nth-child(2)"
    ).click();
    cy.get(".context-menu").should("exist");
    cy.get(
      ".app__container__body > :nth-child(1) > :nth-child(3) > :nth-child(2)"
    ).click();
    cy.get(".context-menu").should("exist");
  });

  it("closes when click out of it", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    cy.get('[inode-path="/folder1/image.png"] > :nth-child(2)').rightclick();
    cy.get(".context-menu").should("exist");
    cy.get(".app__container--wrapper").click();
    cy.get(".context-menu").should("not.exist");
  });
  it("a generic file make preview element disabled", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    cy.get('[inode-path="/folder1/generic.abc"] > :nth-child(2)').rightclick();
    cy.get(".context-menu__element--disabled ").should("exist");
  });
  it("a image or text file make preview element enabled", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    cy.get('[inode-path="/folder1/text.txt"] > :nth-child(2)').rightclick();
    cy.get(".context-menu__element--disabled ").should("not.exist");
    cy.get('[inode-path="/folder1/image.png"] > :nth-child(2)').rightclick();
    cy.get(".context-menu__element--disabled ").should("not.exist");
  });
});
