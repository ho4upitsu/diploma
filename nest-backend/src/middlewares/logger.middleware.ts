import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    const { method } = req;
    const timestamp = new Date().toISOString();
    const url = req.originalUrl;
    this.logger.log(`[${timestamp}] ${method} ${url}`);
    next();
  }
}
