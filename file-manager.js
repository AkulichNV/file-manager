/* eslint-disable no-else-return */
const readline = require('readline');
const fs = require('fs');

let workingDir = process.env.HOME;

console.log(`Welcome to the File Manager, ${process.env.npm_config_username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  console.log(`You are currently in ${workingDir}!`);
  rl.question('>: ', (input) => {
    const operands = input.split(' ');
    const command = operands[0];
    if (command === 'exit') {
      return rl.close();
    } else if (command === 'up') {
      let pathParts = workingDir.split('\\');
      if (pathParts.length > 1) {
        pathParts.pop();
        console.log(pathParts.join('\\'));
        return pathParts.join('\\');
      } else {
        return workingDir;
      }
    } else if (command === 'cd') {
      console.log('up');
    } else if (command === 'ls') {
      console.log('up');
    } else if (command === 'cat') {
      console.log('up');
    } else if (command === 'add') {
      console.log('up');
    } else if (command === 'rn') {
      rename(operands[1], operands[2]);
    } else if (command === 'cp') {
      console.log('up');
    } else if (command === 'mv') {
      console.log('up');
    } else if (command === 'rm') {
      console.log('up');
    } else if (command === 'os') {
      console.log('up');
    } else if (command === 'hash') {
      console.log('up');
    } else if (command === 'compress') {
      console.log('up');
    } else if (command === 'decompress') {
      console.log('up');
    } else {
      console.log('WRONG COMMAND!');
    }

    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${process.env.npm_config_username}, goodbye!`);
  process.exit(0);
});

function fullPath(path) {
  if (path.startsWith('.\\')) {
    return `${workingDir}\\${path.substring(2)}`;
  } else {
    return path;
  }
}

const rename = function (path, name) {
  try {
    fs.renameSync(fullPath(path), `${workingDir}\\${name}`);
    console.log('successfully renamed /tmp/hello');
  } catch (err) {
    console.log(err);
  }
  return 'renamed';
};

function up() {
  let pathParts = workingDir.split('\\');
  if (pathParts.length > 1) {
    pathParts.pop();
    console.log(pathParts.join('\\'));
    return pathParts.join('\\');
  } else {
    return workingDir;
  }
};
