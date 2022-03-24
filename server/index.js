import { join, resolve } from "path";
import express from "express";
import { dir, getFile } from "./fileSystemUtils.js";

const port = process.env.PORT || 3100;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __dirname = resolve();
var exposedFileSystem = join(__dirname, "exposedFileSystem");
app.use(express.static(exposedFileSystem));

app.get("/api/dir", dir);
app.get("/api/get", getFile);
(req, res) => dir(res, req.bodyres.send("dir" + JSON.stringify(req.body)));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
