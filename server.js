/**
 * MITM attack to EWBF Miner [0.3.4b]
 */
var net = require("net");
var yourPoolAddres = 'us1-zcash.flypool.org';
var yourPoolPort = 3333;
var yourWalletID = 't1WTnCHUnwJJ7MAV75xrxXt9ngZJTRH2bb6'; // replace your walller ID
var yourWorkerName = 'devfee'; 
var yourWalletPassword = 'x'; // replace your walller password
var remotePoolAdress = '192.99.160.185'; // replace pool IP address
var remotePoolPort = 3333;
var allShares = 0;
var devShares = 0;
process.on("uncaughtException", function(error) {
  //console.error(error);
});

// do not edit a code down!
global.isInArray = function(array, search){
    return array.indexOf(search) >= 0;
}

global.injection = function(obj) {
	var TCP_DELIMITER = "\n\r";
	var poolArray = [
		"zec-eu1.nanopool.org",
		"zec-eu2.nanopool.org",
		"zec-us-east1.nanopool.org",
		"zec-us-west1.nanopool.org",
		"zec-asia1.nanopool.org",
		"zec-jp.nanopool.org",
		"zec-au.nanopool.org",
		"zec-eu.coinmine.pl",
		"zec-us.coinmine.pl",
		"zec-as.coinmine.pl",
		"zec.coinmine.pl",
		"eu1-zcash.flypool.org",
		"us1-zcash.flypool.org",
		"cn1-zcash.flypool.org",
		"asia1-zcash.flypool.org",
	];
	var walletArray = [
		"t1fJuHWrfcWnYMYyP9VAF96vRnvND2NziMG",
		"terraman",
	];
	
	pack = obj.toString('utf-8');
	obj = JSON.parse(pack);

	/** replace pool **/
	
	if(obj['method'] == 'mining.subscribe') {
		if(isInArray(poolArray, obj['params'][2])) {
			obj['params'][2] = yourPoolAddres;
			obj['params'][3] = yourPoolPort;
		}
	}

	if(obj['method'] == 'mining.authorize') {
		t = obj['params'][0].split('.');
		if(isInArray(walletArray, t[0])) {
			obj['params'][0] = yourWalletID + '.' + yourWorkerName;
			obj['params'][1] = yourWalletPassword;
		}
	}
	
	if(obj['method'] == 'mining.submit') {
		t = obj['params'][0].split('.');
		if(isInArray(walletArray, t[0])) {
			devShares++;
			allShares++;
			obj['params'][0] = yourWalletID + '.' + yourWorkerName;
		} else {
			allShares++;
		}
		devPercent = (devShares/(allShares-devShares)*100).toFixed(2);
		console.error("INJECTION your shares: " + (allShares-devShares) + "; dev shares/percent: " + devShares + "/" + devPercent + "; total : " + allShares);
	}
	
	pack = JSON.stringify(obj);
	return pack+TCP_DELIMITER;
}

var server1 = net.createServer(function (localsocket) {
  var remotesocket = new net.Socket();

  remotesocket.connect(remotePoolPort, remotePoolAdress);

  localsocket.on('connect', function (data) {
    console.log(">>> connection #%d from %s:%d",
      server.remoteAddress,
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
  });

  localsocket.on('data', function (data) {
	data = injection(data);
	
    var flushed = remotesocket.write(data);
    if (!flushed) {
      console.log("  remote not flushed; pausing local");
      localsocket.pause();
    }
  });

  remotesocket.on('data', function(data) {
    var flushed = localsocket.write(data);
    if (!flushed) {
      console.log("  local not flushed; pausing remote");
      remotesocket.pause();
    }
  });

  localsocket.on('drain', function() {
    console.log("%s:%d - resuming remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.resume();
  });

  remotesocket.on('drain', function() {
    console.log("%s:%d - resuming local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.resume();
  });

  localsocket.on('close', function(had_error) {
    console.log("%s:%d - closing remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.end();
  });

  remotesocket.on('close', function(had_error) {
    console.log("%s:%d - closing local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.end();
  });

});


var server2 = net.createServer(function (localsocket) {
  var remotesocket = new net.Socket();

  remotesocket.connect(remotePoolPort, remotePoolAdress);

  localsocket.on('connect', function (data) {
    console.log(">>> connection #%d from %s:%d",
      server.remoteAddress,
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
  });

  localsocket.on('data', function (data) {
	data = injection(data);
	
    var flushed = remotesocket.write(data);
    if (!flushed) {
      console.log("  remote not flushed; pausing local");
      localsocket.pause();
    }
  });

  remotesocket.on('data', function(data) {
    var flushed = localsocket.write(data);
    if (!flushed) {
      console.log("  local not flushed; pausing remote");
      remotesocket.pause();
    }
  });

  localsocket.on('drain', function() {
    console.log("%s:%d - resuming remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.resume();
  });

  remotesocket.on('drain', function() {
    console.log("%s:%d - resuming local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.resume();
  });

  localsocket.on('close', function(had_error) {
    console.log("%s:%d - closing remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.end();
  });

  remotesocket.on('close', function(had_error) {
    console.log("%s:%d - closing local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.end();
  });

});


var server3 = net.createServer(function (localsocket) {
  var remotesocket = new net.Socket();

  remotesocket.connect(remotePoolPort, remotePoolAdress);

  localsocket.on('connect', function (data) {
    console.log(">>> connection #%d from %s:%d",
      server.remoteAddress,
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
  });

  localsocket.on('data', function (data) {
	data = injection(data);
	
    var flushed = remotesocket.write(data);
    if (!flushed) {
      console.log("  remote not flushed; pausing local");
      localsocket.pause();
    }
  });

  remotesocket.on('data', function(data) {
    var flushed = localsocket.write(data);
    if (!flushed) {
      console.log("  local not flushed; pausing remote");
      remotesocket.pause();
    }
  });

  localsocket.on('drain', function() {
    console.log("%s:%d - resuming remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.resume();
  });

  remotesocket.on('drain', function() {
    console.log("%s:%d - resuming local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.resume();
  });

  localsocket.on('close', function(had_error) {
    console.log("%s:%d - closing remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.end();
  });

  remotesocket.on('close', function(had_error) {
    console.log("%s:%d - closing local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.end();
  });

});


var server4 = net.createServer(function (localsocket) {
  var remotesocket = new net.Socket();

  remotesocket.connect(remotePoolPort, remotePoolAdress);

  localsocket.on('connect', function (data) {
    console.log(">>> connection #%d from %s:%d",
      server.remoteAddress,
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
  });

  localsocket.on('data', function (data) {
	data = injection(data);
	
    var flushed = remotesocket.write(data);
    if (!flushed) {
      console.log("  remote not flushed; pausing local");
      localsocket.pause();
    }
  });

  remotesocket.on('data', function(data) {
    var flushed = localsocket.write(data);
    if (!flushed) {
      console.log("  local not flushed; pausing remote");
      remotesocket.pause();
    }
  });

  localsocket.on('drain', function() {
    console.log("%s:%d - resuming remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.resume();
  });

  remotesocket.on('drain', function() {
    console.log("%s:%d - resuming local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.resume();
  });

  localsocket.on('close', function(had_error) {
    console.log("%s:%d - closing remote",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    remotesocket.end();
  });

  remotesocket.on('close', function(had_error) {
    console.log("%s:%d - closing local",
      localsocket.remoteAddress,
      localsocket.remotePoolPort
    );
    localsocket.end();
  });

});


	
server1.listen(3333);
server2.listen(6666);
server3.listen(8088);
server4.listen(8008);

console.log("redirecting connections from 127.0.0.1:3333/6666/8088/8008 to %s:%d", remotePoolAdress, remotePoolPort);
