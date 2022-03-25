import { useState } from "react";
import { ContextMenu } from "./Components/ContextMenu";
import { INode } from "./Components/INode";
import { Preview } from "./Components/Preview";
import { IUseContextMenu, useContextMenu } from "./hooks";
import "./app.scss";

const App = () => {
  const { xPos, yPos, showMenu, target }: IUseContextMenu = useContextMenu();
  const [preview, setPreview] = useState({ showPreview: false, path: "" });
  let path = window.location.pathname;
  //Add slash at the end if not exits
  if (path[path.length - 1] !== "/") {
    path += "/";
  }
  const updatePreview = (newPreview) => setPreview(newPreview);
  return (
    <div className="app">
      {showMenu && (
        <ContextMenu
          xPos={xPos}
          yPos={yPos}
          target={target}
          updatePreview={updatePreview}
        />
      )}
      {preview.showPreview && (
        <Preview src={preview.path} updatePreview={updatePreview} />
      )}
      <div className="app__container">
        <div className="app__container--wrapper">
          <div className="app__container__header">File Explorer</div>

          <div className="app__container__body">
            <INode path={path} contextMenuStatus={showMenu}></INode>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
