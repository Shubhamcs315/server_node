const http=require("http");
http.createServer((req,res)=>{
    res.write("hi i am shubham");
    res.end();
}).listen(4500);
