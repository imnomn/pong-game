const app = require('./api')

const httpServer = require('http').createServer(app);
const sockets = require('./sockets');
 
const io = require('socket.io')(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });


httpServer.listen(3000, ()=>{
    console.log('server up on 3000')
})

sockets.listen(io)

