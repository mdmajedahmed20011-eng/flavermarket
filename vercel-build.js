import fs from 'fs';
import path from 'path';

const vercelDir = path.resolve('.vercel', 'output');
const distDir = path.resolve('dist');

if (fs.existsSync(path.resolve('.vercel'))) {
  fs.rmSync(path.resolve('.vercel'), { recursive: true, force: true });
}
fs.mkdirSync(path.resolve(vercelDir, 'functions', '__server.func'), { recursive: true });

// Copy static files
fs.cpSync(path.resolve(distDir, 'client'), path.resolve(vercelDir, 'static'), { recursive: true });

// Copy server files
fs.cpSync(path.resolve(distDir, 'server'), path.resolve(vercelDir, 'functions', '__server.func'), { recursive: true });

// Copy config
fs.cpSync(path.resolve(distDir, 'config.json'), path.resolve(vercelDir, 'config.json'));

console.log('Vercel output directory successfully generated!');
