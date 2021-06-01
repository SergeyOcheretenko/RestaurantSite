const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const host = 'localhost';
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json'
}

const server = http.createServer()

server.on('request', (req, res) => {
    switch ( req.method )
    {
        case 'GET':
            const parsedUrl = new URL(req.url, host);
            let pathName = parsedUrl.pathname;
            let ext = path.extname(pathName);
            if (pathName !== '/' && pathName[pathName.length - 1] === '/') 
            {   //if request without '/' re-request 
                res.writeHead(302, {'Location': pathName.slice(0, -1)});
                res.end();
                return;
            };
            switch ( pathName )
            {
                default: //it's a landing page so we can answer only with index.html if it's not json-request
                    ext = '.html';
                    pathName = '../index.html';
                    break;
                case '/menu':
                    ext = '.json';
                    pathName = '../src/items.json';
                    break;
            };
            const filePath = path.join(process.cwd(), '/public', pathName);
            const file = fs.createReadStream(filePath);
            file.pipe(res);
            break;
        case 'POST':
            const jsonText = fs.readFile('./forms.json');
            let text = JSON.parse(jsonText);
            text.push(JSON.parse(req.body));
            const result = JSON.stringify(text);
            fs.writeFile('./forms.json', result);
            break;
    }
    
});

server.listen(5000);