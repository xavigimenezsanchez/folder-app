/// <reference types="cypress" />

describe("root folder", () => {
  const fileNames = ["generic.abc", "image.png", "text.txt"];

  it("Show folders in the default root folder", () => {
    cy.visit("http://localhost:3001/");
    for (let i = 1; i <= 3; i++) {
      cy.get(`.inode > :nth-child(${i}) > :nth-child(2)`).should(
        "have.text",
        `folder${i}`
      );
    }
  });
  it("Show folders in a custom root folder", () => {
    cy.visit("http://localhost:3001/folder3");
    for (let i = 1; i <= 3; i++) {
      cy.get(`.inode > :nth-child(${i}) > :nth-child(2)`).should(
        "have.text",
        `folder3${i}`
      );
    }
  });
  it("Show files in a custom root folder with files", () => {
    cy.visit("http://localhost:3001/folder1");
    for (let i = 1; i <= 3; i++) {
      cy.get(`.inode > :nth-child(${i}) > :nth-child(2)`).should(
        "have.text",
        fileNames[i - 1]
      );
    }
  });
});
