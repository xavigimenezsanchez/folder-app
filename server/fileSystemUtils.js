import { join, resolve } from "path";
import { readdir, statSync } from "fs";
const __dirname = resolve();
var exposedFileSystem = join(__dirname, "exposedFileSystem");

export const dir = (req, res) => {
  if (!req?.query?.path)
    return res.status(404).send({ error: "not query or path property" });

  var fileSystemPath = join(exposedFileSystem, req.query.path);
  readdir(fileSystemPath, (err, files) => {
    if (err) res.status(404).send({ error: err.code });
    else {
      const filesStructure = [];
      files.forEach((file) => {
        filesStructure.push({
          name: file,
          isDirectory: statSync(fileSystemPath + file).isDirectory(),
        });
      });
      return res.send(filesStructure);
    }
  });
};

export const getFile = (req, res) => {
  if (!req?.query?.path)
    return res.status(404).send({ error: "not query or path property" });

  var filePath = join(exposedFileSystem, req.query.path);

  return res.sendFile(filePath);
};
