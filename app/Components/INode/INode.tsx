import { useState, useEffect, MouseEvent } from "react";
import uniqueId from "lodash.uniqueid";
import { Icon, IconNames } from "../Icons";
import { isImage, isText } from "../../utils";
import Axios from "axios";
import "./inode.scss";
import { useCallback } from "react";

interface IINode {
  path: string;
  contextMenuStatus: boolean;
}
const INode = ({ path, contextMenuStatus }: IINode) => {
  const [children, setChildren] = useState([]);
  const getINodes = useCallback(async () => {
    const request = await Axios.get(`/api/dir?path=${path}`);
    const formatInodes = request.data.map((node) => ({
      ...node,
      id: uniqueId(path),
    }));
    setChildren(formatInodes);
  }, [path]);
  useEffect(() => {
    getINodes();
  }, [getINodes]);
  const toggleFolder = (index: number, event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (!contextMenuStatus) {
      // If context menu is open a folder must be not toggled
      if (children[index].isDirectory) {
        const childrenCopy = [...children];
        childrenCopy[index].open = !childrenCopy[index].open;
        setChildren(childrenCopy);
      }
    }
  };
  const getClassName = (isDirectory: boolean): string =>
    "inode__child " + (isDirectory ? "directory" : "file");

  const getIconName = (name: string): IconNames =>
    isImage(name)
      ? IconNames.image
      : isText(name)
      ? IconNames.text
      : IconNames.file;

  const getArrowIconName = (open: boolean): IconNames =>
    open ? IconNames.arrowDown : IconNames.arrowRight;

  return (
    <div className="inode">
      {children.map((node, index) => (
        <div
          key={`inode-${node.id}`}
          inode-path={path + (!node.isDirectory ? node.name : "")}
          className={getClassName(node.isDirectory)}
          onClick={(event: MouseEvent<HTMLInputElement>) =>
            toggleFolder(index, event)
          }
        >
          {node.isDirectory && <Icon iconName={getArrowIconName(node.open)} />}
          {!node.isDirectory && <Icon iconName={getIconName(node.name)} />}
          <div key={`inode-name-${node.id}`}>{node.name}</div>
          {node.open && (
            <INode
              path={`${path}${node.name}/`}
              contextMenuStatus={contextMenuStatus}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default INode;
export type { IINode };
