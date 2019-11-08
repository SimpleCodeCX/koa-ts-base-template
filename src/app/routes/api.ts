import Router from 'koa-router';
import v1 from './api/v1';

const router = new Router();
router.prefix('/api/');

router.use(v1.routes(), v1.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'api';
});

export default router;
