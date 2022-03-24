import { useState } from "react";
import { isImage, isText } from "../../utils";

interface IPreview {
  updatePreview: Function;
  src: string;
}
const Preview = ({ updatePreview, src }: IPreview) => {
  const [text, setText] = useState("");
  if (isText(src)) {
    fetch(`/api/get?path=${src}`)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        setText(data);
      });
  }
  return (
    <div>
      <div onClick={() => updatePreview({ showPreview: false, path: "" })}>
        X
      </div>
      {isImage(src) && <img src={`/api/get?path=${src}`} />}
      {isText(src) && <div>{text}</div>}
    </div>
  );
};

export default Preview;
