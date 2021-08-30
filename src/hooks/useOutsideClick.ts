import { RefObject, useState, useEffect } from "react";

export const useOutsideClick = (
  el: RefObject<HTMLDivElement>,
  initialState: any
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (el.current !== null && !el.current.contains(<Node>e!.target)) {
        setIsActive(!isActive);
      }
    };

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [el, isActive]);

  return [isActive, setIsActive];
};
