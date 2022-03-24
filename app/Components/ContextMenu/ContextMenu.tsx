interface IContextMenu {
  xPos: string;
  yPos: string;
  target: EventTarget;
}

const ContextMenu = ({ xPos, yPos, target }: IContextMenu) => {
  return (
    <>
      <div>Download</div>
      <div>Preview</div>
    </>
  );
};

export default ContextMenu;
