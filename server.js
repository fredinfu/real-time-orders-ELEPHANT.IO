var socket = require('socket.io'),
    express = require('express'),
    https = require('https'),
    http = require('http'),
    logger = require('winston');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { colorize: true, timestamp: true });

logger.info('SocketIO > listening on port ');


var app = express();
var http_server = http.createServer(app).listen(3001);

function emitOrder(http_server) {
    var io = socket.listen( http_server );

    // var newOrder = io
    // .of('/new_order')
    // .on('connection')
    io.sockets.on('connection', function(socket) {
        socket.on("emit_order", function (data) {
            
            let newData = data;
            let date = new Date(newData.timestamp);
            newData.full_name = `${newData.first_name.toUpperCase()} ${newData.last_name.toUpperCase()}`;
            newData.time = date.toLocaleString(); //`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            
            if(newData.state=="toCook"){
                io.emit("new_order",newData);
            }
            
            if(newData.state=="cooking"){
                io.emit("preparing_order",newData);
            }

            if(newData.state=="cooked"){
                io.emit("finished_order",newData);
            }
            
            console.log(`newData: ${JSON.stringify(newData)}`)
        })
    });
}


emitOrder(http_server);
