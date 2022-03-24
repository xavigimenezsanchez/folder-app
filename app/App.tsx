import { INode } from "./Components/INode";

const App = () => {
  let path = window.location.pathname;
  //Add slash at the end if not exits
  if (path[path.length - 1] !== "/") {
    path += "/";
  }
  return (
    <div>
      Test App
      <INode path={path}></INode>
    </div>
  );
};

export default App;
