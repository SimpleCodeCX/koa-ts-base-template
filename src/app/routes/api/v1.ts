import Router from 'koa-router';
import { test } from './v1/index';
const router = new Router();
router.prefix('/v1/');

router.use(test.routes(), test.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'api/v1';
});

export default router;
