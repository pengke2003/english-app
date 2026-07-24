/**
 * PWA 本地测试服务器
 * 启动后用手机/电脑浏览器访问 http://电脑IP:8081
 * Service Worker 需要 HTTP(S) 协议，本服务器满足要求
 *
 * 用法： node serve.js
 * 停止： Ctrl+C
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8081;
const ROOT = __dirname;

// MIME 类型映射（PWA 关键文件需正确 Content-Type）
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2'
};

// 获取本机局域网 IP（供手机访问）
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  // 优先选择常见真实网卡名，排除虚拟网卡（WPS云盘/VMware/虚拟机等）
  const preferred = ['以太网', 'Ethernet', 'WLAN', 'Wi-Fi', '无线', 'eth0', 'wlan0', 'en0'];
  const exclude = ['VMware', 'VirtualBox', 'vEthernet', 'WSL', 'Hyper-V', 'Docker', 'Loopback'];

  const candidates = [];
  for (const name in interfaces) {
    // 跳过明显的虚拟网卡
    if (exclude.some(k => name.toLowerCase().includes(k.toLowerCase()))) continue;
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        // 跳过 10.x / 172.x（常是虚拟）和 169.254（未连接），优先 192.168.x
        const priority = iface.address.startsWith('192.168.') ? 0
                       : iface.address.startsWith('10.') ? 2
                       : iface.address.startsWith('172.') ? 2
                       : 1;
        candidates.push({ address: iface.address, priority, name });
      }
    }
  }
  if (candidates.length === 0) return '127.0.0.1';
  // 按 192.168 优先排序
  candidates.sort((a, b) => a.priority - b.priority);
  return candidates[0].address;
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  // 防止目录穿越
  const filePath = path.join(ROOT, decodeURIComponent(urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + urlPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const headers = { 'Content-Type': MIME[ext] || 'application/octet-stream' };
    // PWA 关键文件禁缓存，方便开发调试（上线部署时改为长缓存）
    if (urlPath === '/sw.js' || urlPath === '/manifest.json' || urlPath === '/index.html') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    }
    res.writeHead(200, headers);
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('========================================');
  console.log('  初中英语辅导 · PWA 测试服务器已启动');
  console.log('========================================');
  console.log('');
  console.log('  本机访问:    http://localhost:' + PORT);
  console.log('  手机访问:    http://' + localIP + ':' + PORT + '   (手机和电脑需在同一WiFi)');
  console.log('');
  console.log('  📱 手机安装步骤:');
  console.log('     安卓: 浏览器打开网址 → 菜单「添加到主屏幕」→ 安装');
  console.log('     iOS:  Safari打开网址 → 分享按钮 →「添加到主屏幕」');
  console.log('');
  console.log('  按 Ctrl+C 停止服务器');
  console.log('========================================');
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error('❌ 端口 ' + PORT + ' 已被占用，请关闭占用程序或换端口');
  } else {
    console.error('❌ 服务器错误:', e.message);
  }
  process.exit(1);
});
