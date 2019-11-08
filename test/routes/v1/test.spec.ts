import 'should';
import appServer from '../../app.start';
import supertest from 'supertest';
import path from 'path';
let app;
let request;


describe('开始测试 test 接口', () => {
  beforeAll(() => {
    app = appServer();
    request = supertest(app);
  });

  afterAll((done) => {
    app.close(done);
  });

  it('test api: (post) /test (添加 test)', async function () {
    const result = await
      request.post('/v1/test')
        .set('content-type', 'multipart/form-data')
        .expect(200)
        .attach('excel_data', path.resolve(__dirname, './assets/test.xlsx'));
    const resultJson = JSON.parse(result.text);
    resultJson.code.should.equal(0);
  });
});
