# EWBF-dev-fee-remover
Remove EWBF miner fee with node.js. Works in Windows/Linux.<br><br>
How does it work?  --> MITM attack to EWBF miner. Replaces developer wallet address with yours<br>
----------------------------------------------------------
Donations are welcome & appreciated! <br>

Bitcoin  : 1NwdcbA33au7MgoZ7Bz9KRNv5UMYauTyRk<br>
Bcash    : 14QPFxD9GzEvnrfGh8pzAUE8tyZNteD844<br>
Dash     : XshssKhrFMnZAMcL94qpqyfg61kWEFv3gm<br>
Ethereum : 0xdbb6382a63a5fa63166733382f796aafba75a54f<br>
Litecoin : LXMVRseNUE7x4v8vJaHj3N4ZxsmwxpNX1x<br>
Zcash    : t1WTnCHUnwJJ7MAV75xrxXt9ngZJTRH2bb6
thanks!
----------------------------------------------------------
1.  Go to https://www.site24x7.com/find-ip-address-of-web-site.html 
<br>Find ip domain name your pool (<b>eu1-zcash.flypool.org</b> --> <b>94.23.12.63</b>). and replace `remotePoolAdress` in server.js
2.  Go to https://nodejs.org/en/ and download last version. Install node.js on your computer.
3.  Download server.js and edit ... (notepad and etc)
#WARNING!!! Please, change my wallet to yours. (var yourWalletID ->)
4.  Edit (<i>notepad/nano</i>) hosts file your computer (<i>C:\Windows\System32\drivers\etc\hosts or /etc/hosts</i>). <b>Notice</b>: edit the file as administrator/root<br>
	Add to hosts next lines<br><br>
	127.0.0.1 eu1-zcash.flypool.org<br>
	127.0.0.1 us1-zcash.flypool.org<br>
	127.0.0.1 cn1-zcash.flypool.org<br>
	127.0.0.1 asia1-zcash.flypool.org<br>
	127.0.0.1 zec-eu1.nanopool.org<br>
	127.0.0.1 zec-eu2.nanopool.org<br>
	127.0.0.1 zec-us-east1.nanopool.org<br>
	127.0.0.1 zec-us-west1.nanopool.org<br>
	127.0.0.1 zec-asia1.nanopool.org<br>
	127.0.0.1 zec-jp.nanopool.org<br>
	127.0.0.1 zec-au.nanopool.org<br>
	127.0.0.1 zec-eu.coinmine.pl<br>
	127.0.0.1 zec-us.coinmine.pl<br>
	127.0.0.1 zec-as.coinmine.pl<br>
	127.0.0.1 zec.coinmine.pl<br>
5. Run node server.js, for windows you can use `server.bat`
6. Profit!
