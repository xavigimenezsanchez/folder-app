const isImage = (fileName: string) =>
  /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(fileName);

export default isImage;
