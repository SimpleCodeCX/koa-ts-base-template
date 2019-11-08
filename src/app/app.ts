import Koa from 'koa';
import { PresetMiddleware } from './preset.middleware';

export class AppServer extends Koa {
  presetMiddleware: PresetMiddleware;
  constructor() {
    super();
    this.presetMiddleware = new PresetMiddleware(this);
    this.presetMiddleware.use();
  }
}
