import express from 'express';
import initMiddleware from './middleware';

const app = express();
const PORT = 3000;

const done = () => {
  app.listen(PORT, () => {
    console.info(
      `[${new Date().toISOString()}]`,
      `Shell App is running: 🌎 http://localhost:${PORT}`,
    );
  });
};

app.use("/static", express.static("./dist/client"));

initMiddleware(app, done);

export default app;
