import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3001;

app.get("/todo", (req: Request, res: Response) => {
  res.json({ message: "todo" });
});

const server = app.listen(port);

export default server;
