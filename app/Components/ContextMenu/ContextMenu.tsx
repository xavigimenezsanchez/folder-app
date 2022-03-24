import { isImage, isText } from "../../utils";
import fileName from "../../utils/filename";

interface IContextMenu {
  xPos: string;
  yPos: string;
  target: HTMLElement;
  updatePreview: Function;
}

const ContextMenu = ({ xPos, yPos, target, updatePreview }: IContextMenu) => {
  const inodePath = target.getAttribute("inode-path");
  const previewActive = isText(inodePath) || isImage(inodePath);
  return (
    <>
      <div>
        <a href={`/api/get?path=${inodePath}`} download={fileName(inodePath)}>
          Download
        </a>
      </div>
      <div
        className={previewActive ? "active" : "disabled"}
        onClick={() => updatePreview({ showPreview: true, path: inodePath })}
      >
        Preview
      </div>
    </>
  );
};

export default ContextMenu;
