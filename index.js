const fs=require("fs");
const path=require("path");
const dir=path.join(__dirname,"files");
for(let i=0;i<5;i++){
    fs.writeFileSync(`${dir}/file${i}.txt`,"iam shubham shete");
}
fs.readdir(dir,(err,data)=>{
    data.forEach((i)=>{
        console.log(i);
    })
})
// const fs=require("fs");
// fs.writeFileSync("ing.txt","yyyyyyyyyyyyyyyyyrrrrrrrrrrrr")
// console.log("juuuuuuu");
// let d=fs.readFileSync("ing.txt")
// let h=fs.open("ing.txt","r+",function(err,d){
// if(err){
//     console.log(err);
// }
// console.log(d.toString());
// })
// console.log("hiii",d);


// const inp=process.argv;
// console.log(inp);
// if(inp[2]=="add"){
//     fs.writeFileSync(inp[3],inp[4]);
// }else if(inp[2]=="remove"){
//     fs.unlinkSync(inp[3])
// }else{
//     console.log("inalid options");
// }



















// const http=require('http');
// const data=require("./api");

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(5000)