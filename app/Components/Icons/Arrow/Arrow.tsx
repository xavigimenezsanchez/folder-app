import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface IArrow {
  open?: boolean;
}
const Arrow = ({ open = false }: IArrow) => {
  return <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />;
};

export default Arrow;
export type { IArrow };
