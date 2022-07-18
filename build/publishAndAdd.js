const path = require('path')
// const { exec } = require('child_process');
// exec('yalc publish', {cwd: path.relative(__dirname, '.')},(error,stdout,stderr) => {
//     console.log('发布成功')
// })

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function publishAndAdd() {
  const { stdout, stderr } = await exec('yalc publish', {cwd: path.resolve(__dirname, '../')});
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
  // await exec('yalc remove component-template --force', {cwd: path.resolve(__dirname, '../docs')});
  const { stdout: stdoutadd, stderr: stderradd } = await exec('yalc update component-template', {cwd: path.resolve(__dirname, '../docs')});
  console.log('stdout:', stdoutadd);
  console.error('stderr:', stderradd);
}
publishAndAdd();
