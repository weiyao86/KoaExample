const Koa = require('koa');
const ScpClient = require('scp2');
const path = require('path');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

if (!module.parent) {
  app.listen(3000, () => {
    console.log('address:3000');

    // 上传文件到服务器
    ScpClient.scp('test.js', {
      host: '10.10.100.229',
      username: 'root',
      password: '123654',
      path: '/webapp/test.js'
    }, err => {
      if (err) {
        console.log('error--------');
        console.log(err);
      } else {
        console.log('success');
      }
    });
  });
}
