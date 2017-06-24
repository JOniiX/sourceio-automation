let listing, register, go, submit, learn, ocr, automate, restart, stop, exportListing;
let isAutomated = false;
let block = false;
let wordLoop = null;
let minerLoop = null;
let message, frequency;

listing = {
	"http://s0urce.io/client/img/words/easy/hwejg3.png": "stat",
	"http://s0urce.io/client/img/words/easy/h5343.png": "load",
	"http://s0urce.io/client/img/words/easy/u6jz345h.png": "signal",
	"http://s0urce.io/client/img/words/easy/gerg43643.png": "info",
	"http://s0urce.io/client/img/words/easy/5h3j5.png": "size",
	"http://s0urce.io/client/img/words/easy/gfu4643876.png": "count",
	"http://s0urce.io/client/img/words/easy/23j4d.png": "part",
	"http://s0urce.io/client/img/words/easy/ztuz2gh.png": "system",
	"http://s0urce.io/client/img/words/easy/4j22.png": "user",
	"http://s0urce.io/client/img/words/easy/i2i542.png": "reset",
	"http://s0urce.io/client/img/words/easy/rh324525.png": "list",
	"http://s0urce.io/client/img/words/easy/t342.png": "ghost",
	"http://s0urce.io/client/img/words/easy/fhj332.png": "write",
	"http://s0urce.io/client/img/words/easy/f4tr3.png": "event",
	"http://s0urce.io/client/img/words/easy/4232.png": "ping",
	"http://s0urce.io/client/img/words/easy/fge332.png": "file",
	"http://s0urce.io/client/img/words/easy/gfzu3.png": "set",
	"http://s0urce.io/client/img/words/easy/32jrh32r.png": "join",
	"http://s0urce.io/client/img/words/easy/56436u.png": "num",
	"http://s0urce.io/client/img/words/easy/jfs3231.png": "add",
	"http://s0urce.io/client/img/words/easy/bz334.png": "xml",
	"http://s0urce.io/client/img/words/easy/g45u3.png": "pass",
	"http://s0urce.io/client/img/words/easy/34h34.png": "bit",
	"http://s0urce.io/client/img/words/easy/f436fghz.png": "val",
	"http://s0urce.io/client/img/words/easy/r3r3f.png": "anon",
	"http://s0urce.io/client/img/words/easy/fej5.png": "com",
	"http://s0urce.io/client/img/words/easy/f3425.png": "temp",
	"http://s0urce.io/client/img/words/easy/gg44.png": "loop",
	"http://s0urce.io/client/img/words/easy/42j4.png": "add",
	"http://s0urce.io/client/img/words/easy/4353i.png": "call",
	"http://s0urce.io/client/img/words/easy/35d.png": "poly",
	"http://s0urce.io/client/img/words/easy/f487k.png": "client",
	"http://s0urce.io/client/img/words/easy/gg421.png": "http",
	"http://s0urce.io/client/img/words/easy/h5jz5.png": "handle",
	"http://s0urce.io/client/img/words/easy/hj5646.png": "socket",
	"http://s0urce.io/client/img/words/easy/zhg43z34.png": "data",
	"http://s0urce.io/client/img/words/easy/rnr3ur23gh325.png": "status",
	"http://s0urce.io/client/img/words/easy/f43543.png": "init",
	"http://s0urce.io/client/img/words/easy/3523ghr.png": "log",
	"http://s0urce.io/client/img/words/easy/f32.png": "buffer",
	"http://s0urce.io/client/img/words/easy/fh3rg32.png": "global",
	"http://s0urce.io/client/img/words/easy/44j.png": "upload",
	"http://s0urce.io/client/img/words/easy/fg32t.png": "get",
	"http://s0urce.io/client/img/words/easy/tu34ht.png": "key",
	"http://s0urce.io/client/img/words/easy/fjwegf2.png": "cookies",
	"http://s0urce.io/client/img/words/easy/5h.png": "url",
	"http://s0urce.io/client/img/words/easy/j3245g3.png": "root",
	"http://s0urce.io/client/img/words/easy/f4365.png": "right",
	"http://s0urce.io/client/img/words/easy/i5ut5.png": "net",
	"http://s0urce.io/client/img/words/easy/jgj4.png": "intel",
	"http://s0urce.io/client/img/words/easy/kj44.png": "remove",
	"http://s0urce.io/client/img/words/easy/gher43.png": "port",
	"http://s0urce.io/client/img/words/easy/j5675.png": "domain",
	"http://s0urce.io/client/img/words/easy/fzh32.png": "point",
	"http://s0urce.io/client/img/words/easy/grj23.png": "host",
	"http://s0urce.io/client/img/words/easy/klj52.png": "delete",
	"http://s0urce.io/client/img/words/easy/34jhg23.png": "bytes",
	"http://s0urce.io/client/img/words/easy/f34.png": "emit",
	"http://s0urce.io/client/img/words/easy/gi9846.png": "type",
	"http://s0urce.io/client/img/words/medium/3k6734.png": "encryptfile",
	"http://s0urce.io/client/img/words/medium/3jh5.png": "encrypt",
	"http://s0urce.io/client/img/words/medium/jbg5335.png": "setping",
	"http://s0urce.io/client/img/words/medium/894h.png": "encode",
	"http://s0urce.io/client/img/words/medium/j5h632.png": "download",
	"http://s0urce.io/client/img/words/easy/djk3.png": "dir",
	"http://s0urce.io/client/img/words/medium/935h.png": "setport",
	"http://s0urce.io/client/img/words/medium/5h213553.png": "serverproxy",
	"http://s0urce.io/client/img/words/medium/82365h.png": "getlog",
	"http://s0urce.io/client/img/words/hard/3k5.png": "uploaduserstats",
	"http://s0urce.io/client/img/words/medium/hg4.png": "package",
	"http://s0urce.io/client/img/words/medium/fh3.png": "gridheight",
	"http://s0urce.io/client/img/words/medium/5335jf.png": "gridwidth",
	"http://s0urce.io/client/img/words/medium/k34h63.png": "filedir",
	"http://s0urce.io/client/img/words/hard/2n52b.png": "loadregisterlist",
	"http://s0urce.io/client/img/words/hard/n3b55.png": "create3axisvector",
	"http://s0urce.io/client/img/words/hard/3v5235.png": "respondertimeout",
	"http://s0urce.io/client/img/words/hard/m3n636.png": "hostnewserver",
	"http://s0urce.io/client/img/words/hard/v235.png": "removeoldcookie",
	"http://s0urce.io/client/img/words/medium/385gh2.png": "setstats",
	"http://s0urce.io/client/img/words/medium/56j3hn.png": "getpass",
	"http://s0urce.io/client/img/words/medium/63623.png": "sizeof",
	"http://s0urce.io/client/img/words/medium/k3465jh.png": "setcookie",
	"http://s0urce.io/client/img/words/hard/l4j56.png": "decryptdatabatch",
	"http://s0urce.io/client/img/words/hard/3bv5235.png": "statusofprocess",
	"http://s0urce.io/client/img/words/hard/k32h6j.png": "rootcookieset",
	"http://s0urce.io/client/img/words/hard/bv35.png": "changeusername",
	"http://s0urce.io/client/img/words/medium/nfn3.png": "urlcheck",
	"http://s0urce.io/client/img/words/medium/74n4.png": "accountname",
	"http://s0urce.io/client/img/words/medium/l3976.png": "length",
	"http://s0urce.io/client/img/words/hard/v535.png": "getfirewallchannel",
	"http://s0urce.io/client/img/words/hard/3h25g125.png": "callmodule",
	"http://s0urce.io/client/img/words/hard/j5h35.png": "disconnectserver",
	"http://s0urce.io/client/img/words/medium/l3667.png": "filetype",
	"http://s0urce.io/client/img/words/medium/424h8.png": "hexagon",
	"http://s0urce.io/client/img/words/hard/j56b3.png": "exportconfigpackage",
	"http://s0urce.io/client/img/words/hard/3426h.png": "sizeofhexagon",
	"http://s0urce.io/client/img/words/hard/n3bv5.png": "loadloggedpassword",
	"http://s0urce.io/client/img/words/hard/n3v5b56.png": "encodenewfolder",
	"http://s0urce.io/client/img/words/hard/v42.png": "channelsetpackage",
	"http://s0urce.io/client/img/words/hard/h35g.png": "dodecahedron",
	"http://s0urce.io/client/img/words/hard/j235g23.png": "tempdatapass",
	"http://s0urce.io/client/img/words/hard/j52.png": "createnewsocket",
	"http://s0urce.io/client/img/words/hard/n234v65.png": "fileexpresslog",
	"http://s0urce.io/client/img/words/hard/njm23b632.png": "emitconfiglist",
	"http://s0urce.io/client/img/words/hard/n2356b.png": "sendintelpass",
	"http://s0urce.io/client/img/words/hard/b533252.png": "unpacktmpfile",
	"http://s0urce.io/client/img/words/hard/u254oo.png": "httpbuffersize",
	"http://s0urce.io/client/img/words/hard/jn35.png": "disconnectchannel",
	"http://s0urce.io/client/img/words/hard/n32v52.png": "getxmlprotocol",
	"http://s0urce.io/client/img/words/hard/n326.png": "wordcounter",
	"http://s0urce.io/client/img/words/hard/b626.png": "encryptunpackedbatch",
	"http://s0urce.io/client/img/words/hard/j3453.png": "deleteallids",
	"http://s0urce.io/client/img/words/hard/k23j6.png": "eventlistdir",
	"http://s0urce.io/client/img/words/hard/m3n63.png": "checkhttptype",
	"http://s0urce.io/client/img/words/medium/hj436.png": "listconfig",
	"http://s0urce.io/client/img/words/medium/sn2.png": "getping",
	"http://s0urce.io/client/img/words/medium/3k5jh3.png": "connect",
	"http://s0urce.io/client/img/words/medium/jn35b.png": "command",
	"http://s0urce.io/client/img/words/medium/5j2356h.png": "getfile",
	"http://s0urce.io/client/img/words/medium/ycmn25.png": "threat",
	"http://s0urce.io/client/img/words/medium/f3234.png": "getinfo",
	"http://s0urce.io/client/img/words/medium/h5g325.png": "getkey",
	"http://s0urce.io/client/img/words/medium/j35h5.png": "number",
	"http://s0urce.io/client/img/words/medium/v235.png": "generate",
	"http://s0urce.io/client/img/words/medium/3h5g5.png": "datatype",
	"http://s0urce.io/client/img/words/hard/n23b56.png": "includedirectory",
	"http://s0urce.io/client/img/words/hard/v51.png": "createnewpackage",
	"http://s0urce.io/client/img/words/hard/n23v55.png": "createfilethread",
	"http://s0urce.io/client/img/words/hard/m2b62.png": "getpartoffile",
	"http://s0urce.io/client/img/words/hard/mb2.png": "ghostfilesystem",
	"http://s0urce.io/client/img/words/hard/lkkj2.png": "destroybatch",
	"http://s0urce.io/client/img/words/hard/yxb24.png": "loadaltevent",
	"http://s0urce.io/client/img/words/hard/b5256.png": "changepassword",
	"http://s0urce.io/client/img/words/hard/j35g2.png": "mergesocket",
	"http://s0urce.io/client/img/words/hard/b235.png": "getmysqldomain",
	"http://s0urce.io/client/img/words/hard/mb235.png": "batchallfiles",
	"http://s0urce.io/client/img/words/hard/nv2353.png": "blockthreat",
	"http://s0urce.io/client/img/words/hard/h2v5.png": "setnewproxy",
	"http://s0urce.io/client/img/words/hard/j363.png": "getdatapassword",
	"http://s0urce.io/client/img/words/hard/fhweg.png": "patcheventlog",
	"http://s0urce.io/client/img/words/hard/k43h2.png": "systemgridtype",
	"http://s0urce.io/client/img/words/hard/bv35b23.png": "create2axisvector",
	"http://s0urce.io/client/img/words/hard/b32563.png": "removenewcookie",
	"http://s0urce.io/client/img/words/hard/vbv42.png": "bufferpingset",
	"http://s0urce.io/client/img/words/hard/f5452.png": "joinnetworkclient",
	"http://s0urce.io/client/img/words/hard/h552.png": "generatecodepack",
	"http://s0urce.io/client/img/words/hard/dnv24.png": "systemportkey",
	"http://s0urce.io/client/img/words/medium/5hj23.png": "password",
	"http://s0urce.io/client/img/words/medium/j2h512.png": "mysql",
	"http://s0urce.io/client/img/words/medium/j3k6h.png": "writefile",
	"http://s0urce.io/client/img/words/medium/78m.png": "account",
	"http://s0urce.io/client/img/words/medium/f3j3.png": "loadbytes",
	"http://s0urce.io/client/img/words/medium/8725h.png": "newserver",
	"http://s0urce.io/client/img/words/easy/gf43t.png": "send",
	"http://s0urce.io/client/img/words/easy/f4ef3.png":"left",
	"http://s0urce.io/client/img/words/medium/736h.png":"proxy",
	"http://s0urce.io/client/img/words/medium/j3252.png": "config",
	"http://s0urce.io/client/img/words/medium/35hj.png": "server",
	"http://s0urce.io/client/img/words/medium/3j2gh5.png": "response",
	"http://s0urce.io/client/img/words/medium/j35h.png": "syscall",
	"http://s0urce.io/client/img/words/medium/5h323.png": "module"
};

message = "papa bless, one love /r/javascript";
frequency = 1000;

automate = () => {
	if ($("#player-list").is(":visible") === false) {
		console.error("! Target list must be open");
		$("#desktop-list").children("img").click();
	}
	if ($("#window-shop").is(":visible") === false) {
		console.error("! Black market must be open");
		$("#desktop-shop").children("img").click();
	}
	isAutomated = true;
	const targetName = $("#player-list").children("tr").eq(0)[0].innerText;
	console.log(`* Now attacking ${targetName}`);
	$("#player-list").children("tr").eq(0)[0].click();
	$("#window-other-button").click();
	$("#window-other-port2").click();
	wordLoop = setInterval(() => {
		if (block === true) {
			return;
		}
		if ($("#targetmessage-input").is(":visible") === true) {
			// we're done!
			$("#targetmessage-input").val(message);
			$("#targetmessage-button-send").click();
			restart();
			return;
		}
		go();
	}, frequency);
	minerLoop =  = setInterval(() => {
		// first, get the status of our miners

	}, frequency);
}

restart = () => {
	stop();
	automate();
}

stop = () => {
	if (wordLoop === null && minerLoop === null) {
		console.log("! No loops to stop");
		return;
	}
	isAutomated = false;
	block = false;
	clearInterval(wordLoop);
	clearInterval(minerLoop);
	wordLoop = null;
	console.log("* Stopped loop");
}

exportListing = () => {
	console.log(JSON.stringify(listing, null, 2));
}

register = () => {
	$("#desktop-computer").children("img").on("click", (e) => {
		go();
	});
	$("#desktop-miner").children("img").on("click", (e) => {
		const word = $("#tool-type-word").val();
		learn(word);
	});
	return "* Event listeners registered!";
}

go = () => {
	console.log("* Running 'go'");
	const wordLink = $(".tool-type-img").prop("src");
	if (listing.hasOwnProperty(wordLink) === true) {
		const word = listing[wordLink];
		console.log(`* Found word: [${word}]`);
		submit(word);
		return;
	}
	console.log("* Not seen, trying OCR...");
	ocr(wordLink);
}

submit = (word) => {
	$("#tool-type-word").val(word);
	$("#tool-type-word").submit();
}

learn = (word) => {
	const wordLink = $(".tool-type-img").prop("src");
	listing[wordLink] = word;
	submit(word);
}

ocr = (url) => {
	block = true;
	$.post("http://api.ocr.space/parse/image", {
		apikey: "e3b7e80ac588957",
		language: "eng",
		url: url
	}).done((data) => {
		const word = String(data["ParsedResults"][0]["ParsedText"]).trim().toLowerCase();
		if (word.length > 3) {
			console.log(`* Got data: [${word}]`);
			$("#tool-type-word").val(word);
			if (isAutomated === true) {
				learn(word);
				block = false;
			}
		} else {
			console.log("! OCR failed");
			restart();
		}
	});
}
