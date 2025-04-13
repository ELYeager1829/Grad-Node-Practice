const EventEmitter = require('events');// this a class a load events module
var url = 'http://mylogger.io/log';


class Logger extends EventEmitter{
    log(message){

        //send an http request
        console.log(message);
        this.emit('messageLogged',{id: 1,url: 'https//'});
    
    }
}
//exporting object
module.exports = Logger;
