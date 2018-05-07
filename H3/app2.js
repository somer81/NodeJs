var events = require('events')

var olayYaratici = new events.EventEmitter();

var olayTutucu1 = function(){
  console.log('Çığlıkkk atalımm Wooowwww');
}

olayYaratici.on('ciglik',olayTutucu1);

olayYaratici.emit('ciglik');
