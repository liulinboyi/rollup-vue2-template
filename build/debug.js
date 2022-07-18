const path = require('path')
// const { exec } = require('child_process');
// exec('yalc publish', {cwd: path.relative(__dirname, '.')},(error,stdout,stderr) => {
//     console.log('发布成功')
// })

// const util = require('node:util');
// const exec = util.promisify(require('node:child_process').exec);

// async function publishAndAdd() {
//   const { stdout, stderr } = await exec('npm run dev', {cwd: path.resolve(__dirname, '../')});
//   console.log('stdout:', stdout);
//   console.error('stderr:', stderr);
//   // await exec('yalc remove component-template --force', {cwd: path.resolve(__dirname, '../docs')});
//   const { stdout: stdoutadd, stderr: stderradd } = await exec('npm run build', {cwd: path.resolve(__dirname, '../docs')});
//   console.log('stdout:', stdoutadd);
//   console.error('stderr:', stderradd);
// }
// publishAndAdd();

let { spawn } = require('node:child_process');

const dev = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'dev'], {cwd: path.resolve(__dirname, '../')});
dev.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

dev.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

dev.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


const serve = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'serve'], {cwd: path.resolve(__dirname, '../docs')});
serve.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

serve.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

serve.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
