import { Server } from 'socket.io'

const ioHandler = (req, res) => {
    console.log('*First use, starting socket.io')

    const io = new Server(res.socket.server, {
        cors: [
            "*"
        ],
    })

    io.on('connection', socket => {
        socket.broadcast.emit('a user connected')
        socket.on('hello', msg => {
            socket.emit('hello', 'world!')
        })
    })

    res.socket.server.io = io

    res.send("Hello world")
}

export const config = {
    api: {
        bodyParser: false
    }
}

export default ioHandler