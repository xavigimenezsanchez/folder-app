import { ContextMenu } from "./Components/ContextMenu";
import { INode } from "./Components/INode";
import { IUseContextMenu, useContextMenu } from "./hooks";

const App = () => {
  const { xPos, yPos, showMenu, target }: IUseContextMenu = useContextMenu();

  let path = window.location.pathname;
  //Add slash at the end if not exits
  if (path[path.length - 1] !== "/") {
    path += "/";
  }
  return (
    <div>
      Test App
      {showMenu && <ContextMenu xPos={xPos} yPos={yPos} target={target} />}
      <INode path={path}></INode>
    </div>
  );
};

export default App;
