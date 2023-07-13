const http = require('http');
const server = http.createServer((req, res ) => {
    const url = req.url
    if(url === '/'){
        //---
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="post"> <label for="fname">First name:</label>');
        res.write('<input type="text" id="fname" name="fname"><br><br>');
        res.write('<label for="lname">Last name:</label>');
        res.write('<input type="text" id="lname" name="lname"><br><br>');
        res.write('<button type="submit" value="Submit">Submit</button>');
        res.write('<button type="reset" value="Reset">Reset</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type','text/html'); 
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>user1</li><li>user2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    //send a HTML response with some "Page not found text"
    const method = req.method
    if(url === "/create-user" && method === "POST" ){
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end' ,()=> {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
        });
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end()
    }
})

server.listen(3000, ()=>{
    console.log("http://localhost:3000")
})