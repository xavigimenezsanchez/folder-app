/**
 * @jest-environment jsdom
 */
import React from "react";
import {
  render,
  RenderResult,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import INode from "./INode";
import Axios from "../../../__mocks__/axios";

describe("INode", () => {
  let iNode: RenderResult;
  let filesStructure: Array<{
    name: string;
    extname: string;
    isDirectory: boolean;
  }>;

  describe("Folders", () => {
    beforeEach(async () => {
      filesStructure = [
        {
          name: "folderName1",
          extname: "",
          isDirectory: true,
        },
        {
          name: "folderName2",
          extname: "",
          isDirectory: true,
        },
      ];
      Axios.setFileStructure(filesStructure);
      act(() => {
        render(<INode path="/" contextMenuStatus={false}></INode>);
      });
      await waitFor(() => screen.findAllByTestId("icon"));
    });
    it("INode render folders names", async () => {
      expect(screen.getByText(filesStructure[0].name));
      expect(screen.getByText(filesStructure[1].name));
    });
    it("INode render an icon for each folder", async () => {
      const directoryIcons = await screen.findAllByTestId("icon");
      expect(directoryIcons.length).toBe(filesStructure.length);
    });
    it("INode render an arrow icon for each folder", async () => {
      const directoryIcons = document.querySelectorAll("svg.fa-chevron-right");
      expect(directoryIcons.length).toBe(filesStructure.length);
    });
    it("render a different icon when a inode is clicked", async () => {
      await waitFor(() =>
        fireEvent.click(screen.getByText(filesStructure[0].name))
      );
      const directoryIconsClose = document.querySelectorAll(
        "svg.fa-chevron-right"
      );
      const directoryIconsOpen = document.querySelectorAll(
        "svg.fa-chevron-down"
      );
      expect(directoryIconsClose.length).toBe(filesStructure.length - 1);
      expect(directoryIconsOpen.length).toBe(1);
    });
  });

  describe("Files", () => {
    beforeEach(async () => {
      filesStructure = [
        {
          name: "fileName1.txt",
          extname: "txt",
          isDirectory: false,
        },
        {
          name: "fileName2.png",
          extname: "png",
          isDirectory: false,
        },
        {
          name: "fileName3.sh",
          extname: "sh",
          isDirectory: false,
        },
      ];
      Axios.setFileStructure(filesStructure);
      act(() => {
        iNode = render(<INode path="/" contextMenuStatus={false}></INode>);
      });
      await waitFor(() => screen.findAllByTestId("icon"));
    });
    it("INode render file names", async () => {
      expect(screen.getByText(filesStructure[0].name));
      expect(screen.getByText(filesStructure[1].name));
      expect(screen.getByText(filesStructure[2].name));
    });
    it("INode render an icon for each file", async () => {
      const directoryIcons = await screen.findAllByTestId("icon");
      expect(directoryIcons.length).toBe(filesStructure.length);
    });
    it("INode render a file-lines icon for text file", async () => {
      const directoryIcons = document.querySelectorAll("svg.fa-file-lines");
      expect(directoryIcons.length).toBe(1);
    });
    it("INode render an image icon for image file", async () => {
      const directoryIcons = document.querySelectorAll("svg.fa-file-lines");
      expect(directoryIcons.length).toBe(1);
    });
    it("INode render a file icon for a not image or text file", async () => {
      const directoryIcons = document.querySelectorAll("svg.fa-file");
      expect(directoryIcons.length).toBe(1);
    });
  });
});
