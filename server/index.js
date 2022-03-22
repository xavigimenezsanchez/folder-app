import { join, resolve } from "path";
import express from "express";

const port = process.env.PORT || 3001;
const app = express();

const __dirname = resolve();
var exposedFileSystem = join(__dirname, "exposedFileSystem");
app.use(express.static(exposedFileSystem));

app.get("/*", (req, res) => res.send("hola"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
