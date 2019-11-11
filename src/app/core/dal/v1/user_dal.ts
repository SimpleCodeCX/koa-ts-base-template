import { UserDbModel } from '@model/v1';

/**
 * dal 层主要实现对数据库操作，主要是 sql 语句
 */

const USERLIST: Array<UserDbModel> = [
  {
    user_id: 1,
    user_name: 'user1',
    age: 18,
    hobby: 'Guitar'
  },
  {
    user_id: 2,
    user_name: 'user2',
    age: 19,
    hobby: 'Piano'
  },
  {
    user_id: 3,
    user_name: 'user3',
    age: 20,
    hobby: 'Piano'
  },
  {
    user_id: 4,
    user_name: 'user4',
    age: 18,
    hobby: 'Piano'
  }
];

function isNullorUndefined(value: string) {
  return value === undefined || value === null;
}

export async function getUserList(dbModel?: UserDbModel,
  search?: string, page_no?: number, page_size?: number): Promise<Array<UserDbModel>> {
  // 'select * from user'
  return USERLIST.filter((item: UserDbModel) => {
    let flat = true;
    for (const key in dbModel) {
      if (!isNullorUndefined(dbModel[key]) && item[key] !== dbModel[key]) {
        flat = false;
        break;
      }
    }
    return flat;
  });
}

export async function getByName(userName): Promise<UserDbModel> {
  // `select * from user where user_name = 'xxx'`
  const user = USERLIST.find(item => item.user_name === userName);
  return user;
}
