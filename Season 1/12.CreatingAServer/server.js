const http = require("http"); //http - we can create server using http module

const server = http.createServer((req, res) => {
  if (req.url === "/secret") {
    res.end("Data is secret");
  }else{
      res.end("Hello world"); //res.end()
  }
});

//Lister on port
server.listen(7777, () => {
  console.log("Server is listening on port 7777");
});
