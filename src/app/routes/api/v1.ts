import Router from 'koa-router';
import { user } from './v1/index';
const router = new Router();
router.prefix('/v1/');

router.use(user.routes(), user.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'api/v1';
});

export default router;
