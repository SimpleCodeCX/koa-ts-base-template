/**
 * 接口输入模型
 */

/**
 * {GET} /v1/users 获取用户列表(query类型的参数)
 */
export interface UserGetQueryReqModel {
  user_name?: string; // 根据 "用户名" 查询
  age?: number; // 根据 "年龄" 查询
  search?: string; // 根据 "关键词" 模糊查询
  page_no?: number; // 页码
  page_size?: number; // 页大小
}

/**
 * {GET} /v1/users/:user_name 获取某个用户(path类型的参数)
 */
export interface UserByNameGetPathReqModel {
  user_name?: string;
}
