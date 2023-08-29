

function listen (io){
    let readyPlayrCount = 0;
    io.on('connection', (socket) => {
    console.log(socket.id, 'a user connected');

    socket.on('ready',()=>{
        console.log('player ready: ', socket.id)
        readyPlayrCount++
        if(readyPlayrCount % 2 === 0 ){
            io.emit('GameStarted', socket.id)
        }
    })
    socket.on('paddleMove',(paddleData)=>{
            socket.broadcast.emit('paddleMove', paddleData)
    })
    socket.on('ballMove',(ballData)=>{
            socket.broadcast.emit('ballMove', ballData)
    })
    socket.on('disconnect',(reason)=>{
            console.log(`Client with ${socket.id} disconnected with reason: ${reason}` )
    })
  });
}

module.exports ={listen}