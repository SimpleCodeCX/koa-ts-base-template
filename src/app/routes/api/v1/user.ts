import Router from 'koa-router';
import { userController } from '@controller/v1';

const router = new Router();
router.prefix('/');

/**
 * @api {GET} /v1/users 获取用户列表
 * @apiDescription 获取用户列表
 * @apiVersion 1.0.0
 * @apiName getUserList
 * @apiGroup users
 *
 * @apiHeader {String} accesstoken token
 *
 * @apiParam (query) {string} [user_name] 用户名
 * @apiParam (query) {string} [age] 年龄
 * @apiParam (query) {string} [hobby] 爱好
 */
router.get('/users', userController.getUserList);


/**
 * @api {GET} /v1/users/:user_name 获取某个用户
 * @apiDescription 获取某个用户
 * @apiVersion 1.0.0
 * @apiName getUserList
 * @apiGroup users
 *
 * @apiHeader {String} accesstoken token
 *
 * @apiParam (path) {string} user_name 用户名
 */
router.get('/users/:user_name', userController.getByName);


export default router;
