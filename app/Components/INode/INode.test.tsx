import React from "react";
import renderer from "react-test-renderer";
import INode from "./INode";

describe("INode", () => {
  const component = renderer.create(
    <INode path="/" contextMenuStatus={false}></INode>
  );
  console.log(component.toJSON());
  test("test", () => {
    let iNode = component.toJSON();
    expect(iNode).toMatchSnapshot();
  });
});
