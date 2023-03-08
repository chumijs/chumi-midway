import { IMiddleware, Middleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/web';
import chumi from 'chumi';
import controller from '../controller';

@Middleware()
export class ChumiMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return chumi(controller, {
      onFinish() {
        console.log('finish');
      },
    }) as any;
  }
}
