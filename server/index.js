import { join, resolve } from "path";
import express from "express";
import { dir, getFile } from "./fileSystemUtils.js";

const port = process.env.PORT || 3100;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __dirname = resolve();
// var exposedFileSystem = join(__dirname, "exposedFileSystem");
// app.use(express.static(exposedFileSystem));

var staticPath = join(__dirname, "server/public/dist");
app.use(express.static(staticPath));

app.get("/api/dir", dir);
app.get("/api/get", getFile);
const DIST_DIR = join(__dirname, "./server/public/dist");
const HTML_FILE = join(DIST_DIR, "index.html");
app.get("/*", (req, res) => res.sendFile(HTML_FILE));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
