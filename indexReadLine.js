const readline = require("readline");
const http = require("http");
const fs = require("fs");

const lineDetail = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// lineDetail.question(`Please provide your name - `, (name) => {
//     console.log(`Hi ${name}!`);
//     lineDetail.close();
// });

lineDetail.question(`Please provide the full file path - `, (path) => {
    const server = http.createServer(function(req, res) {
        const stream = fs.createReadStream(`${path}`);
        stream.pipe(res);
    });
    lineDetail.close();
    server.listen(3000, () => {
        console.log("Server @3000");
    });
});