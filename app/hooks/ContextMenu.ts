import { useState, useEffect, useCallback } from "react";

interface IUseContextMenu {
  xPos?: string;
  yPos?: string;
  target?: HTMLElement;
  showMenu?: boolean;
  handleClick?: Function;
}

interface IMustBeShown {
  mustBeShown: boolean;
  target?: HTMLElement;
}
const useContextMenu = (): IUseContextMenu => {
  const [xPos, setXPos] = useState<string>("0px");
  const [yPos, setYPos] = useState<string>("0px");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLElement>(null);

  const mustBeShown = (target: HTMLElement): IMustBeShown => {
    if (target && target.classList) {
      if (target.classList.contains("file")) {
        return { mustBeShown: true, target };
      } else {
        if ((target?.parentNode as HTMLElement)?.classList) {
          return mustBeShown(target.parentNode as HTMLElement);
        }
      }
    }
    return { mustBeShown: false };
  };
  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const menuMustBeShown: IMustBeShown = mustBeShown(
        e.target as HTMLElement
      );
      if (menuMustBeShown.mustBeShown) {
        setXPos(`${e.pageX}px`);
        setYPos(`${e.pageY}px`);
        setTarget(menuMustBeShown.target);
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
