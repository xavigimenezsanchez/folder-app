/// <reference types="cypress" />

describe("Node collapsing", () => {
  const fileNames = ["generic.abc", "image.png", "text.txt"];

  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });

  it("Open folder with file content", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    for (let i = 1; i <= 3; i++) {
      cy.get(
        `[inode-path="/folder1/${fileNames[i - 1]}"] > :nth-child(2)`
      ).should("have.text", fileNames[i - 1]);
    }
  });
  it("close folder remove children elements", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click().click();
    for (let i = 1; i <= 3; i++) {
      cy.get(
        `[inode-path="/folder1/${fileNames[i - 1]}"] > :nth-child(2)`
      ).should("not.exist");
    }
  });
  it("Open folder with subfolders content", () => {
    cy.get(".inode > :nth-child(1) > :nth-child(2)").click();
    for (let i = 1; i <= 3; i++) {
      cy.get(
        `[inode-path="/folder1/${fileNames[i - 1]}"] > :nth-child(2)`
      ).should("have.text", fileNames[i - 1]);
    }
  });
});
