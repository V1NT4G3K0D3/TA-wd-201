// Using fs

const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
    // fs.readFile("sample.txt", (err, data) => {
    //     res.end(data);
    // });
    const stream = fs.createReadStream("sample.txt");
    stream.pipe(res);
});
server.listen(3000);