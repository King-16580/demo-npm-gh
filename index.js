#!/usr/bin/env node
/**
 * Demo: Node.js wrapper that calls Python scripts
 * 安装: npm install github:King-16580/demo-npm-gh
 * 使用: node_modules/.bin/demo-py
 * 或:   npx @king/demo-npm-gh
 */
const { spawn } = require('child_process');
const path = require('path');

const pythonExe = process.platform === 'win32' ? 'python' : 'python3';

function runScript(scriptName, args = []) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, 'scripts', scriptName);
    const child = spawn(pythonExe, [scriptPath, ...args], {
      stdio: 'inherit'
    });
    child.on('error', reject);
    child.on('close', code => code === 0 ? resolve() : reject(new Error(`Exit ${code}`)));
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] === 'hello') {
    await runScript('hello.py', args.slice(1));
  } else if (args[0] === 'add') {
    const a = parseInt(args[1]) || 0;
    const b = parseInt(args[2]) || 0;
    await runScript('add.py', [String(a), String(b)]);
  } else {
    console.log('用法:');
    console.log('  npx @king/demo-npm-gh hello [名字]');
    console.log('  npx @king/demo-npm-gh add <数字1> <数字2>');
    console.log('');
    console.log('示例:');
    console.log('  npx @king/demo-npm-gh hello Hermes');
    console.log('  npx @king/demo-npm-gh add 3 5');
  }
}

main().catch(e => { console.error(e.message); process.exit(1); });
