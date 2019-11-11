import { userBll } from '@bll/v1';
import { UserGetQueryReqModel, UserDbModel } from '@model/v1';

/**
 * controller 这一层用来存放每个 接口 的相关逻辑
 */

/**
 * 获取用户列表
 */
export async function getUserList(ctx) {
  // 获取客户端参数
  const query = ctx.request.query;
  const param: UserGetQueryReqModel = {
    user_name: query.user_name,
    age: query.age ? parseInt(query.age, 10) : null,
    page_no: query.page_no ? parseInt(query.page_no, 10) : null,
    page_size: query.page_size ? parseInt(query.page_size, 10) : null,
    search: query.search // 关键词模糊查询
  };
  const dbModel: UserDbModel = {
    user_name: param.user_name,
    age: param.age,
  };
  const userList = await userBll.getUserList(dbModel, param.search, param.page_no, param.page_size);
  ctx.body = userList;
}

/**
 * 根据用户名获取某一个用户
 */
export async function getByName(ctx) {
  const userName = ctx.params.user_name;
  const user = await userBll.getByName(userName);
  ctx.body = user;
}
