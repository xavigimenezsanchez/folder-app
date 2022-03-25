import { useState } from "react";
import { isImage, isText } from "../../utils";
import "./preview.scss";

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
    <div className="preview">
      <div className="preview__container">
        <div className="preview__container__wrapper">
          <div
            className="preview__container__wrapper__closer"
            onClick={() => updatePreview({ showPreview: false, path: "" })}
          >
            <span className="preview__container__wrapper__closer__icon">X</span>
          </div>
          {isImage(src) && (
            <img
              className="preview__container__wrapper__image"
              src={`/api/get?path=${src}`}
            />
          )}
          {isText(src) && (
            <div className="preview__container__wrapper__text">{text}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
