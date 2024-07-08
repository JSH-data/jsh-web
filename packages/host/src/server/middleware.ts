import { Express } from 'express';

function middleware(app: Express, done: ()=> void) {
  // 두번 호출되는 강력한 의구심은 여기
  // 정적 파일 가져갈때 뭔가 이상함
  // static path where files such as images and js will be served from

  const renderThunk = require("./server-entry").default;
  const serverRender = renderThunk();
  app.get("/*", serverRender);

  done();
}

export default middleware;
