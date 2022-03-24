const fileName = (path: string): string =>
  path.substring(path.lastIndexOf("/") + 1);

export default fileName;
