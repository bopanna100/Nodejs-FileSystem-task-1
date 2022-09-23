const http = require("http");

let port = "4000";

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "this is adarsh",
    body: "my hobbi is playing hockey",
  },
  {
    userId: 1,
    id: 2,
    title: "this is ponanna",
    body: "iam a farmer",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/posts" && req.method === "GET") {
    res.write(JSON.stringify(posts));
    res.end();
  }
});
server.listen(port);

console.log("server running now ");
