const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

app.get("/docs", (request, response) => {
    response.sendFile(__dirname + "/views/documentation.html");
});

app.get("/documentation", (request, response) => {
    response.sendFile(__dirname + "/views/documentation.html");
});

app.get("/api/status", (request, response) => {
    try {
        const data = fs.readFileSync('/database/status.json', 'utf8')
        response.send(data);
    } catch(err) {
        response.send("404 | Status file does not exist.")
    }
});


app.get("/status", (request, response) => {
    response.sendFile(__dirname + "/views/status.html");
});

const listener = app.listen(80, () => {
    console.log("Your app is listening on port " + listener.address().port);
});