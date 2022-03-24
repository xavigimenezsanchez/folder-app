import { useState, useEffect, useCallback } from "react";

interface IUseContextMenu {
  xPos?: string;
  yPos?: string;
  target?: EventTarget;
  showMenu?: boolean;
  handleClick?: Function;
}

const useContextMenu = (): IUseContextMenu => {
  const [xPos, setXPos] = useState<string>("0px");
  const [yPos, setYPos] = useState<string>("0px");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [target, setTarget] = useState<EventTarget>(null);

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setTarget(e.target);
      setShowMenu(true);
    },
    [setXPos, setYPos, target]
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.addEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { xPos, yPos, target, showMenu, handleClick };
};

export default useContextMenu;
export type { IUseContextMenu };
