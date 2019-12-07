import http from "http";
import assert from "assert";

const PORT = 1337;

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plan" });
    res.end("Hello World\n");
  })
  .listen(PORT, "127.0.0.1");

describe("Example Node Server", () => {
  it("should return 200", done => {
    http.get(`http://127.0.0.1:${PORT}/`, res => {
      assert.equal(200, res.statusCode);
      server.close();
      done();
    });
  });
});
