import { useState, useEffect, MouseEvent } from "react";
import uniqueId from "lodash.uniqueid";
import { Arrow, File, Image, Text } from "../Icons";
import { isImage, isText } from "../../utils";
import * as Axios from "axios";

const axios = Axios.default;
interface IINode {
  path: string;
}

const INode = ({ path }: IINode) => {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    axios.get(`/api/dir?path=${path}`).then((request) => {
      console.log(request.data);
      setChildren(
        request.data.map((node) => {
          return { ...node, id: uniqueId(path) };
        })
      );
    });
  }, []);
  const toggleFolder = (index: number, event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (children[index].isDirectory) {
      const childrenCopy = [...children];
      childrenCopy[index].open = !childrenCopy[index].open;
      setChildren(childrenCopy);
    }
  };
  const getClassName = (isDirectory: boolean): string =>
    "inode " + (isDirectory ? "directory" : "file");

  return (
    <div>
      {children.map((node, index) => (
        <div
          key={`inode-${node.id}`}
          inode-path={path + (!node.isDirectory ? node.name : "")}
          className={getClassName(node.isDirectory)}
          onClick={(event: MouseEvent<HTMLInputElement>) =>
            toggleFolder(index, event)
          }
        >
          {node.isDirectory && <Arrow open={node.open} />}
          {!node.isDirectory &&
            (isImage(node.name) ? (
              <Image />
            ) : isText(node.name) ? (
              <Text />
            ) : (
              <File />
            ))}
          <div key={`inode-name-${node.id}`}>{node.name}</div>
          {node.open && <INode path={`${path}${node.name}/`} />}
        </div>
      ))}
    </div>
  );
};

export default INode;
export type { IINode };
