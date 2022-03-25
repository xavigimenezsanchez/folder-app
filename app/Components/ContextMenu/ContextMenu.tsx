import { isImage, isText } from "../../utils";
import fileName from "../../utils/filename";
import { Icon, IconNames } from "../Icons";
import "./contextMenu.scss";

interface IContextMenu {
  xPos: string;
  yPos: string;
  target: HTMLElement;
  updatePreview: Function;
}

const ContextMenu = ({ xPos, yPos, target, updatePreview }: IContextMenu) => {
  const inodePath = target.getAttribute("inode-path");
  const previewActive = isText(inodePath) || isImage(inodePath);

  const position = {
    top: yPos,
    left: xPos,
  };
  const previewHandler = (): void => {
    if (previewActive) {
      updatePreview({ showPreview: true, path: inodePath });
    }
  };
  return (
    <div className="context-menu" style={position}>
      <div className="context-menu__element">
        <Icon iconName={IconNames.download} />
        <a
          className="context-menu__element__link"
          href={`/api/get?path=${inodePath}`}
          download={fileName(inodePath)}
        >
          Download
        </a>
      </div>
      <div
        className={
          "context-menu__element context-menu__element--" +
          (previewActive ? "active" : "disabled")
        }
        onClick={previewHandler}
      >
        <Icon iconName={IconNames.preview} />
        <a className="context-menu__element__link" href="#">
          Preview
        </a>
      </div>
    </div>
  );
};

export default ContextMenu;
