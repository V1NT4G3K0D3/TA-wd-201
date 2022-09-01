const readline = require("readline");
const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";

fs.readFile("html/home.html", function(err, home) {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("html/project.html", function(err, project) {
    if (err) {
        throw err;
    }
    projectContent = project;
});

const lineDetail = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

lineDetail.question(`Please provide the full file path - `, (path) => {
    const server = http.createServer(function(request, response) {
        let url = request.url;
        response.writeHeader(200, { "Content-Type": "text/html" });
        switch (url) {
            case "/project":
                response.write(projectContent);
                response.end();
                break;
            case "/register":
                const stream = fs.createReadStream(`${path}`);
                stream.pipe(response);
                break;
            default:
                response.write(homeContent);
                response.end();
                break;
        }
    });
    lineDetail.close();
    server.listen(3000, () => {
        console.log("Server @3000");
    });
});