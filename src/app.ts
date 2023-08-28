import express, { Application, Request, Response } from "express";
import path from "path";

const app: Application = express();
const port: number = 3001;
const router = express.Router();

// Set the 'public' directory as the static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/todo", (req: Request, res: Response) => {
  res.json({ message: "todo" });
});

// Define a route to display images
app.get("/images/:imageName", (req: Request, res: Response) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, "public/gifs", imageName));
});

router.get("/", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "public/view", "/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/gif", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "public/view", "/gif.html"));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use("/", router);

const server = app.listen(port);

export default server;
