import { HtmlTagObject } from "html-webpack-plugin";
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

  const mustBeShow = (target: HTMLElement) => {
    if (target && target.classList) {
      if (target.classList.contains("file")) {
        return true;
      } else {
        if ((target?.parentNode as HTMLElement)?.classList) {
          return mustBeShow(target.parentNode as HTMLElement);
        }
      }
    }
    return false;
  };
  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (mustBeShow(e.target as HTMLElement)) {
        setXPos(`${e.pageX}px`);
        setYPos(`${e.pageY}px`);
        setTarget(e.target);
        setShowMenu(true);
      }
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
