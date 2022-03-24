import { useState } from "react";
import { ContextMenu } from "./Components/ContextMenu";
import { INode } from "./Components/INode";
import { Preview } from "./Components/Preview";
import { IUseContextMenu, useContextMenu } from "./hooks";

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
    <div>
      Test App
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
      <INode path={path}></INode>
    </div>
  );
};

export default App;
