import 'should';
import appServer from '../../app.start';
import supertest from 'supertest';
import { UserResModel } from '@model/v1';
let app;
let request;

describe('开始测试 user 接口', () => {
  beforeAll(() => {
    app = appServer();
    request = supertest(app);
  });

  afterAll((done) => {
    app.close(done);
  });

  let userList: Array<UserResModel> = [];

  it('test api: (get) /users (获取用户列表)', async function () {
    const result = await
      request.get('/api/v1/users')
        .expect(200);
    const resultJson = JSON.parse(result.text);
    resultJson.length.should.aboveOrEqual(4);
    userList = resultJson;
  });

  it('test api: (get) /users (获取年龄为18的用户列表)', async function () {
    const result = await
      request.get('/api/v1/users?age=18')
        .expect(200);
    const resultJson = JSON.parse(result.text);
    resultJson.length.should.aboveOrEqual(2);
    userList = resultJson;
  });

  it('test api: (get) /users/user_name (获取某个用户)', async function () {
    const user = userList[0];
    const result = await
      request.get(`/api/v1/users/${user.userName}`)
        .expect(200);
    const resultJson = JSON.parse(result.text);
    resultJson.should.eql(user);
  });
});
