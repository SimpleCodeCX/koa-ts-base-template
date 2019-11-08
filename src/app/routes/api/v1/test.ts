import Router from 'koa-router';
import { testController } from '../../../controller/v1';
const router = new Router();
router.prefix('/');

/**
 * @api {GET} /v1/test demo 接口
 * @apiDescription demo 接口
 * @apiVersion 1.0.0
 * @apiName getTestList
 * @apiGroup test
 *
 * @apiHeader {String} accesstoken token
 *
 * @apiParam (query) {string} [test_id] id
 * @apiParam (query) {string} [name] 姓名
 * @apiParam (query) {string} [age] 年龄
 * @apiParam (query) {string} [search] 关键词搜索
 * @apiParam (query) {string} [page_no] 页码
 * @apiParam (query) {string} [page_size] 页大小
 */
router.get('/test', testController.getTestList);


/**
 * @api {POST} /v1/test 上传excel文件
 * @apiDescription 上传excel文件
 * @apiVersion 1.0.0
 * @apiName uploadExcel
 * @apiGroup test
 *
 * @apiHeader {String} accesstoken token
 *
 * @apiParam (FormData) {file} excel_data excel文件
 */
router.post('/test', testController.uploadExcel);

export default router;
