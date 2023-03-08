import { Service } from 'chumi';
import { Context } from 'egg';

@Service
export default class {
  ctx: Context;
  async getInfo() {
    return this.ctx.path;
  }
}
