const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Xush kelibsiz!')
        res.end();
    }
    if (req.url === '/books') {
        res.write(JSON.stringify(['Lolazor', 'Atirgul', 'Sariq devni minib']))
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('Yangi bog\'lanish')
})



server.listen(5000);
console.log(`${server.address().port} ni eshitishni boshladim...`);