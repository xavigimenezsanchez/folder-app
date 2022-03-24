interface IPreview {
  updatePreview: Function;
}
const Preview = ({ updatePreview }: IPreview) => {
  return (
    <div>
      <div onClick={() => updatePreview({ showPreview: false, path: "" })}>
        X
      </div>
      preview
    </div>
  );
};

export default Preview;
