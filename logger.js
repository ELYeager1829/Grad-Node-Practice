var url = 'http://mylogger.io/log';

function log(message){

    //send an http request
    console.log(message);
}

//exporting object
module.exports.log = log;//making it public in order to access logger
