const EventEmitter = require('events');// this a class a load events module

const emitter = new EventEmitter();//instacnce  of the events class

//register listner
emitter.on('messageLogged',function(){
 console.log('Listener called');
});

//raise event
emitter.emit('messageLogged');

