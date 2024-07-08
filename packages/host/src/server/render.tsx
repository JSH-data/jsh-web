import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import {Request, Response, NextFunction} from 'express';

import App from "../client/App";

export default async (req: Request, res: Response, next: NextFunction) => {
  let didError = false;

  const stream = renderToPipeableStream(<App  />, {
  onAllReady() {
    res.statusCode = didError ? 500 : 200;
    res.setHeader("Content-type", "text/html");
    res.write(`<!DOCTYPE html`);
    res.write(`<html></html> 
      <head>   
      </head>
      <body>`);
    res.write(`<div id="root">`);
    stream.pipe(res);
    res.write(`</div>`);
    // res.write(
    //   `<script>window.initialData = ${JSON.stringify({
    //     data: initData[0]._id,
    //   })};</script>`
    // );
    res.write(
      `<script async data-chunk="main" src="http://localhost:3000/static/main.js"></script>`
    );
    res.write(`</body></html>`);
  },
  onShellError() {
    res.statusCode = 500;
    res.send(`<h1>An error occurred</h1>`);
  },
  onError(err) {
    didError = true;
    console.error(err);
  },
});
};
