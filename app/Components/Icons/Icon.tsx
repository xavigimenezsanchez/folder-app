import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faDownload,
  faMagnifyingGlass,
  faImage,
  faFile,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./icons.scss";

enum IconNames {
  arrowRight,
  arrowDown,
  file,
  image,
  text,
  download,
  preview,
}
interface IIcon {
  iconName: IconNames;
}

const iconNameDictionary: { [key in IconNames]: any } = {
  [IconNames.arrowRight]: faChevronRight,
  [IconNames.arrowDown]: faChevronDown,
  [IconNames.file]: faFile,
  [IconNames.image]: faImage,
  [IconNames.text]: faFileLines,
  [IconNames.download]: faDownload,
  [IconNames.preview]: faMagnifyingGlass,
};
const Icon = ({ iconName }: IIcon) => (
  <div className="icon">
    <FontAwesomeIcon icon={iconNameDictionary[iconName]} />
  </div>
);

export default Icon;
export { IconNames };
export type { IIcon };
