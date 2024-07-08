import {Request, Response, NextFunction} from 'express';

export default () => async (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  const renderer = (await import("./render")).default;

  // @ts-ignore
  return renderer(req, res, next);
};
