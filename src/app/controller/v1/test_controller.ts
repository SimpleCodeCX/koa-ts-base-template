import { common } from '../../../lib';
import { testBll } from '../../bll/v1';
import { TestModel } from '../../model/v1';
import { apiServerInstance } from '../../../services';
import xlsx from 'node-xlsx';

export async function getTestList(ctx) {
  // 验证参数
  let pageNo = common.strToNumber(ctx.request.query.page_no);
  let pageSize = common.strToNumber(ctx.request.query.page_size);
  const search = ctx.request.query.search;
  const params = [];
  if (common.checkParamsIsNullOrError(params)) {
    ctx.body = apiServerInstance.errorResponse.format({ error_no: 100150 });
    return;
  }
  const testModel: TestModel = {
    test_id: null,
    name: null,
    age: null
  };
  Object.keys(testModel).forEach(item => {
    testModel[item] = ctx.request.query[item];
  });
  if (pageNo && pageNo < 1) {
    pageNo = 1;
  }
  if (pageSize && pageSize < 1) {
    pageSize = 10;
  }

  // 搜索数据
  const results = await testBll.getTest(testModel, search, pageNo, pageSize);

  // 返回结果
  const totalCount = await testBll.getTestCount(testModel, search);
  const resData = testBll.formatTestDbList(results);
  ctx.body = apiServerInstance.normalResponse.format({
    data: resData,
    pageNo,
    pageSize,
    totalCount
  });
}

// excel 文件上传
export async function uploadExcel(ctx) {
  if (!/^multipart\/form-data;\sboundary=.*/.test(ctx.request.headers['content-type'])) {
    ctx.body = {
      message: 'the content-type is error,please use "multipart/form-data".'
    };
    return;
  }

  // 验证参数
  const files = ctx.request.files;
  if (!files) {
    ctx.body = apiServerInstance.errorResponse.format({ error_no: 100150 });
    return;
  }
  const filePath = files.excel_data.path;
  const excelData = xlsx.parse(filePath);
  ctx.body = apiServerInstance.normalResponse.format({ data: excelData });
}
