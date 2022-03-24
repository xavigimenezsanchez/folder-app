import { isImage, isText } from "../../utils";

interface IContextMenu {
  xPos: string;
  yPos: string;
  target: HTMLElement;
  updatePreview: Function;
}

const ContextMenu = ({ xPos, yPos, target, updatePreview }: IContextMenu) => {
  const inodePath = target.getAttribute("inode-path");
  const fileName = inodePath.substring(inodePath.lastIndexOf("/") + 1);
  // const preview = isImage(fileName) || isText(fileName);

  return (
    <>
      <div>
        <a href={`/api/get?path=${inodePath}`} download={fileName}>
          Download
        </a>
      </div>
      <div
        onClick={() => updatePreview({ showPreview: true, path: inodePath })}
      >
        Preview
      </div>
    </>
  );
};

export default ContextMenu;
