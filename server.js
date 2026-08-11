const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8067;

// Serve static files
app.use(express.static(__dirname, {
  extensions: ['html'],
  index: 'index.html',
  redirect: false
}));

// Handle clean URLs - try to serve index.html from the path directory
app.use((req, res) => {
  const urlPath = req.path;
  
  // Try to serve index.html from the path directory
  const dirPath = path.join(__dirname, urlPath);
  const indexPath = path.join(dirPath, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  
  // Try adding .html extension
  const htmlPath = path.join(__dirname, urlPath + '.html');
  if (fs.existsSync(htmlPath)) {
    return res.sendFile(htmlPath);
  }
  
  // Try serving as static file
  const staticPath = path.join(__dirname, urlPath);
  if (fs.existsSync(staticPath) && fs.statSync(staticPath).isFile()) {
    return res.sendFile(staticPath);
  }
  
  // If nothing found, try the main index
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`FC-Blog running at http://localhost:${PORT}`);
});