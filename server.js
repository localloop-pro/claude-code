const http = require("http");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function sendFile(filePath, response) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendError(404, "Not found", response);
        return;
      }

      sendError(500, "Internal server error", response);
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600",
    });
    response.end(data);
  });
}

function sendJson(payload, response) {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  response.end(JSON.stringify(payload, null, 2));
}

function sendError(statusCode, message, response) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  response.end(message);
}

function resolvePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = normalizedPath === "/" ? "/index.html" : normalizedPath;
  return path.join(publicDir, requestedPath);
}

function requestHandler(request, response) {
  if (!request.url) {
    sendError(400, "Bad request", response);
    return;
  }

  if (request.url === "/health") {
    sendJson({ status: "ok" }, response);
    return;
  }

  const filePath = resolvePath(request.url);

  fs.stat(filePath, (error, stats) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendError(404, "Not found", response);
        return;
      }

      sendError(500, "Internal server error", response);
      return;
    }

    if (stats.isDirectory()) {
      sendFile(path.join(filePath, "index.html"), response);
      return;
    }

    sendFile(filePath, response);
  });
}

function createServer() {
  return http.createServer(requestHandler);
}

function startServer() {
  const host = process.env.HOST || "0.0.0.0";
  const port = Number(process.env.PORT || 3000);
  const server = createServer();

  server.listen(port, host, () => {
    console.log(`Marketplace site listening on http://${host}:${port}`);
  });

  return server;
}

module.exports = {
  createServer,
  requestHandler,
  resolvePath,
  startServer,
};

if (require.main === module) {
  startServer();
}
