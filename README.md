# EWBF-dev-fee-remover

Remove EWBF miner fee with node.js. Works in Windows/Linux.<br>
How does it work?  --> MITM attack to EWBF miner. Replaces developer wallet address with yours<br>

## Supported pools:
- Flypool.org
- Nanopool.org
- coinmine.pl

----------------------------------------------------------
Donations are welcome & appreciated!<br>

Bitcoin  : 1NwdcbA33au7MgoZ7Bz9KRNv5UMYauTyRk<br>
Bcash    : 14QPFxD9GzEvnrfGh8pzAUE8tyZNteD844<br>
Dash     : XshssKhrFMnZAMcL94qpqyfg61kWEFv3gm<br>
Ethereum : 0xdbb6382a63a5fa63166733382f796aafba75a54f<br>
Litecoin : LXMVRseNUE7x4v8vJaHj3N4ZxsmwxpNX1x<br>
Zcash    : t1WTnCHUnwJJ7MAV75xrxXt9ngZJTRH2bb6

----------------------------------------------------------

## Installation
1.  Go to https://www.site24x7.com/find-ip-address-of-web-site.html 
<br>Find ip domain name your pool (eq: <b>eu1-zcash.flypool.org</b> --> <b>94.23.12.63</b>). and replace ```remotePoolAdress``` in server.js for example: ```var remotePoolAdress = '94.23.12.63';```
2.  Go to https://nodejs.org/en/ and download last version. Install node.js on your computer.
3.  Download server.js and edit ... (notepad and etc) WARNING!!! Please, change my wallet to yours. (```var yourWalletID```)
4.  Edit (<i>notepad/nano</i>) hosts file your computer (<i>C:\Windows\System32\drivers\etc\hosts or /etc/hosts</i>). <b>Notice</b>: edit the file as administrator/root<br>
	Add to hosts next lines<br><br>
	```
	127.0.0.1 eu1-zcash.flypool.org
	127.0.0.1 us1-zcash.flypool.org
	127.0.0.1 cn1-zcash.flypool.org
	127.0.0.1 asia1-zcash.flypool.org
	127.0.0.1 zec-eu1.nanopool.org
	127.0.0.1 zec-eu2.nanopool.org
	127.0.0.1 zec-us-east1.nanopool.org
	127.0.0.1 zec-us-west1.nanopool.org
	127.0.0.1 zec-asia1.nanopool.org
	127.0.0.1 zec-jp.nanopool.org
	127.0.0.1 zec-au.nanopool.org
	127.0.0.1 zec-eu.coinmine.pl
	127.0.0.1 zec-us.coinmine.pl
	127.0.0.1 zec-as.coinmine.pl
	127.0.0.1 zec.coinmine.pl
	```
5. Run node server.js, for windows you can use ```server.bat```
6. Profit!

## FAQ
- Q: My pool is not supported, please help!<br>
  A: Find the pool you want to mine for example suprnova and the coin ZEN. Add this to your hosts: ```127.0.0.1 zen.suprnova.cc``` and add the other stuff to your server.js.
- Q: EWFB says cannot connect although al mine information is correct
  A: Make sure that at the bottom of the server.js your ports are listed
