import { userDal } from '@dal/v1';
import { UserResModel, UserDbModel } from '@model/v1';

/**
 * bll 层主要对 dal 层进行调用，并且格式化数据，并被 controller 层调用
 */

export async function getUserList(dbModel?: UserDbModel, search?: string, page_no?: number, page_size?: number) {
  const userList: Array<UserDbModel> = await userDal.getUserList(dbModel, search, page_no, page_size);
  return formatDbList(userList);
}

export async function getByName(userName) {
  const user: UserDbModel = await userDal.getByName(userName);
  return formatDb(user);
}

export function formatDb(db: UserDbModel): UserResModel {
  const user: UserResModel = {
    userId: db.user_id,
    userName: db.user_name,
    age: db.age,
    hobby: db.hobby
  };
  return user;
}

export function formatDbList(dbList: Array<UserDbModel>): Array<UserResModel> {
  const dataList: Array<UserResModel> = [];
  for (let i = 0; i < dbList.length; i++) {
    const data = formatDb(dbList[i]);
    dataList.push(data);
  }
  return dataList;
}
