import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface IArrow {
  open?: boolean;
}
const Arrow = ({ open = false }: IArrow) => {
  return (
    <div className={"icon"}>
      <FontAwesomeIcon icon={open ? faChevronDown : faChevronRight} />
    </div>
  );
};

export default Arrow;
export type { IArrow };
