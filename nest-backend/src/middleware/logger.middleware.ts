import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method } = req;
    const timestamp = new Date().toISOString();
    const url = req.originalUrl;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
  }
}
